// Core
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// Utils
import { getEnv } from './common/utils/get-env.util';
import { configureApp } from './common/bootstrap/configure-app';

async function bootstrap(): Promise<void> {
  const app = await configureApp();
  const configService = app.get(ConfigService);
  const { node } = getEnv(configService);
  await app.listen(node.port, () => {
    Logger.log(
      `Server is running on http://localhost:${node.port} in ${node.nodeEnv} mode`,
    );
  });
}

void bootstrap();
