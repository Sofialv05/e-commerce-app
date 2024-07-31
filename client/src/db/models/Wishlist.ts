import DB from "../connection";

interface Wishlist {
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
}

class WishlistModel {
  static async findAllWishlists() {
    const collection = DB.collection<Wishlist>("Wishlists");

    return collection.find().toArray();
  }
}

export default WishlistModel;
