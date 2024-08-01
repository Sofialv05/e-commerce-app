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
  createdAt: Date;
  updatedAt: Date;
}

class ProductModel {
  static async findAllProducts() {
    const collection = DB.collection<Product>("Products");

    return collection.find().toArray();
  }
  static async findOneProduct(slug: string) {
    const collection = DB.collection<Product>("Products");

    return collection.findOne({ slug });
  }
  // static async insertAll(
  //   datas: {
  //     name: string;
  //     slug: string;
  //     description: string;
  //     excerpt: string;
  //     price: number;
  //     tags: string[];
  //     thumbnail: string;
  //     images: string[];
  //   }[]
  // ) {
  //   const collection = DB.collection<Product>("Products");
  //   for (let data of datas) {
  //     let result = collection.insertOne({
  //       ...data,
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //     });
  //     // console.log(data);
  //   }
  // }
}

export default ProductModel;
