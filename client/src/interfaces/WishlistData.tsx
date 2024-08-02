import { ProductData } from "./ProductData";

export interface WishlistData {
  _id: object;
  userId: object;
  productId: object;
  product: ProductData;
  createdAt: Date;
  updatedAt: Date;
}
