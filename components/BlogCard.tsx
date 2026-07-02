"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, FileText } from "lucide-react";
import { Blog } from "@/types/blog";

export default function BlogCard({ blog }: { blog: Blog }) {
  const initials =
    blog.author
      ?.split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("") || "AH";

  // Generate a safe image URL
  const thumbnail =
    blog.thumbnail && blog.thumbnail.trim() !== ""
      ? blog.thumbnail.startsWith("http://") ||
        blog.thumbnail.startsWith("https://")
        ? blog.thumbnail
        : blog.thumbnail.startsWith("/")
        ? blog.thumbnail
        : `/${blog.thumbnail}`
      : null;

  return (
    <Link href={`/blogs/${blog.slug}`} className="group block h-full">
      <article
        className="
          h-full
          bg-[#fbfaf8]
          border border-[#eee9e2]
          rounded-3xl
          p-6
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
        "
      >
        {/* Image */}
        <div className="relative h-72 overflow-hidden rounded-2xl bg-[#f4efe8]">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={blog.title}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#efe6da] to-[#f8f5f1]">
              <div className="flex flex-col items-center gap-3 text-[#8D6E63]">
                <FileText size={48} strokeWidth={1.5} />
                <span className="text-sm font-medium">
                  No Image Available
                </span>
              </div>
            </div>
          )}

          {blog.featured && (
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#5D4037] shadow backdrop-blur">
              Featured
            </span>
          )}
        </div>

        {/* Category */}
        {blog.category && (
          <span className="mt-6 inline-flex rounded-full bg-[#efe6da] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#8D6E63]">
            {blog.category}
          </span>
        )}

        {/* Title */}
        <h3
          className="
            mt-4
            line-clamp-2
            text-3xl
            font-semibold
            leading-tight
            tracking-[-1px]
            text-[#5D4037]
            transition-colors
            group-hover:text-[#C5A059]
          "
        >
          {blog.title}
        </h3>

        {/* Excerpt */}
       {blog.excerpt && (
  <p
    className="
      mt-5
      min-h-14
      line-clamp-2
      text-[15px]
      leading-7
      text-[#8D6E63]
    "
  >
    {blog.excerpt}
  </p>
)}

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#8D6E63]">
          {blog.created_at && (
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(blog.created_at).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
          )}

          {blog.reading_time && (
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {blog.reading_time} min read
            </div>
          )}
        </div>

        <div className="my-6 border-t border-[#ece6df]" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#efe6da] font-semibold text-[#5D4037]">
              {initials}
            </div>

            <div>
              <p className="text-sm font-medium text-[#5D4037]">
                {blog.author || "Aayush Hospital"}
              </p>

              
            </div>
          </div>

          <span className="flex items-center gap-2 font-medium text-[#5D4037] transition-all group-hover:gap-3">
            Read
            <ArrowRight size={18} />
          </span>
        </div>
      </article>
    </Link>
  );
}