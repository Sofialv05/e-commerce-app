import WishlistModel from "@/db/models/Wishlist";
import { NextRequest, NextResponse } from "next/server";

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await WishlistModel.addWishlist(body);
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

export async function DELETE(request: NextRequest) {
  try {
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
