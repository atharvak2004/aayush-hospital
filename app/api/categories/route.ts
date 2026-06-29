import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM categories ORDER BY name ASC`
    );
    return NextResponse.json({ success: true, categories: rows });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, slug } = await req.json();

    if (!name || !slug) {
      return NextResponse.json({ success: false, message: "Name and slug are required" }, { status: 400 });
    }

    const [result]: any = await pool.query(
      `INSERT INTO categories (name, slug) VALUES (?, ?)`,
      [name.trim(), slug.trim()]
    );

    return NextResponse.json({ success: true, categoryId: result.insertId });
  } catch (error: any) {
    const isDuplicate = error.code === "ER_DUP_ENTRY";
    return NextResponse.json(
      { success: false, message: isDuplicate ? "Name or slug already exists" : "Failed to create category" },
      { status: isDuplicate ? 409 : 500 }
    );
  }
}