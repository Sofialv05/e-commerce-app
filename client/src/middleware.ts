import { jwtVerify } from "jose";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  //   console.log("testtt");
  const cookieToken = cookies().get("accessToken");
  if (!cookieToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const jwtSecret = new TextEncoder().encode(process.env.SECRET_KEY as string);
  const { payload } = await jwtVerify<{ _id: string; email: string }>(
    cookieToken.value,
    jwtSecret
  );

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-user-id", payload._id);
  requestHeaders.set("x-user-email", payload.email);
  // console.log(requestHeaders);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/wishlist", "/api/wishlist", "/api/wishlist/:id*"],
};
