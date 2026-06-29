"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import BlogForm from "@/components/BlogForm";

import {
    getBlog,
    updateBlog,
} from "@/services/blogService";

export default function EditBlogPage() {
    const { slug } = useParams();

    const router = useRouter();

    const [blog, setBlog] = useState<any>();

    useEffect(() => {
        async function load() {
            const data = await getBlog(slug as string);

            setBlog(data.blog);
        }

        load();
    }, [slug]);

    async function handleUpdate(formData: FormData) {
  const res = await updateBlog(
    slug as string,
    formData
  );

  if (res.success) {
    router.push("/admin/blogs");
  }
}

    if (!blog) return <p>Loading...</p>;

    return (
        <div className="max-w-5xl mx-auto p-8">

            <h1 className="text-3xl mb-8">
                Edit Blog
            </h1>

            <BlogForm
                initialData={blog}
                onSubmit={handleUpdate}
            />

        </div>
    );
}