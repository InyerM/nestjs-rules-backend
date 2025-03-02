import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { RoundingRules } from '../enums/rounding-rules.enum';

export class ApplyRoundingDto {
  @ApiProperty({ description: 'Price to be rounded', example: 3.21 })
  @IsNumber()
  public price: number;

  @ApiProperty({ description: 'Rounding rule to apply', enum: RoundingRules })
  @IsEnum(RoundingRules)
  public rule: RoundingRules;

  @ApiProperty({
    description: 'Old unit price for comparison',
    example: 3.99,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  public oldUnitPrice?: number;
}
