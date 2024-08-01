import { ObjectId } from "mongodb";
import DB from "../connection";

interface Wishlist {
  userId: object;
  productId: object;
  createdAt: Date;
  updatedAt: Date;
}

class WishlistModel {
  static async findAllWishlists(userId: string) {
    const collection = DB.collection<Wishlist>("Wishlists");

    return collection.find().toArray();
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
  static async removeWishlist(productId: string) {
    const collection = DB.collection<Wishlist>("Wishlists");

    return collection.deleteOne({ _id: new ObjectId(productId) });
  }
}

export default WishlistModel;
