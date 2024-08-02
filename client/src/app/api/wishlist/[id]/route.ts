import WishlistModel from "@/db/models/Wishlist";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return NextResponse.json(
        { message: "Id parameter is missing" },
        { status: 400 }
      );
    }

    const result = await WishlistModel.removeWishlist(params.id);
    // console.log(result);
    if (result.acknowledged) {
      return NextResponse.json({
        message: "Success delete an item from the wishlist",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
