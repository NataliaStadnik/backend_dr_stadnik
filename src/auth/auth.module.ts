import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TokenCleanupService } from './token-cleanup.service';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const accessTtl = config.get<string>('JWT_ACCESS_TTL') ?? '15m';
        return {
          secret: config.getOrThrow<string>('JWT_ACCESS_SECRET'),
          signOptions: {
            expiresIn: accessTtl as unknown as never,
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, TokenCleanupService],
  exports: [AuthService],
})
export class AuthModule {}
