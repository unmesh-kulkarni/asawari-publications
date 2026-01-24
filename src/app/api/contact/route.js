import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
let transporter = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    transporter.verify().catch(console.error);
  }
  return transporter;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, title, author, notes } = body;
    console.log("Received book request:", body);
    if (!name?.trim() || !title?.trim() || !(email?.trim() || phone?.trim())) {
      return NextResponse.json(
        { error: "Name, Book Title and (email or phone) are required." },
        { status: 400 }
      );
    }

    const subject = `Book request: ${title} — ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email || "-"}`,
      `Phone: ${phone || "-"}`,
      `Book Title: ${title}`,
      `Author: ${author || "-"}`,
      `Notes: ${notes || "-"}`,
    ].join("\n");

    await getTransporter().sendMail({
      from: {
        name: "Website Contact",
        address: process.env.SMTP_USER,
      },
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject,
      text,
      html: `<pre style="font-family:inherit">${text}</pre>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("request-book API error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
