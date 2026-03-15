import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import compression from 'compression';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security
  app.use(helmet());

  // Compression
  app.use(compression());

  // CORS
  const allowedOrigins = process.env.ALLOWED_ORIGINS;
  app.enableCors({
    origin: allowedOrigins ? allowedOrigins.split(',') : '*',
    credentials: true,
  });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Global exception filter — standardises all error responses
  app.useGlobalFilters(new HttpExceptionFilter());

  // Настройка конфигурации Swagger
  const config = new DocumentBuilder()
    .setTitle('My Project API')
    .setDescription('Description of my project')
    .setVersion('1.0')
    .addBearerAuth() // Добавляет кнопку Authorize для JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Путь, по которому будет доступен Swagger (например, http://localhost:3000/api)
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
