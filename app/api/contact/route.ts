import { NextResponse } from "next/server";
import pool from "@/lib/db";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields missing",
        },
        { status: 400 }
      );
    }

    // Save to database
    const query = `
      INSERT INTO contacts (name, email, phone, message)
      VALUES (?, ?, ?, ?)
    `;

    await pool.execute(query, [
      name,
      email,
      phone || null,
      message,
    ]);

    // Mail to User
    await transporter.sendMail({
      from: `"Aayush Hospital" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We have received your enquiry",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Thank You, ${name}</h2>

          <p>
            We have successfully received your enquiry.
          </p>

          <p>
            Our team will contact you within 24 hours.
          </p>

          <br />

          <p><strong>Your Message:</strong></p>

          <div style="background:#f5f5f5;padding:15px;border-radius:8px;">
            ${message}
          </div>

          <br />

          <p>
            Regards,<br/>
            Aayush Hospital Team
          </p>
        </div>
      `,
    });

    // Mail to Admin
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.HOSPITAL_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Patient Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>

          <br />

          <p><strong>Message:</strong></p>

          <div style="background:#f5f5f5;padding:15px;border-radius:8px;">
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    });

  } catch (error: any) {

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Server Error",
      },
      { status: 500 }
    );
  }
}