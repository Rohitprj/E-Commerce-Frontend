import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { BASE_URL } from "../utils/axiosInstance";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log("first");
  const path = request.nextUrl.pathname;
  const publicPath = path === "/login" || path === "/signup";

  const cookies = request.cookies.get("refreshToken")?.value;
  // const cookies =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhleUBnbWFpbC5jb20iLCJfaWQiOiI2ODA2NDc3YjIyMDgxN2Y1MWJiN2I0OTYiLCJpYXQiOjE3NDUzMTkyNzYsImV4cCI6MTc0NTkyNDA3Nn0.98SBzGstzB_1zPT1DOsG7MZIdWzh6gW1AwpikrrAy3Y";
  console.log("Cookie : ", cookies);

  if (publicPath && cookies) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// config
export const config = {
  matcher: ["/", "/login", "/signup"],
};
