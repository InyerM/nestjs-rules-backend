import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { SearchType } from '../enums/search-type.enum';

export class SearchProductDto {
  @ApiProperty({ description: 'Search type', enum: SearchType })
  @IsEnum(SearchType)
  public searchType: SearchType;

  @ApiProperty({
    description: 'Search value (UPC, alternate code, or vendor code)',
    example: '1234567890123',
  })
  @IsString()
  public searchValue: string;

  @ApiProperty({
    description: 'Provider name (optional, for vendor code search)',
    example: 'Supermarket Co.',
    required: false,
  })
  @IsOptional()
  @IsString()
  public providerName?: string;
}
