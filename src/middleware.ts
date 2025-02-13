import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isAuthenticated = request.cookies.get("auth");

    // Allow access to login page
    if (request.nextUrl.pathname === "/login") {
        return NextResponse.next();
    }

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/home/:path*"]
};