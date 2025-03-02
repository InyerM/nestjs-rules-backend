import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('health')
@ApiTags('Health')
export class HealthController {
  public constructor() {}

  @Get()
  @ApiOperation({ summary: 'Check the health of the service' })
  @ApiResponse({ status: HttpStatus.OK, description: 'OK' })
  @HttpCode(HttpStatus.OK)
  public check(): Promise<string> {
    return Promise.resolve('OK');
  }
}
