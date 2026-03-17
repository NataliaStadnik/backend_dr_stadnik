import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { randomBytes, createHash } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

function sha256(value: string) {
  return createHash('sha256').update(value).digest('hex');
}

@Injectable()
export class AuthService {
  constructor(
    private readonly users: UsersService,
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async register(email: string, password: string) {
    // 1. Проверяем, не занят ли email
    const candidate = await this.users.findByEmail(email);
    if (candidate) {
      throw new ConflictException('A user with this email already exists.');
    }

    // 2. Хешируем пароль
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 3. Сохраняем в базу через UsersService
    const newUser = await this.users.create({
      email,
      passwordHash,
    });

    // Возвращаем пользователя без пароля
    const { passwordHash: _, ...result } = newUser;
    return result;
  }

  private accessTtl(): string {
    return this.config.get<string>('JWT_ACCESS_TTL') ?? '15m';
  }

  private refreshTtlDays() {
    const raw = this.config.get<string>('JWT_REFRESH_TTL_DAYS') ?? '30';
    const days = Number(raw);
    return Number.isFinite(days) && days > 0 ? days : 30;
  }

  async login(email: string, password: string) {
    const user = await this.users.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    if (!user.isActive) {
      throw new UnauthorizedException('User is deactivated');
    }

    return this.generateTokens(user);
  }

  async logout(refreshToken: string) {
    const tokenHash = sha256(refreshToken);
    const token = await this.prisma.refreshToken.findUnique({
      where: { tokenHash },
    });

    // Если токена нет, или он уже отозван, или он просрочен —
    // цель (сделать его невалидным) уже достигнута.
    if (!token || token.revokedAt || new Date() > token.expiresAt) {
      return { success: true };
    }

    // Обновляем только если токен был активен
    await this.prisma.refreshToken.update({
      where: { tokenHash },
      data: { revokedAt: new Date() },
    });

    return { success: true };
  }

  async refresh(oldRefreshToken: string) {
    const tokenHash = sha256(oldRefreshToken);

    // 1. Ищем токен в базе
    const tokenRecord = await this.prisma.refreshToken.findUnique({
      where: { tokenHash },
      include: { user: true }, // Чтобы получить данные пользователя
    });

    // 2. Проверки: существует ли, не отозван ли, не просрочен ли
    if (
      !tokenRecord ||
      tokenRecord.revokedAt ||
      new Date() > tokenRecord.expiresAt
    ) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    // 3. Удаляем или отзываем старый токен (Rotation)
    // Лучше удалить, чтобы не копить мусор, или пометить revokedAt
    await this.prisma.refreshToken.delete({
      where: { id: tokenRecord.id },
    });

    if (!tokenRecord.user.isActive) {
      throw new UnauthorizedException('User is deactivated');
    }

    return this.generateTokens(tokenRecord.user);
  }

  private async generateTokens(user: { id: number; email: string }) {
    const accessToken = await this.jwt.signAsync(
      { sub: user.id, email: user.email },
      {
        secret: this.config.getOrThrow<string>('JWT_ACCESS_SECRET'),
        expiresIn: this.accessTtl() as unknown as never,
      },
    );

    const refreshToken = randomBytes(48).toString('base64url');
    const tokenHash = sha256(refreshToken);
    const expiresAt = new Date(
      Date.now() + this.refreshTtlDays() * 24 * 60 * 60 * 1000,
    );

    try {
      await this.prisma.refreshToken.create({
        data: {
          tokenHash,
          expiresAt,
          userId: user.id,
        },
      });
    } catch {
      throw new InternalServerErrorException('Could not create refresh token');
    }

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: (user as any).firstName,
        lastName: (user as any).lastName,
      },
    };
  }
}
