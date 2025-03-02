import { ApiProperty } from '@nestjs/swagger';
import { SkippedReasons } from '../enums/skipped-reasons.enum';

export class SkippedResponseDto {
  @ApiProperty({
    description: 'Indicates if the product is skipped',
    example: true,
  })
  public isSkipped: boolean;

  @ApiProperty({
    description: 'Reason for skipping the product',
    enum: SkippedReasons,
    example: SkippedReasons.SALE_END_DATE,
    required: false,
  })
  public reason?: SkippedReasons;

  @ApiProperty({
    description: 'Message describing the reason',
    example: 'Product is on sale and cannot be modified.',
  })
  public message: string;
}
