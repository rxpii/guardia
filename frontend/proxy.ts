import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname !== "/") return NextResponse.next();
  return NextResponse.redirect(new URL("/home", req.url));
}

export const config = {
  matcher: ["/"],
};
