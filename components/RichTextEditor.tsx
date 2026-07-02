"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle, FontSize } from "@tiptap/extension-text-style";
import { useEffect, useRef } from "react";

// ─── install note ────────────────────────────────────────────────────────────
// npm install @tiptap/extension-text-style @tiptap/extension-text-align
// FontSize ships inside @tiptap/extension-text-style — no extra package needed
// ─────────────────────────────────────────────────────────────────────────────

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

const FONT_SIZES = ["12px", "14px", "16px", "18px", "20px", "24px", "30px", "36px"];

// ── helpers ──────────────────────────────────────────────────────────────────

function getActiveFontSize(editor: Editor): string {
  return editor.getAttributes("textStyle").fontSize ?? "";
}

function ToolbarBtn({
  active,
  onClick,
  title,
  children,
}: {
  active: boolean;
  onClick: () => void;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`px-2.5 py-1 rounded border text-sm transition-colors ${active
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white hover:bg-gray-100 border-gray-200 text-gray-700"
        }`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <span className="w-px h-6 bg-gray-200 mx-1 self-center" />;
}

// ── component ─────────────────────────────────────────────────────────────────

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),

      Image.configure({
        inline: false,
        allowBase64: false,
      }),

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),

      // TextStyle must come before FontSize — FontSize extends it
      TextStyle,

      FontSize,
    ],

    content: value,

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },

    // Prevents SSR / hydration mismatch
    immediatelyRender: false,
  });

  // Sync editor content when initialData loads in edit mode
  useEffect(() => {
    if (!editor || !value) return;
    // Only set if content actually differs to avoid cursor jumping
    if (editor.getHTML() !== value) {
      editor.commands.setContent(value, {
        emitUpdate: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);          // intentionally omit `editor` — only run when value prop changes

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files?.[0];
    if (!file || !editor) return;

    const fd = new FormData();
    fd.append("image", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json() as { success: boolean; url?: string };

      if (data.success && data.url) {
        editor.chain().focus().setImage({ src: data.url }).run();
      } else {
        alert("Image upload failed");
      }
    } catch (err) {
      // console.error(err);
      alert("Image upload failed");
    }

    e.target.value = "";
  }

  // Guard for SSR — editor won't exist on first server render
  if (!editor) return null;

  const fontSize = getActiveFontSize(editor);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">

      {/* ── Toolbar ── */}
      <div className="flex flex-wrap items-center gap-1.5 p-2.5 border-b bg-gray-50">

        {/* Text style */}
        <ToolbarBtn
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Bold"
        >
          <strong>B</strong>
        </ToolbarBtn>

        <ToolbarBtn
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Italic"
        >
          <em>I</em>
        </ToolbarBtn>

        <ToolbarBtn
          active={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          title="Strikethrough"
        >
          <s>S</s>
        </ToolbarBtn>

        <Divider />

        {/* Headings */}
        <ToolbarBtn
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          title="Heading 2"
        >
          H2
        </ToolbarBtn>

        <ToolbarBtn
          active={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          title="Heading 3"
        >
          H3
        </ToolbarBtn>

        <Divider />

        {/* Font size dropdown */}
        <select
          title="Font size"
          value={fontSize}
          onChange={(e) => {
            const val = e.target.value;
            if (val) {
              editor.chain().focus().setFontSize(val).run();
            } else {
              editor.chain().focus().unsetFontSize().run();
            }
          }}
          className="border border-gray-200 rounded text-sm px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Size</option>
          {FONT_SIZES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <Divider />

        {/* Lists */}
        <ToolbarBtn
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="Bullet list"
        >
          • List
        </ToolbarBtn>

        <ToolbarBtn
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="Numbered list"
        >
          1. List
        </ToolbarBtn>

        <ToolbarBtn
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          title="Blockquote"
        >
          ❝
        </ToolbarBtn>

        <Divider />

        {/* Alignment — isActive("textAlign") isn't typed, use getAttributes instead */}
        {(["left", "center", "right"] as const).map((align) => {
          const icons = { left: "⬅", center: "☰", right: "➡" } as const;
          const isActive =
            editor.getAttributes("paragraph").textAlign === align ||
            editor.getAttributes("heading").textAlign === align;

          return (
            <ToolbarBtn
              key={align}
              active={isActive}
              onClick={() => editor.chain().focus().setTextAlign(align).run()}
              title={`Align ${align}`}
            >
              {icons[align]}
            </ToolbarBtn>
          );
        })}

        <Divider />

        {/* Inline image upload */}
        <button
          type="button"
          title="Insert image"
          onClick={() => fileInputRef.current?.click()}
          className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100 text-sm text-gray-700 transition-colors"
        >
          🖼 Image
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />

      </div>

      {/* ── Editor area ── */}
      <EditorContent
        editor={editor}
        className="
          prose prose-sm max-w-none p-4 min-h-80
          [&_.ProseMirror]:outline-none
          [&_.ProseMirror_img]:rounded-lg
          [&_.ProseMirror_img]:my-4
          [&_.ProseMirror_img]:max-w-full
          [&_.ProseMirror_blockquote]:border-l-4
          [&_.ProseMirror_blockquote]:border-teal-400
          [&_.ProseMirror_blockquote]:pl-4
          [&_.ProseMirror_blockquote]:text-gray-600
          [&_.ProseMirror_blockquote]:italic
        "
      />

    </div>
  );
}