import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "raybalawas@gmail.com",
        pass: "wivxhsycmttcfbdv",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "raybalawas@gmail.com",
      subject: `New Message from ${fullName}`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
