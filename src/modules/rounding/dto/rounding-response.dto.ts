import { ApiProperty } from '@nestjs/swagger';

export class RoundingResponseDto {
  @ApiProperty({ description: 'Original price before rounding', example: 3.21 })
  public originalPrice: number;

  @ApiProperty({
    description: 'Rounded price after applying the rule',
    example: 3.29,
  })
  public roundedPrice: number;

  @ApiProperty({
    description: 'Applied rounding rule',
    example: 'BRAVO_SUPERMARKET',
  })
  public appliedRule: string;
}
