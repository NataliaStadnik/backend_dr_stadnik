import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Интерцепторы изменяют ответы до их отправки пользователю.
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before interceptor...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After interceptor... ${Date.now() - now}ms`)),
      );
  }
}
