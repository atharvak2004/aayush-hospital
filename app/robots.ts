const siteUrl = "https://www.aayushhospitalpune.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}