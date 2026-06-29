import { NextResponse } from "next/server";

export async function POST() {
  // Client is responsible for removing the token from localStorage
  return NextResponse.json({
    success: true,
    message: "Logged out successfully.",
  });
}