import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RoundingService } from './rounding.service';
import { ApplyRoundingDto } from './dto/apply-rounding.dto';
import { RoundingResponseDto } from './dto/rounding-response.dto';

@ApiTags('Rounding')
@Controller('rounding')
export class RoundingController {
  public constructor(private readonly roundingService: RoundingService) {}

  @Post('apply')
  @ApiOperation({ summary: 'Apply rounding rule to a given price' })
  @ApiResponse({
    status: 200,
    description: 'Rounded price',
    type: RoundingResponseDto,
  })
  public applyRounding(@Body() data: ApplyRoundingDto): RoundingResponseDto {
    return this.roundingService.applyRounding(data);
  }
}
