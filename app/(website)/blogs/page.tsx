"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Blog } from "@/types/blog";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data.blogs ?? []);
      } catch (err) {
        // console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <section className="bg-[#f5f3ee] py-24 mt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 max-w-3xl">

          <span className="inline-flex items-center rounded-full bg-[#efe6da] px-5 py-2 text-sm font-medium text-(--brown-deep)">
            Health Articles
          </span>

          <h1
            className="
              mt-6
              text-(--brown-deep)
              text-[52px]
              md:text-[60px]
              leading-none
              tracking-[-2px]
              font-bold
            "
          >
            Health & Wellness Insights
          </h1>

          <p
            className="
              mt-6
              text-(--brown-soft)
              text-lg
              leading-8
              max-w-2xl
            "
          >
            Stay informed with expert guidance, medical tips, wellness advice,
            and healthcare updates from the specialists at Aayush Hospital.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="
                  bg-[#fbfaf8]
                  rounded-3xl
                  border border-[#eee9e2]
                  overflow-hidden
                "
              >
                <div className="h-60 bg-gray-200 animate-pulse" />

                <div className="p-6">
                  <div className="h-6 w-2/3 rounded bg-gray-200 animate-pulse mb-4" />

                  <div className="space-y-3">
                    <div className="h-4 rounded bg-gray-200 animate-pulse" />
                    <div className="h-4 rounded bg-gray-200 animate-pulse w-5/6" />
                    <div className="h-4 rounded bg-gray-200 animate-pulse w-3/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : blogs.length === 0 ? (

          <div className="bg-[#fbfaf8] border border-[#eee9e2] rounded-[28px] py-24 text-center">

            <div className="text-6xl mb-5">🩺</div>

            <h2 className="text-3xl font-semibold text-(--brown-deep)">
              No Articles Available
            </h2>

            <p className="mt-4 text-(--brown-soft) text-lg">
              We're preparing valuable health insights for you.
              Please check back soon.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

        )}
      </div>
    </section>
  );
}