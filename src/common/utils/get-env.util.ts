// Core
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { z } from 'zod';

// Interfaces
import { GetEnv } from '../interfaces/get-env.interface';

// Schemas
import { envSchema } from '../schemas/env.schema';

// Cache the environment config to avoid multiple initializations
let cachedEnv: GetEnv | undefined;

export function getEnv(configService: ConfigService): GetEnv {
  if (cachedEnv) return cachedEnv;

  // Retrieve all environment variables before validation (improves performance)
  const rawEnv = {
    node: {
      port: configService.get<number>('PORT'),
      nodeEnv: configService.get<string>('NODE_ENV'),
    },
    swagger: {
      enabled: configService.get<string>('SWAGGER_ENABLED'),
      title: configService.get<string>('SWAGGER_TITLE'),
      description: configService.get<string>('SWAGGER_DESCRIPTION'),
      version: configService.get<string>('SWAGGER_VERSION'),
      path: configService.get<string>('SWAGGER_PATH'),
    },
  };

  try {
    // Validate and parse environment variables
    cachedEnv = envSchema.parse(rawEnv);
    Logger.log('[INIT] Environment variables loaded successfully ✅');
    return cachedEnv;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors
        .map((err) => {
          return `❌ Error in "${err.path.join('.')}" → ${err.message}`;
        })
        .join('\n');

      Logger.error(`\n[ENV VALIDATION ERROR] ❌${formattedErrors}`);
      throw new Error(`[ENV VALIDATION FAILED] ❌${formattedErrors}`);
    }

    throw error;
  }
}
