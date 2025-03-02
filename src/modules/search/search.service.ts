import { Injectable } from '@nestjs/common';
import { SearchProductDto } from './dto/search-product.dto';
import { SearchResponseDto } from './dto/search-response.dto';
import { SearchType } from './enums/search-type.enum';
import { Product } from '@/common/interfaces/product.interface';
import { MOCK_PRODUCTS } from './constants/mock-products.constant';

@Injectable()
export class SearchService {
  public searchProduct(data: SearchProductDto): SearchResponseDto {
    let product: Product | undefined;

    switch (data.searchType) {
      case SearchType.UPC:
        product = MOCK_PRODUCTS.find((p) => p.upc === data.searchValue);
        break;
      case SearchType.ALTERNATE_CODE:
        product = MOCK_PRODUCTS.find(
          (p) => p.alternateCode === data.searchValue,
        );
        break;
      case SearchType.VENDOR_CODE:
        product = MOCK_PRODUCTS.find((p) => p.vendorCode === data.searchValue);
        break;
      default:
        return { found: false };
    }

    if (!product) {
      return { found: false };
    }

    return {
      found: true,
      productName: product.name,
      upc: product.upc,
      price: product.price,
    };
  }
}
