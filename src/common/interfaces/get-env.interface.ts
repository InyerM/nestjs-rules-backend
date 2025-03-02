import { Environment } from '../enums/environment.enum';

interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  path: string;
  version: string;
}

interface NodeConfig {
  port: number;
  nodeEnv: Environment;
}

export interface GetEnv {
  node: NodeConfig;
  swagger: SwaggerConfig;
}
