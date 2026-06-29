"use client";

import { useRouter } from "next/navigation";

import BlogForm from "@/components/BlogForm";

import { createBlog } from "@/services/blogService";

export default function CreateBlogPage() {
  const router = useRouter();

  async function handleCreate(formData: FormData) {
    const res = await createBlog(formData);

    if (res.success) {
      router.push("/admin/blogs");
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-8 mt-20">

      <h1 className="text-3xl mb-8">
        Create Blog
      </h1>

      <BlogForm
        onSubmit={handleCreate}
      />

    </div>
  );
}