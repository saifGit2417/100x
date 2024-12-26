/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let requestCount = 0;
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/signin", request.url));
  } else {
    requestCount++;
    const result = NextResponse.next();
    console.log("request count", requestCount);
    console.log("request pathname", request.nextUrl.pathname);
    return result;
  }
}

// See "Matching Paths" below to learn more
// if want this middleware to run on specific route then add them below
// export const config = {
//   matcher: "/api/:path",
// };
