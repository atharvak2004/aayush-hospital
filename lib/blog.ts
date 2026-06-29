    import { Blog } from "@/types/blog";

    export async function getBlogs(): Promise<Blog[]> {
    const res = await fetch("/api/blogs", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();

    return data.blogs;
    }