import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authBaseRoute = "/auth";

export function middleware(req: NextRequest) {
  // Bypass static file requests
  if (
    req.nextUrl.pathname.startsWith("/_next/static") ||
    req.nextUrl.pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const isAuthenticated = req.cookies.get("accessToken");

  if (!isAuthenticated && !req.nextUrl.pathname.startsWith(authBaseRoute)) {
    const authURL = new URL("/auth", req.nextUrl.origin);
    return NextResponse.redirect(authURL.toString());
  }

  if (isAuthenticated && req.nextUrl.pathname.startsWith(authBaseRoute)) {
    const homeUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(homeUrl.toString());
  }

  return NextResponse.next();
}
