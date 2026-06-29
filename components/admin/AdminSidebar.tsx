"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV = [
    {
        label: "Content",
        items: [
            {
                href: "/admin/blogs",
                icon: (
                    <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 4h16v16H4z" rx="2" />
                        <path d="M8 9h8M8 13h6" />
                    </svg>
                ),
                label: "Blogs",
                match: /^\/admin\/blogs/,
            },
            {
                href: "/admin/categories",
                icon: (
                    <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                ),
                label: "Categories",
                match: /^\/admin\/categories/,
            },
            {
                href: "/admin/authors",
                icon: (
                    <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                ),
                label: "Authors",
                match: /^\/admin\/authors/,
            },
        ],
    },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    async function handleLogout() {
        try {
            localStorage.removeItem("admin_token");
            router.replace("/admin/login");
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <aside className="w-60 shrink-0 bg-white border-r border-gray-200 min-h-screen flex flex-col">

            {/* Logo */}
            <div className="h-16 flex items-center px-5 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-teal-600 flex items-center justify-center">
                        <svg
                            width="14"
                            height="14"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
                            <circle cx="12" cy="9" r="2.5" />
                        </svg>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-900 leading-none">
                            Aayush
                        </p>
                        <p className="text-xs text-gray-400 leading-none mt-0.5">
                            Admin Panel
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-4 px-3 space-y-6 overflow-y-auto">
                {NAV.map((section) => (
                    <div key={section.label}>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
                            {section.label}
                        </p>

                        <ul className="space-y-0.5">
                            {section.items.map((item) => {
                                const active = item.match.test(pathname);

                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${active
                                                    ? "bg-teal-50 text-teal-700 font-medium"
                                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                                }`}
                                        >
                                            <span
                                                className={
                                                    active ? "text-teal-600" : "text-gray-400"
                                                }
                                            >
                                                {item.icon}
                                            </span>

                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-gray-100 p-3 space-y-2">

                <Link
                    href="/"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                >
                    <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 12l9-9 9 9" />
                        <path d="M9 21V12h6v9" />
                    </svg>

                    View Site
                </Link>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                    <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <path d="M16 17l5-5-5-5" />
                        <path d="M21 12H9" />
                    </svg>

                    Logout
                </button>

            </div>
        </aside>
    );
}