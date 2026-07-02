import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { initializeDatabase } from "@/lib/initDb";
import fs from "fs/promises";
import path from "path";
import { v4 as uuid } from "uuid";

let initialized = false;

async function ensureDatabase() {
  if (!initialized) {
    await initializeDatabase();
    initialized = true;
  }
}

// =========================
// GET ALL BLOGS
// =========================
export async function GET() {
  try {
    await ensureDatabase();

    const [rows] = await pool.query(`
      SELECT
        blogs.id,
        blogs.title,
        blogs.slug,
        blogs.excerpt,
        blogs.thumbnail,
        blogs.meta_title,
        blogs.meta_description,
        blogs.status,
        blogs.featured,
        blogs.views,
        blogs.reading_time,
        blogs.published_at,
        blogs.created_at,
        categories.name AS category,
        authors.name AS author
      FROM blogs
      LEFT JOIN categories ON blogs.category_id = categories.id
      LEFT JOIN authors ON blogs.author_id = authors.id
      ORDER BY blogs.created_at DESC
    `);

    return NextResponse.json({ success: true, blogs: rows });
  } catch (error) {
    // console.error("GET BLOGS ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to fetch blogs",
      },
      { status: 500 },
    );
  }
}

// =========================
// CREATE BLOG
// =========================
export async function POST(req: NextRequest) {
  try {
    await ensureDatabase();

    const formData = await req.formData();

    const data: Record<string, string> = {};
    let thumbnailFile: File | null = null;

    for (const [rawKey, value] of formData.entries()) {
      // Normalize key
      const key = rawKey.trim();

      if (typeof value === "string") {
        // console.log(`${key.padEnd(20)} ${value}`);

        // Store WITHOUT spaces
        data[key] = value;
      } else {

        if (key === "thumbnail") {
          thumbnailFile = value;
        }
      }
    }


    const title = data.title?.trim() ?? "";
    const slug = data.slug?.trim() ?? "";
    const excerpt = data.excerpt?.trim() ?? "";
    const content = data.content?.trim() ?? "";

    const meta_title = data.meta_title?.trim() ?? "";
    const meta_description = data.meta_description?.trim() ?? "";
    const keywords = data.keywords?.trim() ?? "";

    const featured = data.featured === "true";

    const status = (data.status ?? "draft") as
      | "draft"
      | "published";

    const reading_time = Number(data.reading_time ?? 5);

    const category_id = data.category_id
      ? Number(data.category_id)
      : null;

    const author_id = data.author_id
      ? Number(data.author_id)
      : null;

    if (!title || !slug || !content) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
          data,
        },
        { status: 400 }
      );
    }

    let thumbnail: string | null = null;

    if (thumbnailFile && thumbnailFile.size > 0) {
      const bytes = await thumbnailFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const extension = thumbnailFile.name.split(".").pop();
      const fileName = `${uuid()}.${extension}`;

      const uploadDir = path.join(process.cwd(), "public", "uploads");

      await fs.mkdir(uploadDir, { recursive: true });

      await fs.writeFile(
        path.join(uploadDir, fileName),
        buffer
      );

      thumbnail = `/uploads/${fileName}`;
    }

    const published_at = new Date();

    const [result]: any = await pool.query(
      `
      INSERT INTO blogs (
        title,
        slug,
        excerpt,
        content,
        thumbnail,
        category_id,
        author_id,
        meta_title,
        meta_description,
        keywords,
        featured,
        status,
        reading_time,
        published_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        title,
        slug,
        excerpt,
        content,
        thumbnail,
        category_id,
        author_id,
        meta_title,
        meta_description,
        keywords,
        featured,
        status,
        reading_time,
        published_at,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
      blogId: result.insertId,
      thumbnail,
    });
  } catch (error) {
    // console.error("CREATE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to create blog",
      },
      { status: 500 }
    );
  }
}