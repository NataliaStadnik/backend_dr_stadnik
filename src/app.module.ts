import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { CacheModule } from '@nestjs/cache-manager';
import { ScheduleModule } from '@nestjs/schedule';
import * as Joi from 'joi';
import { ONE_MINUTE_MS } from './common/constants';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { SeminarsModule } from './seminars/seminars.module';
import { ArticlesModule } from './articles/articles.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        JWT_ACCESS_SECRET: Joi.string().required(),
        JWT_REFRESH_SECRET: Joi.string().required(),
        JWT_ACCESS_TTL: Joi.string().default('15m'),
        JWT_REFRESH_TTL_DAYS: Joi.number().default(30),
        PORT: Joi.number().default(3000),
        ALLOWED_ORIGINS: Joi.string().optional(),
      }),
    }),
    // Rate limiting: 100 requests per minute globally
    ThrottlerModule.forRoot([{ ttl: ONE_MINUTE_MS, limit: 100 }]),
    // In-memory cache: 60 seconds TTL
    CacheModule.register({ ttl: ONE_MINUTE_MS, isGlobal: true }),
    // Cron jobs
    ScheduleModule.forRoot(),
    UsersModule,
    ReviewsModule,
    AuthModule,
    SeminarsModule,
    ArticlesModule,
    HealthModule,
  ],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}

