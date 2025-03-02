import { ApiProperty } from '@nestjs/swagger';

export class SearchResponseDto {
  @ApiProperty({
    description: 'Indicates if the product was found',
    example: true,
  })
  public found: boolean;

  @ApiProperty({ description: 'Product name', example: 'Apple Juice' })
  public productName?: string;

  @ApiProperty({ description: 'UPC of the product', example: '1234567890123' })
  public upc?: string;

  @ApiProperty({ description: 'Price of the product', example: 5.99 })
  public price?: number;
}
