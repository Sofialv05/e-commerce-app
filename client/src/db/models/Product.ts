import { ProductData } from "@/interfaces/ProductData";
import DB from "../connection";

interface Product {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatadAt: string;
}

class ProductModel {
  static async findAllProducts() {
    const collection = DB.collection<Product>("Products");

    return collection.find().toArray();
  }
}

export default ProductModel;
