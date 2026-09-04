const siteUrl = "https://www.aayushhospitalpune.com";

interface Blog {
  slug: string;
  updated_at?: string;
  published_at?: string;
  created_at?: string;
}

interface BlogResponse {
  blogs?: Blog[];
  data?: Blog[];
}

interface BlogSitemapEntry {
  slug: string;
  updatedAt?: string;
}

// Fetches the blog list for dynamic sitemap entries. Wrapped in try/catch
// so a failed/slow API call never breaks the build — sitemap just falls
// back to static routes only.
async function getBlogSlugs(): Promise<BlogSitemapEntry[]> {
  try {
    const res = await fetch(`${siteUrl}/api/blogs`, {
      next: { revalidate: 3600 }, // rebuild this part hourly
    });

    if (!res.ok) return [];

    const data: BlogResponse = await res.json();

    // Adjust this line if your /api/blogs response shape differs
    // (e.g. data.data instead of data.blogs).
    const blogs = data.blogs ?? data.data ?? [];

    return blogs.map((blog: Blog): BlogSitemapEntry => ({
      slug: blog.slug,
      updatedAt: blog.updated_at || blog.published_at || blog.created_at,
    }));
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const staticRoutes = [
    { url: "/", changeFrequency: "weekly", priority: 1 },
    { url: "/about", changeFrequency: "monthly", priority: 0.8 },
    { url: "/services", changeFrequency: "monthly", priority: 0.8 },
    { url: "/doctors", changeFrequency: "monthly", priority: 0.7 },
    { url: "/contact", changeFrequency: "yearly", priority: 0.5 },
    { url: "/blogs", changeFrequency: "weekly", priority: 0.7 },
  ].map((route) => ({
    url: `${siteUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogSlugs = await getBlogSlugs();

  const blogRoutes = blogSlugs.map(({ slug, updatedAt }) => ({
    url: `${siteUrl}/blogs/${encodeURIComponent(slug)}`,
    lastModified: updatedAt ? new Date(updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}