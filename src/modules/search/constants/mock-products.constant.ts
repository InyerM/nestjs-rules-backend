import { Products } from '@/common/interfaces/product.interface';

export const MOCK_PRODUCTS: Products = [
  {
    upc: '1234567890123',
    name: 'Apple Juice',
    price: 5.99,
    vendorCode: 'A1B2C3',
    alternateCode: '987654321',
  },
  {
    upc: '9876543210987',
    name: 'Orange Juice',
    price: 4.99,
    vendorCode: 'X9Y8Z7',
    alternateCode: '654321987',
  },
];
