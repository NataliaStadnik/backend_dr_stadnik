import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

// кастомный Middleware
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('request middleware for flowers...');
    next();
    // обязательно надо вернуть next чтобы он мог перейти либо к другому миддл либо соктроллеру
  }
}
