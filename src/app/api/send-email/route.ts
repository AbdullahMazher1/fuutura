import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 },
      );
    }

    await connectDB();

    // 🔥 Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    // 🔥 Create or Update User
    await User.findOneAndUpdate(
      { email },
      {
        email,
        otp,
        otpExpiry,
      },
      { upsert: true, new: true },
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      to: email,
      subject: "Your OTP Code",
      html: `
        <div style="font-family: Arial;">
          <h2>Your Verification Code</h2>
          <p>Your OTP is:</p>
          <h1>${otp}</h1>
          <p>This code will expire in 5 minutes.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error("Error sending OTP", err);
    return NextResponse.json(
      { message: "Failed to send OTP" },
      { status: 500 },
    );
  }
}
