// Core
import z from 'zod';

// Enums
import { Environment } from '../enums/environment.enum';

export const envSchema = z.object({
  node: z.object({
    port: z.coerce.number().nonnegative().default(3000),
    nodeEnv: z.nativeEnum(Environment).default(Environment.DEVELOPMENT),
  }),
  swagger: z.object({
    enabled: z.coerce.boolean().default(false),
    title: z.string().default('API Docs'),
    description: z.string().default('API documentation'),
    path: z.string().default('docs'),
    version: z.string().default('1.0'),
  }),
});
