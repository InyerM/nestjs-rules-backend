import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { DiscountType } from '../enums/discount-type.enum';

export class ApplyDiscountDto {
  @ApiProperty({ description: 'Original product price', example: 100 })
  @IsNumber()
  public price: number;

  @ApiProperty({
    description: 'Discount value (percentage or fixed amount)',
    example: 10,
  })
  @IsNumber()
  public discountValue: number;

  @ApiProperty({ description: 'Type of discount to apply', enum: DiscountType })
  @IsEnum(DiscountType)
  public discountType: DiscountType;

  @ApiProperty({
    description: 'Provider name (optional for provider-based discounts)',
    example: 'Supermarket Co.',
    required: false,
  })
  @IsOptional()
  @IsString()
  public providerName?: string;
}
