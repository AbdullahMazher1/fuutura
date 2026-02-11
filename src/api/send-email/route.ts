// app/api/send-email/route.ts

import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { MagicLinkEmail } from "../../emails/MagicLinkEmail";

export async function POST(req: Request) {
  const { email } = await req.json();

  // Create JWT token (expires in 15 minutes)
  const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
    expiresIn: "15m",
  });

  const verifyLink = `http://localhost:3000/verify?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    to: email,
    subject: "Verify your email",
    html: MagicLinkEmail({ link: verifyLink }),
  });

  return NextResponse.json({ message: "Email sent" });
}
