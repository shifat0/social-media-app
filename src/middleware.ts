import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authRoute = ["/auth"];

export default function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("accessToken");

  if (!isAuthenticated && !authRoute.includes(req.nextUrl.pathname)) {
    const authURL = new URL("/auth", req.nextUrl.origin);
    return NextResponse.redirect(authURL.toString());
  }

  if (isAuthenticated && authRoute.includes(req.nextUrl.pathname)) {
    const homeUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(homeUrl.toString());
  }

  return NextResponse.next();
}
