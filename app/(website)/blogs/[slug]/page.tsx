import { notFound } from "next/navigation";
import Image from "next/image";
import { User, CalendarDays, Clock3 } from "lucide-react";
interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  meta_title: string;
  meta_description: string;
  status: string;
  featured: number;
  views: number;
  reading_time: number;
  published_at: string;
  created_at: string;
  category: string | null;
  author: string | null;
  designation?: string;
  image?: string;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `http://localhost:3000/api/blogs/${encodeURIComponent(slug)}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    const data = (await res.json()) as { blog?: Blog | null };

    return data.blog ?? null;
  } catch (err) {
    console.error("GET BLOG ERROR:", err);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.excerpt,
    openGraph: {
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.excerpt,
      images: blog.thumbnail
        ? [
          {
            url: blog.thumbnail,
          },
        ]
        : [],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-[#f5f3ee] pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Category */}
        {blog.category && (
          <div className="flex justify-center mb-6">
            <span className="rounded-full bg-[#efe6da] px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#8D6E63]">
              {blog.category}
            </span>
          </div>
        )}

        {/* Title */}
        <h1
          className="
          text-center
          text-[#5D4037]
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          tracking-[-2px]
          max-w-4xl
          mx-auto
        "
        >
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p
          className="
          mt-6
          text-center
          text-[#8D6E63]
          text-lg
          leading-8
          max-w-3xl
          mx-auto
        "
        >
          {blog.excerpt}
        </p>

        {/* Meta */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[#8D6E63]">
  {blog.author && (
    <div className="flex items-center gap-2 text-sm">
      <User size={18} strokeWidth={1.8} className="text-[#A6783D]" />
      <span>{blog.author}</span>
    </div>
  )}

  <div className="flex items-center gap-2 text-sm">
    <CalendarDays
      size={18}
      strokeWidth={1.8}
      className="text-[#A6783D]"
    />
    <span>
      {new Date(blog.published_at).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </span>
  </div>

  <div className="flex items-center gap-2 text-sm">
    <Clock3 size={18} strokeWidth={1.8} className="text-[#A6783D]" />
    <span>{blog.reading_time} min read</span>
  </div>
</div>

        {/* Hero Image */}
        {blog.thumbnail && (
          <div className="mt-14 flex justify-center">
            <div
              className="
              relative
              w-full
              max-w-4xl
              aspect-[16/9]
              rounded-[30px]
              overflow-hidden
              shadow-xl
            "
            >
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div
          className="
          mt-16
          bg-[#fbfaf8]
          rounded-[30px]
          border
          border-[#eee9e2]
          p-6
          md:p-10
          lg:p-14
          shadow-sm
        "
        >
          <article
            className="
            prose
            prose-lg
            max-w-none

            prose-headings:text-[#5D4037]
            prose-headings:font-bold

            prose-p:text-[#6B5C53]
            prose-p:leading-8

            prose-li:text-[#6B5C53]

            prose-strong:text-[#5D4037]

            prose-img:rounded-2xl
            prose-img:mx-auto

            prose-a:text-[#A6783D]
            prose-a:no-underline
            hover:prose-a:underline
          "
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
        </div>
      </div>
    </main>
  );
}