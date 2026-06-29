import { Blog } from "@/types/blog";

const API = "/api/blogs";

export async function getBlogs() {
  const res = await fetch(API, {
    cache: "no-store",
  });

  return res.json();
}

export async function getBlog(slug: string) {
  const res = await fetch(`${API}/${slug}`);
  return res.json();
}

export async function createBlog(formData: FormData) {
  const res = await fetch(API, {
    method: "POST",
    body: formData,
  });

  return res.json();
}

export async function updateBlog(
  slug: string,
  formData: FormData
) {
  const res = await fetch(`${API}/${slug}`, {
    method: "PUT",
    body: formData,
  });

  return res.json();
}

export async function deleteBlog(slug: string) {
  const res = await fetch(`${API}/${slug}`, {
    method: "DELETE",
  });

  return res.json();
}