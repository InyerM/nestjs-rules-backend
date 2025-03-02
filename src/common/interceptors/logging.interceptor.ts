import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<unknown> {
    const request = context.switchToHttp().getRequest<Request>();
    const { method, url } = request;
    const startTime = Date.now();

    Logger.debug(`⚡️ [${method}] ${url} - Request...`);

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - startTime;
        Logger.debug(`✅ [${method}] ${url} - Response (${duration}ms)`);
      }),
    );
  }
}
