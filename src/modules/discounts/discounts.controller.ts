import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DiscountsService } from './discounts.service';
import { ApplyDiscountDto } from './dto/apply-discount.dto';
import { DiscountResponseDto } from './dto/discount-response.dto';

@ApiTags('Discounts')
@Controller('discounts')
export class DiscountsController {
  public constructor(private readonly discountsService: DiscountsService) {}

  @Post('apply')
  @ApiOperation({ summary: 'Apply a discount to a given price' })
  @ApiResponse({
    status: 200,
    description: 'Discount applied',
    type: DiscountResponseDto,
  })
  public applyDiscount(@Body() data: ApplyDiscountDto): DiscountResponseDto {
    return this.discountsService.applyDiscount(data);
  }
}
