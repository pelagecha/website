import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const blockedCountries = new Set(["CN"]);

const blockedPaths = [
    "/wp-admin",
    "/phpmyadmin",
    "/.env",
    "/config",
    "/server-status",
];

export function middleware(req: NextRequest) {
    const country = req.headers.get("x-vercel-ip-country") ?? "unknown";
    const path = req.nextUrl.pathname;

    if (blockedCountries.has(country)) {
        return new NextResponse(null, { status: 404 });
    }

    if (blockedPaths.some((p) => path.startsWith(p))) {
        return new NextResponse(null, { status: 404 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/:path*",
};
