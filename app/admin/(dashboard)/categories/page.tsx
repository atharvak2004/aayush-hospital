"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
}

function slugify(str: string) {
  return str.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function CategoriesAdminPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function load() {
    const res = await fetch("/api/categories");
    const data = await res.json() as { success: boolean; categories: Category[] };
    if (data.success) setCategories(data.categories);
  }

  useEffect(() => { load(); }, []);

  function handleNameChange(val: string) {
    setName(val);
    if (!editId) setSlug(slugify(val));
  }

  async function handleSubmit() {
    setError("");
    if (!name || !slug) return setError("Name and slug are required.");
    setLoading(true);

    const res = await fetch(
      editId ? `/api/categories/${editId}` : "/api/categories",
      {
        method: editId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, slug }),
      }
    );

    const data = await res.json() as { success: boolean; message?: string };
    setLoading(false);

    if (!data.success) return setError(data.message ?? "An error occurred.");

    setName(""); setSlug(""); setEditId(null);
    load();
  }

  function startEdit(cat: Category) {
    setEditId(cat.id);
    setName(cat.name);
    setSlug(cat.slug);
    setError("");
  }

  function cancelEdit() {
    setEditId(null);
    setName(""); setSlug(""); setError("");
  }

  async function handleDelete(id: number) {
    const confirmed = typeof (globalThis as any).confirm === "function"
      ? (globalThis as any).confirm("Delete this category? Blogs using it will have no category.")
      : true;

    if (!confirmed) {
      return;
    }

    await fetch(`/api/categories/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div className="max-w-3xl mx-auto p-8 mt-20 space-y-8">

      <h1 className="text-3xl font-bold">Categories</h1>

      {/* Form */}
      <div className="bg-white border rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          {editId ? "Edit category" : "Add category"}
        </h2>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
            {error}
          </p>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Name</label>
            <input
              className="w-full border rounded-lg p-3 text-sm"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="e.g. Spine care"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Slug</label>
            <input
              className="w-full border rounded-lg p-3 text-sm font-mono"
              value={slug}
              onChange={(e) => setSlug(slugify(e.target.value))}
              placeholder="e.g. spine-care"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
          >
            {loading ? "Saving..." : editId ? "Update" : "Add category"}
          </button>

          {editId && (
            <button
              onClick={cancelEdit}
              className="px-5 py-2 rounded-lg text-sm border text-gray-600"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="px-5 py-3 text-left">Name</th>
              <th className="px-5 py-3 text-left">Slug</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 && (
              <tr>
                <td colSpan={3} className="px-5 py-8 text-center text-gray-400">
                  No categories yet.
                </td>
              </tr>
            )}
            {categories.map((cat) => (
              <tr key={cat.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-4 font-medium">{cat.name}</td>
                <td className="px-5 py-4 font-mono text-gray-500">{cat.slug}</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => startEdit(cat)}
                      className="px-3 py-1 text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="px-3 py-1 text-xs bg-red-50 text-red-600 border border-red-200 rounded-lg"
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