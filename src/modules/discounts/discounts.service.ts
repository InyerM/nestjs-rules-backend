import { Injectable } from '@nestjs/common';
import { ApplyDiscountDto } from './dto/apply-discount.dto';
import { DiscountResponseDto } from './dto/discount-response.dto';
import { DiscountType } from './enums/discount-type.enum';

@Injectable()
export class DiscountsService {
  public applyDiscount(data: ApplyDiscountDto): DiscountResponseDto {
    const discountedPrice = this.calculateDiscount(
      data.price,
      data.discountValue,
      data.discountType,
    );

    return {
      originalPrice: data.price,
      discountedPrice,
      appliedDiscount: data.discountValue,
      appliedDiscountType: data.discountType,
    };
  }

  private calculateDiscount(
    price: number,
    discountValue: number,
    discountType: DiscountType,
  ): number {
    switch (discountType) {
      case DiscountType.PERCENTAGE:
        return price - (price * discountValue) / 100;
      case DiscountType.FIXED_AMOUNT:
        return Math.max(price - discountValue, 0);
      case DiscountType.PROVIDER_DISCOUNT:
        return price * 0.95;
      default:
        return price;
    }
  }
}
