import { HealthModule } from '../modules/health/health.module';
// Core
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

// Modules
import { DiscountsModule } from '@/modules/discounts/discounts.module';
import { RoundingModule } from '@/modules/rounding/rounding.module';
import { SearchModule } from '@/modules/search/search.module';
import { SkippedModule } from '@/modules/skipped/skipped.module';

// Interceptors
import { LoggingInterceptor } from '@/common/interceptors/logging.interceptor';
import { HttpExceptionFilter } from '@/common/filters/http-exception.filter';

@Module({
  imports: [
    DiscountsModule,
    HealthModule,
    RoundingModule,
    SearchModule,
    SkippedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
