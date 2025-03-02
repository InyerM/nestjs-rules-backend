import { ApiProperty } from '@nestjs/swagger';

export class DiscountResponseDto {
  @ApiProperty({ description: 'Original price before discount', example: 100 })
  public originalPrice: number;

  @ApiProperty({
    description: 'Discounted price after applying the rule',
    example: 90,
  })
  public discountedPrice: number;

  @ApiProperty({ description: 'Applied discount value', example: 10 })
  public appliedDiscount: number;

  @ApiProperty({ description: 'Applied discount type', example: 'PERCENTAGE' })
  public appliedDiscountType: string;
}
