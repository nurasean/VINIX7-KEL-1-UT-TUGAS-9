import { NextResponse } from "next/server";

export function middleware(request) {
  const session = request.cookies.get("demo_session")?.value;

  if (!session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set(
      "next",
      `${request.nextUrl.pathname}${request.nextUrl.search}`
    );

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/marketplace/chat/:path*",
    "/marketplace/checkout/:path*",
  ],
};
