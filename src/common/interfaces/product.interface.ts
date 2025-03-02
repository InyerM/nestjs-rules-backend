export interface Product {
  upc: string;
  name: string;
  price: number;
  vendorCode: string;
  alternateCode: string;
}

export type Products = Product[];
