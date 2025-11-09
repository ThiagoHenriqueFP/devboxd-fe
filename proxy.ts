import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authPaths = ["/signin", "/signup"];

export function proxy(request: NextRequest) {
  const isAuthenticated = request.cookies.get("access_token");

  const path = request.nextUrl.pathname;
  const isPathEmpty = path === "/";
  const isAuthPath = authPaths.some((route) => path.startsWith(route));

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", request.url));
  } else if (isPathEmpty || isAuthPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
