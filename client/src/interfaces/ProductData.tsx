export interface ProductData {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatadAt: Date;
}

export interface ProductResult {
  totalData: number;
  result: ProductData[];
  page: number;
  totalPage: number;
}
