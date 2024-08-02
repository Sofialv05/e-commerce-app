import WishlistModel from "@/db/models/Wishlist";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // console.log("test");
    const reqHeaders = headers();
    const userId = reqHeaders.get("x-user-id") as string;
    // console.log(userId);
    if (!userId) {
      throw new Error("User is required");
    }
    const data = await WishlistModel.findAllWishlists(userId);
    // console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const productId: string = await request.json();
    const reqHeaders = headers();
    const userId = reqHeaders.get("x-user-id") as string;

    if (!productId) {
      throw new Error("product must be provided");
    }
    const result = await WishlistModel.addWishlist({
      userId,
      productId,
    });
    return NextResponse.json(
      { message: "success add an item to the wishlist" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
