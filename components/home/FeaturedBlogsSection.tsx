"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  featured: number;
  reading_time: number;
  published_at: string;
  category: string | null;
}

export default function FeaturedBlogsSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();

        const featured = (data.blogs || [])
          .filter((blog: Blog) => blog.featured === 1)
          .slice(0, 3);

        setBlogs(featured);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  return (
    <section className="bg-[#f5f3ee] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div>
            <span className="inline-flex rounded-full bg-[#efe6da] px-5 py-2 text-sm font-medium text-[#8D6E63]">
              Health Insights
            </span>

            <h2 className="mt-6 text-[52px] leading-none tracking-[-2px] font-bold text-[#5D4037]">
              Featured Blogs
            </h2>

            <p className="mt-5 max-w-2xl text-[#8D6E63] leading-8">
              Explore expert medical advice, wellness tips, and the latest
              healthcare insights from our specialists.
            </p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-medium text-[#5D4037] hover:text-[#A6783D] transition-colors"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-[520px] rounded-[24px] bg-white animate-pulse"
              />
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <div className="rounded-[24px] border border-[#eee9e2] bg-[#fbfaf8] py-20 text-center">
            <h3 className="text-2xl font-semibold text-[#5D4037]">
              No Featured Blogs
            </h3>

            <p className="mt-3 text-[#8D6E63]">
              Featured articles will appear here soon.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="group"
              >
                <article className="h-full rounded-[24px] border border-[#eee9e2] bg-[#fbfaf8] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                  <div className="relative h-64 overflow-hidden rounded-2xl">
                    <Image
                      src={
                        blog.thumbnail
                          ? blog.thumbnail.startsWith("/")
                            ? blog.thumbnail
                            : `/${blog.thumbnail}`
                          : "/placeholder-blog.jpg"
                      }
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {blog.category && (
                    <span className="mt-6 inline-flex rounded-full bg-[#efe6da] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#8D6E63]">
                      {blog.category}
                    </span>
                  )}

                  <h3 className="mt-4 line-clamp-2 text-3xl font-semibold leading-tight tracking-[-1px] text-[#5D4037] group-hover:text-[#A6783D] transition-colors">
                    {blog.title}
                  </h3>

                  <p className="mt-5 line-clamp-2 text-[15px] leading-7 text-[#8D6E63]">
                    {blog.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-5 text-sm text-[#8D6E63]">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {new Date(blog.published_at).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {blog.reading_time} min
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 font-medium text-[#5D4037] group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight size={18} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}