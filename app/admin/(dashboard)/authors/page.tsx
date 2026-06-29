"use client";

import { useEffect, useRef, useState } from "react";

interface Author {
  id: number;
  name: string;
  designation: string;
  image: string | null;
}

export default function AuthorsAdminPage() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [editId, setEditId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  async function load() {
    const res = await fetch("/api/authors");
    const data = await res.json();
    if (data.success) setAuthors(data.authors);
  }

  useEffect(() => { load(); }, []);

  async function handleSubmit() {
    setError("");
    if (!name) return setError("Name is required.");
    setLoading(true);

    const fd = new FormData();
    fd.append("name", name);
    fd.append("designation", designation);
    if (imageFile) fd.append("image", imageFile);

    const res = await fetch(
      editId ? `/api/authors/${editId}` : "/api/authors",
      { method: editId ? "PUT" : "POST", body: fd }
    );

    const data = await res.json();
    setLoading(false);

    if (!data.success) return setError(data.message);

    setName(""); setDesignation(""); setImageFile(null); setEditId(null);
    if (fileRef.current) fileRef.current.value = "";
    load();
  }

  function startEdit(author: Author) {
    setEditId(author.id);
    setName(author.name);
    setDesignation(author.designation ?? "");
    setImageFile(null);
    setError("");
  }

  function cancelEdit() {
    setEditId(null);
    setName(""); setDesignation(""); setImageFile(null); setError("");
    if (fileRef.current) fileRef.current.value = "";
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this author? Blogs by them will have no author.")) return;
    await fetch(`/api/authors/${id}`, { method: "DELETE" });
    load();
  }

  const initials = (n: string) =>
    n.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

  return (
    <div className="max-w-3xl mx-auto p-8 mt-20 space-y-8">

      <h1 className="text-3xl font-bold">Authors</h1>

      {/* Form */}
      <div className="bg-white border rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          {editId ? "Edit author" : "Add author"}
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
              onChange={(e) => setName(e.target.value)}
              placeholder="Dr. Aayush Kumar"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Designation</label>
            <input
              className="w-full border rounded-lg p-3 text-sm"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              placeholder="Senior Physiotherapist"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Photo {editId && <span className="text-gray-400 font-normal">(leave empty to keep existing)</span>}
          </label>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="w-full border rounded-lg p-3 text-sm"
            onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
          >
            {loading ? "Saving..." : editId ? "Update" : "Add author"}
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
              <th className="px-5 py-3 text-left">Author</th>
              <th className="px-5 py-3 text-left">Designation</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.length === 0 && (
              <tr>
                <td colSpan={3} className="px-5 py-8 text-center text-gray-400">
                  No authors yet.
                </td>
              </tr>
            )}
            {authors.map((a) => (
              <tr key={a.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    {a.image ? (
                      <img
                        src={a.image}
                        className="w-9 h-9 rounded-full object-cover border"
                        alt={a.name}
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-semibold text-xs border border-teal-100">
                        {initials(a.name)}
                      </div>
                    )}
                    <span className="font-medium">{a.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-gray-500">{a.designation || "—"}</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => startEdit(a)}
                      className="px-3 py-1 text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(a.id)}
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