import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SkippedService } from './skipped.service';
import { ApplySkippedDto } from './dto/apply-skipped.dto';
import { SkippedResponseDto } from './dto/skipped-response.dto';

@ApiTags('Skipped')
@Controller('skipped')
export class SkippedController {
  public constructor(private readonly skippedService: SkippedService) {}

  @Post('apply')
  @ApiOperation({ summary: 'Apply skipping rules to a product' })
  @ApiResponse({
    status: 200,
    description: 'Skipping rules applied',
    type: SkippedResponseDto,
  })
  public applySkippedRules(@Body() data: ApplySkippedDto): SkippedResponseDto {
    return this.skippedService.applySkippedRules(data);
  }
}
