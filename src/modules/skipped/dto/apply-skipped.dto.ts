import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsEnum, IsString } from 'class-validator';
import { InventoryStatus } from '@/common/enums/inventory-status.enum';

export class ApplySkippedDto {
  @ApiProperty({
    description: 'Indicates if the product is on sale',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  public onSale?: boolean;

  @ApiProperty({
    description: 'Inventory status of the product',
    example: 'NP',
  })
  @IsOptional()
  @IsEnum(InventoryStatus)
  public inventoryStatus?: string;

  @ApiProperty({
    description: 'Like code for the product',
    example: '123ABC',
    required: false,
  })
  @IsOptional()
  @IsString()
  public likeCode?: string;

  @ApiProperty({
    description: 'Provider name',
    example: 'Supermarket Co.',
    required: false,
  })
  @IsOptional()
  @IsString()
  public providerName?: string;

  @ApiProperty({
    description: 'End date for sale (ISO format)',
    example: '2024-03-15',
    required: false,
  })
  @IsOptional()
  @IsString()
  public saleEndDate?: string;

  @ApiProperty({
    description: 'End date for TPR (Temporary Price Reduction)',
    example: '2024-03-10',
    required: false,
  })
  @IsOptional()
  @IsString()
  public tprEndDate?: string;
}
