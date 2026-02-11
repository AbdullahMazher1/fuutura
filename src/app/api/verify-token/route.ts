import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const token = body?.token as string | undefined;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Missing token" },
        { status: 400 },
      );
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("JWT_SECRET is not set");
      return NextResponse.json(
        { success: false, message: "Server config error" },
        { status: 500 },
      );
    }

    const decoded = jwt.verify(token, secret);

    return NextResponse.json({
      success: true,
      user: decoded,
    });
  } catch (err) {
    console.error("Verify-token error", err);
    const message =
      err instanceof Error ? err.message : "Invalid or expired token";
    const lower = message.toLowerCase();
    const status =
      lower.includes("expired") || lower.includes("invalid") ? 401 : 500;

    return NextResponse.json({ success: false, message }, { status });
  }
}

