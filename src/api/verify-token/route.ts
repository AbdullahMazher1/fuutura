// app/api/verify-token/route.ts

import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    return NextResponse.json({
      success: true,
      user: decoded,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Invalid or expired token" },
      { status: 401 },
    );
  }
}
