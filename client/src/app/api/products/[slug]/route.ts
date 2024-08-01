import ProductModel from "@/db/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // const test = new URL(request.url);
    // const slug = searchParams.get("slug" as string) as string;
    // console.log(slug, "<<<<<<<<<<<");
    // console.log(params, "<<<<<<<<<<<");
    if (!params.slug) {
      return NextResponse.json(
        { message: "Slug parameter is missing" },
        { status: 400 }
      );
    }
    const data = await ProductModel.findOneProduct(params.slug);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
