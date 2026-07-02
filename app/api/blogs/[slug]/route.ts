import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// ======================
// GET Single Blog
// ======================
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const decodedSlug = decodeURIComponent(slug).trim();

    const [rows]: any = await pool.query(
      `
      SELECT
        blogs.*,
        categories.name AS category,
        authors.name AS author,
        authors.designation,
        authors.image
      FROM blogs
      LEFT JOIN categories
        ON blogs.category_id = categories.id
      LEFT JOIN authors
        ON blogs.author_id = authors.id
      WHERE blogs.slug = ?
      LIMIT 1
      `,
      [decodedSlug],
    );

    if (rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
          slug: decodedSlug,
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      blog: rows[0],
    });
  } catch (error) {
    // console.error("GET BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 },
    );
  }
}

// ======================
// UPDATE BLOG
// ======================
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const decodedSlug = decodeURIComponent(slug).trim();

    const formData = await req.formData();

    const title = formData.get("title")?.toString() || "";

    const newSlug = formData.get("slug")?.toString() || "";

    const excerpt = formData.get("excerpt")?.toString() || "";

    const content = formData.get("content")?.toString() || "";

    const meta_title = formData.get("meta_title")?.toString() || "";

    const meta_description = formData.get("meta_description")?.toString() || "";

    const keywords = formData.get("keywords")?.toString() || "";

    const category_id = formData.get("category_id")
      ? Number(formData.get("category_id"))
      : null;

    const author_id = formData.get("author_id")
      ? Number(formData.get("author_id"))
      : null;

    const reading_time = Number(formData.get("reading_time") || 5);

    const status = formData.get("status")?.toString() || "draft";

    const featured = formData.get("featured") === "true" ? 1 : 0;

    const published_at = formData.get("published_at")?.toString() || null;

    const thumbnailFile = formData.get("thumbnail") as File | null;
    const thumbnail = thumbnailFile ? thumbnailFile.name : null;

    const [result]: any = await pool.query(
      `
      UPDATE blogs
      SET
        title = ?,
        slug = ?,
        excerpt = ?,
        content = ?,
        thumbnail = ?,
        category_id = ?,
        author_id = ?,
        meta_title = ?,
        meta_description = ?,
        keywords = ?,
        featured = ?,
        status = ?,
        reading_time = ?,
        published_at = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE slug = ?
      `,
      [
        title,
        newSlug || decodedSlug,
        excerpt,
        content,
        thumbnail,
        category_id || null,
        author_id || null,
        meta_title,
        meta_description,
        keywords,
        featured ?? false,
        status,
        reading_time,
        published_at,
        decodedSlug,
      ],
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Blog updated successfully",
    });
  } catch (error) {
    // console.error("UPDATE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to update blog",
      },
      { status: 500 },
    );
  }
}

// ======================
// DELETE BLOG
// ======================
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const decodedSlug = decodeURIComponent(slug).trim();

    const [result]: any = await pool.query(
      `
      DELETE FROM blogs
      WHERE slug = ?
      `,
      [decodedSlug],
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    // console.error("DELETE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to delete blog",
      },
      { status: 500 },
    );
  }
}
