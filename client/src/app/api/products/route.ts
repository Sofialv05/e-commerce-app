import ProductModel from "@/db/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await ProductModel.findAllProducts();

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
