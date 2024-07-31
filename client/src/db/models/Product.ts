import { ProductData } from "@/interfaces/ProductData";
import DB from "../connection";

class ProductModel {
  static async findAllProducts() {
    const collection = DB.collection<ProductData>("Products");

    return collection.find().toArray();
  }
}

export default ProductModel;
