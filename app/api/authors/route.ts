import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import fs from "fs/promises";
import path from "path";
import { v4 as uuid } from "uuid";

export async function GET() {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM authors ORDER BY name ASC`
    );
    return NextResponse.json({ success: true, authors: rows });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch authors" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString().trim() ?? "";
    const designation = formData.get("designation")?.toString().trim() ?? "";
    const imageFile = formData.get("image") as File | null;

    if (!name) {
      return NextResponse.json({ success: false, message: "Name is required" }, { status: 400 });
    }

    let image: string | null = null;

    if (imageFile && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const ext = imageFile.name.split(".").pop();
      const fileName = `${uuid()}.${ext}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      await fs.mkdir(uploadDir, { recursive: true });
      await fs.writeFile(path.join(uploadDir, fileName), buffer);
      image = `/uploads/${fileName}`;
    }

    const [result]: any = await pool.query(
      `INSERT INTO authors (name, designation, image) VALUES (?, ?, ?)`,
      [name, designation, image]
    );

    return NextResponse.json({ success: true, authorId: result.insertId });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to create author" }, { status: 500 });
  }
}