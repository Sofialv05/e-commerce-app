import { NextResponse } from "next/server";

export async function POST() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();
  console.log(data);
  return NextResponse.json({ message: "register success" }, { status: 201 });
}
