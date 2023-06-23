import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("--");
  console.log(request.url);

  if (request.url.includes("next1") || request.url.includes("next2")) {
    console.log("nextttt");

    // const response = NextResponse.next();
    // response.cookies.set("woaaah", "co sie dzieje");

    // return NextResponse.redirect(new URL("/", request.url));
    // return response;
    return;
  }

  if (request.url.includes("mpa1")) {
    console.log("mpaaaaa1");

    return NextResponse.redirect(new URL("/mpa2", request.url));
  }

  //   if (request.url.includes("mpa2")) {
  //   }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/next1", "/next2", "/mpa1", "/mpa2"],
};
