import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware");

  //  if (request.nextUrl.pathname !== "/login") {
  return NextResponse.redirect(new URL("/login", request.url));
  // }
}

export const config = {
  // matcher: ["/about/aboutcollege/:path*", "/studentlist/:path*"],
  matcher: ["/cart/placeorder"],
};
