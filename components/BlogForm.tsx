"use client";

import { useEffect, useState } from "react";
import RichTextEditor from "@/components/RichTextEditor";

interface Category {
    id: number;
    name: string;
}

interface Author {
    id: number;
    name: string;
    designation: string;
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function BlogForm({
    initialData,
    onSubmit,
}: any) {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");

    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [keywords, setKeywords] = useState("");

    const [categoryId, setCategoryId] = useState("");
    const [authorId, setAuthorId] = useState("");

    const [readingTime, setReadingTime] = useState(5);
    const [status, setStatus] = useState("draft");
    const [featured, setFeatured] = useState(false);

    const [publishedAt, setPublishedAt] = useState("");

    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

    const [categories, setCategories] = useState<Category[]>([]);
    const [authors, setAuthors] = useState<Author[]>([]);

    // Load categories + authors
    useEffect(() => {
        async function loadOptions() {
            const [catRes, authRes] = await Promise.all([
                fetch("/api/categories"),
                fetch("/api/authors"),
            ]);
            const catData = await catRes.json();
            const authData = await authRes.json();
            if (catData.success) setCategories(catData.categories);
            if (authData.success) setAuthors(authData.authors);
        }
        loadOptions();
    }, []);

    // Populate form when editing
    useEffect(() => {
        if (!initialData) return;

        setTitle(initialData.title || "");
        setSlug(initialData.slug || "");
        setExcerpt(initialData.excerpt || "");
        setContent(initialData.content || "");

        setMetaTitle(initialData.meta_title || "");
        setMetaDescription(initialData.meta_description || "");
        setKeywords(initialData.keywords || "");

        setCategoryId(initialData.category_id?.toString() || "");
        setAuthorId(initialData.author_id?.toString() || "");

        setReadingTime(initialData.reading_time || 5);
        setStatus(initialData.status || "draft");
        setFeatured(Boolean(initialData.featured));

        if (initialData.published_at) {
            setPublishedAt(
                new Date(initialData.published_at).toISOString().slice(0, 16)
            );
        }
    }, [initialData]);

    // Auto-slug from title (only when creating, not editing)
    function handleTitleChange(val: string) {
        setTitle(val);
        if (!initialData) setSlug(slugify(val));
    }

    // Local thumbnail preview
    function handleThumbnailChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] || null;
        setThumbnail(file);
        if (file) {
            setThumbnailPreview(URL.createObjectURL(file));
        } else {
            setThumbnailPreview(null);
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const form = new FormData();

        form.append("title", title);
        form.append("slug", slug);
        form.append("excerpt", excerpt);
        form.append("content", content);

        form.append("meta_title", metaTitle);
        form.append("meta_description", metaDescription);
        form.append("keywords", keywords);

        form.append("category_id", categoryId);
        form.append("author_id", authorId);

        form.append("reading_time", readingTime.toString());
        form.append("status", status);
        form.append("featured", featured.toString());
        form.append("published_at", publishedAt);

        if (thumbnail) {
            form.append("thumbnail", thumbnail);
        }

        onSubmit(form);
    }

    const currentThumbnail = thumbnailPreview || initialData?.thumbnail || null;

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-6xl mx-auto space-y-8"
        >

            {/* ── Blog Details ── */}
            <div className="bg-white rounded-xl shadow border p-6">
                <h2 className="text-xl font-semibold mb-6">Blog details</h2>

                <div className="space-y-5">

