import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SearchService } from './search.service';
import { SearchProductDto } from './dto/search-product.dto';
import { SearchResponseDto } from './dto/search-response.dto';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  public constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiOperation({
    summary: 'Search for a product using UPC, alternate code, or vendor code',
  })
  @ApiResponse({
    status: 200,
    description: 'Product search result',
    type: SearchResponseDto,
  })
  public searchProduct(@Query() data: SearchProductDto): SearchResponseDto {
    return this.searchService.searchProduct(data);
  }
}
