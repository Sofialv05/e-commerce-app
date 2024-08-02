import ProductModel from "@/db/models/Product";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams;

    let size: number = 8;
    if (query.get("size")) {
      size = Number(query.get("size"));
    }

    const page = Number(query.get("page"));

    const search = query.get("search") as string;
    const data = await ProductModel.findAllProducts(size, page, search);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const data = await ProductModel.insertAll(body);

//     return NextResponse.json(data);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
