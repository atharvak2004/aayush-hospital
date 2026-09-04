import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Name, email and password are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    // Basic password strength check
    if (password.length < 8) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 8 characters." },
        { status: 400 }
      );
    }

    // Check if an admin with this email already exists
    const [existing]: any = await pool.query(
      `SELECT id FROM admins WHERE email = ? LIMIT 1`,
      [email]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { success: false, message: "An admin with this email already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const adminRole = role || "admin";

    const [result]: any = await pool.query(
      `INSERT INTO admins (name, email, password, role) VALUES (?, ?, ?, ?)`,
      [name, email, hashedPassword, adminRole]
    );

    const token = signToken({
      id: result.insertId,
      name,
      email,
      role: adminRole,
    });

    return NextResponse.json({
      success: true,
      token,
      admin: {
        id: result.insertId,
        name,
        email,
        role: adminRole,
      },
    });
  } catch (err) {
    // console.error(err);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}