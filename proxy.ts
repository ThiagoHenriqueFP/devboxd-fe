import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function proxy(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;

  const isAuthRoute = pathname.startsWith("/auth");

  const isProtectedRoute = !isAuthRoute;

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
