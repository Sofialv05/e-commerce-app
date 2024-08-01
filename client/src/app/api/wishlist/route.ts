import WishlistModel from "@/db/models/Wishlist";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const reqHeaders = headers();
    const userId = reqHeaders.get("x-user-id") as string;
    console.log(userId);
    const data = await WishlistModel.findAllWishlists(userId);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: { productId: string } = await request.json();
    const reqHeaders = headers();
    const userId = reqHeaders.get("x-user-id") as string;
    console.log(body.productId);
    if (!body.productId) {
      return;
    }
    const result = await WishlistModel.addWishlist({
      userId,
      productId: body.productId,
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
