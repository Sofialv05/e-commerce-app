import WishlistModel from "@/db/models/Wishlist";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    const reqHeaders = headers();
    const userId = reqHeaders.get("x-user-id") as string;
    const body = await request.json();

    const result = await WishlistModel.removeWishlist(body);

    return NextResponse.json({
      message: "Success delete an item from the wishlist",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
