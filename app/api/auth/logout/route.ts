import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Set the cookie to expire immediately (this clears the cookie)
  response.cookies.set("token", "", { maxAge: 0 });

  return response;
}
