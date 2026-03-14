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

  private accessTtl() {
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
    };
  }

  async logout(refreshToken: string) {
    const tokenHash = sha256(refreshToken);
    const token = await this.prisma.refreshToken.findUnique({
      where: { tokenHash },
    });

    if (!token) return { success: true };
    if (token.revokedAt) return { success: true };

    await this.prisma.refreshToken.update({
      where: { tokenHash },
      data: { revokedAt: new Date() },
    });

    return { success: true };
  }
}
