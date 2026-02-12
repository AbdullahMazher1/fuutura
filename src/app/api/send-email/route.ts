import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { MagicLinkEmail } from "../../../emails/MagicLinkEmail";

export async function POST(req: Request) {
  const { email } = await req.json();

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error("JWT_SECRET is not set");
    return NextResponse.json({ message: "Server config error" }, { status: 500 });
  }

  const token = jwt.sign({ email }, secret, {
    // 1 day expiry as requested
    expiresIn: "1d",
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.fuutura.com";
  const verifyLink = `${baseUrl}/ecosystem?token=${encodeURIComponent(token)}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      to: email,
      subject: "Verify your email",
      html: MagicLinkEmail({ link: verifyLink }),
    });

    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.error("Error sending email", err);
    const message =
      err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json({ message }, { status: 500 });
  }
}

