"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    deleteBlog,
    getBlogs,
} from "@/services/blogService";

export default function BlogAdminPage() {
    const [blogs, setBlogs] = useState([]);

    async function loadBlogs() {
        try {
            const data = await getBlogs();

            console.log(data);

            if (data.success) {
                setBlogs(data.blogs);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadBlogs();
    }, []);

    async function handleDelete(slug: string) {
        if (!confirm("Delete Blog?")) return;

        await deleteBlog(slug);

        loadBlogs();
    }

    return (
        <div className="max-w-7xl mx-auto mt-20">

            <div className="flex justify-between mb-6">

                <h1 className="text-3xl font-bold">
                    Blogs
                </h1>

                <Link
                    href="/admin/blogs/create"
                    className="bg-blue-600 text-white px-5 py-2 rounded"
                >
                    Add Blog
                </Link>

            </div>

            <div className="overflow-hidden rounded-xl border bg-white shadow">

                <table className="min-w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="px-5 py-3 text-left">
                                ID
                            </th>

                            <th className="px-5 py-3 text-left">
                                Thumbnail
                            </th>

                            <th className="px-5 py-3 text-left">
                                Title
                            </th>

                            <th className="px-5 py-3 text-left">
                                Category
                            </th>

                            <th className="px-5 py-3 text-left">
                                Author
                            </th>

                            <th className="px-5 py-3 text-left">
                                Status
                            </th>

                            <th className="px-5 py-3 text-left">
                                Views
                            </th>

                            <th className="px-5 py-3 text-center">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {blogs.map((blog: any) => (

                            <tr
                                key={blog.id}
                                className="border-t hover:bg-gray-50"
                            >

                                <td className="px-5 py-4">
                                    {blog.id}
                                </td>

                                <td className="px-5 py-4">

                                    <img
                                        src={blog.thumbnail || "/placeholder.png"}
                                        className="w-16 h-16 rounded object-cover"
                                    />

                                </td>

                                <td className="px-5 py-4 font-medium">
                                    {blog.title}
                                </td>

                                <td className="px-5 py-4">
                                    {blog.category || "-"}
                                </td>

                                <td className="px-5 py-4">
                                    {blog.author || "-"}
                                </td>

                                <td className="px-5 py-4">

                                    <span className={`px-2 py-1 rounded-full text-xs ${blog.status === "published"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}>
                                        {blog.status}
                                    </span>

                                </td>

                                <td className="px-5 py-4">
                                    {blog.views}
                                </td>

                                <td className="px-5 py-4">

                                    <div className="flex gap-3 justify-center">

                                        <Link
                                            href={`/admin/blogs/edit/${blog.slug}`}
                                            className="px-3 py-1 bg-blue-500 text-white rounded"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(blog.slug)}
                                            className="px-3 py-1 bg-red-500 text-white rounded"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}