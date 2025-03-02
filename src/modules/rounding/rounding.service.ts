import { Injectable } from '@nestjs/common';
import { ApplyRoundingDto } from './dto/apply-rounding.dto';
import { RoundingResponseDto } from './dto/rounding-response.dto';
import { RoundingRules } from './enums/rounding-rules.enum';

@Injectable()
export class RoundingService {
  public applyRounding(data: ApplyRoundingDto): RoundingResponseDto {
    const roundedPrice = this.calculateRounding(data.price, data.rule);
    return {
      originalPrice: data.price,
      roundedPrice,
      appliedRule: data.rule,
    };
  }

  private calculateRounding(price: number, rule: RoundingRules): number {
    const integerPart = Math.floor(price);
    const decimalPart = parseFloat((price - integerPart).toFixed(2));

    switch (rule) {
      case RoundingRules.BRAVO_SUPERMARKET:
        return decimalPart <= 0.09
          ? integerPart - 1 + 0.99
          : integerPart + 0.49;

      case RoundingRules.KEYFOOD_HOLLYWOOD:
        return decimalPart <= 0.24
          ? integerPart + 0.29
          : decimalPart >= 0.85
            ? integerPart + 0.99
            : integerPart + 0.79;

      case RoundingRules.BODEGON_3:
        if (decimalPart <= 0.04) return integerPart - 1 + 0.99;
        if (decimalPart >= 0.05 && decimalPart <= 0.14)
          return integerPart + 0.09;
        return integerPart + 0.99;

      case RoundingRules.CARIBBEAN_SUPERCENTER:
        return decimalPart <= 0.19
          ? integerPart - 1 + 0.99
          : integerPart + 0.79;

      case RoundingRules.DEFAULT:
      default:
        return integerPart + 0.99;
    }
  }
}
