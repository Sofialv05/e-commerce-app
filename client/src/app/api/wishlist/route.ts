import WishlistModel from "@/db/models/Wishlist";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await WishlistModel.findAllWishlists();

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
