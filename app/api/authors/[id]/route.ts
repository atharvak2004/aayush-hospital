import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import fs from "fs/promises";
import path from "path";
import { v4 as uuid } from "uuid";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const formData = await req.formData();
    const name = formData.get("name")?.toString().trim() ?? "";
    const designation = formData.get("designation")?.toString().trim() ?? "";
    const imageFile = formData.get("image") as File | null;

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

    // Only update image if a new one was uploaded
    const query = image
      ? `UPDATE authors SET name = ?, designation = ?, image = ? WHERE id = ?`
      : `UPDATE authors SET name = ?, designation = ? WHERE id = ?`;

    const values = image
      ? [name, designation, image, id]
      : [name, designation, id];

    const [result]: any = await pool.query(query, values);

    if (result.affectedRows === 0) {
      return NextResponse.json({ success: false, message: "Author not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const [result]: any = await pool.query(
      `DELETE FROM authors WHERE id = ?`,
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ success: false, message: "Author not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to delete" }, { status: 500 });
  }
}