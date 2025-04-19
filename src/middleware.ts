import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { BASE_URL } from "../utils/axiosInstance";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // console.log("first");
  // const path = request.nextUrl.pathname;
  // const publicPath = path === "/login" || path === "/signup";
  // const cookies = request.cookies;
  // const cookies1 = request.cookies.has("refreshToken");
  // console.log("Cookie : ", cookies.getAll());
  // console.log("Cookie1 : ", cookies1);

  // if()

  // if (publicPath || cookies) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  // if (!publicPath || !cookies) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// export const config = {
// };
