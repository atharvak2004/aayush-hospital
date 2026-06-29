import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { name, slug } = await req.json();

    const [result]: any = await pool.query(
      `UPDATE categories SET name = ?, slug = ? WHERE id = ?`,
      [name.trim(), slug.trim(), id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ success: false, message: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    const isDuplicate = error.code === "ER_DUP_ENTRY";
    return NextResponse.json(
      { success: false, message: isDuplicate ? "Name or slug already exists" : "Failed to update" },
      { status: isDuplicate ? 409 : 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const [result]: any = await pool.query(
      `DELETE FROM categories WHERE id = ?`,
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ success: false, message: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to delete" }, { status: 500 });
  }
}