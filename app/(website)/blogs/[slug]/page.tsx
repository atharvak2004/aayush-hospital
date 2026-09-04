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

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const decodedSlug = decodeURIComponent(slug);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs/${encodeURIComponent(decodedSlug)}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      // console.log("API Status:", res.status);
      return null;
    }

    const data = await res.json();

    // console.log("Fetched Blog:", data);

    return data.blog ?? null;
  } catch (err) {
    // console.error(err);
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
      // Don't let search engines index/crawl a 404 as if it were content.
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = blog.meta_title || blog.title;
  const description = blog.meta_description || blog.excerpt;
  const url = `/blogs/${encodeURIComponent(blog.slug)}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      publishedTime: blog.published_at,
      authors: blog.author ? [blog.author] : undefined,
      images: blog.thumbnail
        ? [
          {
            url: blog.thumbnail,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: blog.thumbnail ? [blog.thumbnail] : undefined,
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

  // BlogPosting structured data — this is what lets the post show up with
  // an author, published date, and image in Google's rich results.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.thumbnail ? [blog.thumbnail] : undefined,
    datePublished: blog.published_at,
    dateModified: blog.created_at,
    author: blog.author
      ? {
        "@type": "Person",
        name: blog.author,
      }
      : {
        "@type": "Organization",
        name: "Aayush Hospital",
      },
    publisher: {
      "@type": "Organization",
      name: "Aayush Hospital",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Aayush_logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blogs/${encodeURIComponent(blog.slug)}`,
    },
  };

  return (
    <main className="bg-[#f5f3ee] pt-32 pb-24">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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