                    {/* Title + auto-slug */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Title
                        </label>
                        <input
                            className="w-full border rounded-lg p-3 text-sm"
                            value={title}
                            onChange={(e) => handleTitleChange(e.target.value)}
                            placeholder="e.g. 5 signs your back pain needs professional treatment"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Slug
                        </label>
                        <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                            <span className="px-3 py-3 text-sm text-gray-400 bg-gray-50 border-r select-none">
                                /blogs/
                            </span>
                            <input
                                className="flex-1 p-3 text-sm font-mono outline-none"
                                value={slug}
                                onChange={(e) => setSlug(slugify(e.target.value))}
                                placeholder="your-blog-slug"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Excerpt
                        </label>
                        <textarea
                            rows={3}
                            className="w-full border rounded-lg p-3 text-sm"
                            value={excerpt}
                            placeholder="A short summary shown on blog cards and in meta description"
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                setExcerpt(e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Content
                        </label>
                        <div className="mt-2">
                            <RichTextEditor value={content} onChange={setContent} />
                        </div>
                    </div>

                </div>
            </div>

            {/* ── SEO ── */}
            <div className="bg-white rounded-xl shadow border p-6">
                <h2 className="text-xl font-semibold mb-6">SEO</h2>

                <div className="space-y-5">

                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Meta title
                        </label>
                        <input
                            className="w-full border rounded-lg p-3 text-sm"
                            value={metaTitle}
                            placeholder="Defaults to blog title if left empty"
                            onChange={(e) => setMetaTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Meta description
                        </label>
                        <textarea
                            rows={3}
                            className="w-full border rounded-lg p-3 text-sm"
                            value={metaDescription}
                            placeholder="Defaults to excerpt if left empty"
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                setMetaDescription(e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Keywords
                        </label>
                        <input
                            className="w-full border rounded-lg p-3 text-sm"
                            value={keywords}
                            placeholder="back pain, physiotherapy, spine care"
                            onChange={(e) => setKeywords(e.target.value)}
                        />
                    </div>

                </div>
            </div>

            {/* ── Publishing ── */}
            <div className="bg-white rounded-xl shadow border p-6">
                <h2 className="text-xl font-semibold mb-6">Publishing</h2>

                <div className="grid md:grid-cols-2 gap-5">

                    {/* Category dropdown */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Category
                        </label>
                        <select
                            className="w-full border rounded-lg p-3 text-sm"
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            <option value="">— No category —</option>
                            {categories.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Author dropdown */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Author
                        </label>
                        <select
                            className="w-full border rounded-lg p-3 text-sm"
                            value={authorId}
                            onChange={(e) => setAuthorId(e.target.value)}
                        >
                            <option value="">— No author —</option>
                            {authors.map((a) => (
                                <option key={a.id} value={a.id}>
                                    {a.name}
                                    {a.designation ? ` — ${a.designation}` : ""}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Reading time */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Reading time (minutes)
                        </label>
                        <input
                            type="number"
                            min={1}
                            className="w-full border rounded-lg p-3 text-sm"
                            value={readingTime}
                            onChange={(e) => setReadingTime(Number(e.target.value))}
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Status
                        </label>
                        <select
                            className="w-full border rounded-lg p-3 text-sm"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>

                    {/* Publish date */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Publish date
                        </label>
                        <input
                            type="datetime-local"
                            className="w-full border rounded-lg p-3 text-sm"
                            value={publishedAt}
                            onChange={(e) => setPublishedAt(e.target.value)}
                        />
                    </div>

                    {/* Featured toggle */}
                    <div className="flex items-center">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                            <div
                                onClick={() => setFeatured(!featured)}
                                className={`w-10 h-6 rounded-full transition-colors flex items-center px-1 cursor-pointer ${
                                    featured ? "bg-blue-600" : "bg-gray-200"
                                }`}
                            >
                                <div
                                    className={`w-4 h-4 rounded-full bg-white shadow transition-transform ${
                                        featured ? "translate-x-4" : "translate-x-0"
                                    }`}
                                />
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                                Featured blog
                            </span>
                        </label>
                    </div>

                    {/* Thumbnail upload */}
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Thumbnail
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            className="w-full border rounded-lg p-3 text-sm"
                            onChange={handleThumbnailChange}
                        />

                        {/* Preview */}
                        {currentThumbnail && (
                            <div className="mt-3 relative inline-block">
                                <img
                                    src={currentThumbnail}
                                    alt="Thumbnail preview"
                                    className="w-52 h-32 object-cover rounded-lg border"
                                />
                                {thumbnailPreview && (
                                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                                        New
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* ── Submit ── */}
            <div className="flex justify-end pb-8">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                    Save blog
                </button>
            </div>

        </form>
    );
}