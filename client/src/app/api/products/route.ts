import ProductModel from "@/db/models/Product";
import { NextRequest, NextResponse } from "next/server";

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
