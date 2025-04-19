import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicPath = path === "/login" || path === "/signup";
  const cookies = request.cookies.get("refreshToken")?.value || " ";

  if (publicPath || cookies) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!publicPath || !cookies) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/signup"],
};
