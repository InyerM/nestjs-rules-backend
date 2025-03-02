import { Injectable } from '@nestjs/common';
import { ApplySkippedDto } from './dto/apply-skipped.dto';
import { SkippedResponseDto } from './dto/skipped-response.dto';
import { SkippedReasons } from './enums/skipped-reasons.enum';

@Injectable()
export class SkippedService {
  public applySkippedRules(data: ApplySkippedDto): SkippedResponseDto {
    if (data.onSale) {
      return {
        isSkipped: true,
        reason: SkippedReasons.SALE_END_DATE,
        message: 'Product is on sale and cannot be modified.',
      };
    }

    if (data.inventoryStatus === 'NP') {
      return {
        isSkipped: true,
        reason: SkippedReasons.INVENTORY_NP,
        message: 'Inventory is not available.',
      };
    }

    if (data.likeCode) {
      return {
        isSkipped: true,
        reason: SkippedReasons.LIKE_CODE_PROCESSED,
        message: 'Like code has already been processed.',
      };
    }

    if (data.providerName === 'Supermarket Co.' && data.saleEndDate) {
      return {
        isSkipped: true,
        reason: SkippedReasons.PROVIDER_RESTRICTION,
        message: 'This provider has restrictions on sales.',
      };
    }

    return {
      isSkipped: false,
      message: 'Product passed exclusion rules successfully.',
    };
  }
}
