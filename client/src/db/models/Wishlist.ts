import { ObjectId } from "mongodb";
import DB from "../connection";
import { ProductData } from "@/interfaces/ProductData";

interface Wishlist {
  userId: object;
  productId: object;
  // product: ProductData;
  createdAt: Date;
  updatedAt: Date;
}

class WishlistModel {
  static async findAllWishlists(userId: string) {
    const collection = DB.collection("Wishlists");
    const pipeline = [
      {
        $lookup:
          /**
           * from: The target collection.
           * localField: The local join field.
           * foreignField: The target join field.
           * as: The name for the results.
           * pipeline: Optional pipeline to run on the foreign collection.
           * let: Optional variables to use in the pipeline field stages.
           */
          {
            from: "Products",
            localField: "productId",
            foreignField: "_id",
            as: "product",
          },
      },
      {
        $unwind:
          /**
           * path: Path to the array field.
           * includeArrayIndex: Optional name for index.
           * preserveNullAndEmptyArrays: Optional
           *   toggle to unwind null and empty values.
           */
          {
            path: "$product",
          },
      },
      {
        $match:
          /**
           * query: The query in MQL.
           */
          {
            userId: new ObjectId(userId),
          },
      },
      {
        $sort:
          /**
           * Provide any number of field/order pairs.
           */
          {
            createdAt: -1,
          },
      },
    ];
    const result = await collection.aggregate(pipeline).toArray();
    // console.log(result);
    return result;
  }
  static async addWishlist(inputWishlist: {
    userId: string;
    productId: string;
  }) {
    const { userId, productId } = inputWishlist;
    const collection = DB.collection<Wishlist>("Wishlists");

    return collection.insertOne({
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  static async removeWishlist(id: string, userId: string) {
    const collection = DB.collection<Wishlist>("Wishlists");

    return collection.deleteOne({
      _id: new ObjectId(id),
      userId: new ObjectId(userId),
    });
  }
  static async findOneWishlist(id: string) {
    const collection = DB.collection<Wishlist>("Wishlists");

    return collection.findOne({ _id: new ObjectId(id) });
  }
}

export default WishlistModel;
