// components/Navbar.jsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT US', href: '#about' },
        { name: 'SERVICES', href: '#services' },
        { name: 'DOCTORS', href: '#doctors' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white shadow-sm py-4'
                    : 'bg-white py-5'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <h1 className="text-[28px] font-bold tracking-[-1px] text-[#4d342d] font-playfair uppercase">
                            AAYUSH HOSPITAL
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-14">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative text-[15px] tracking-wide font-medium transition-all duration-300 ${index === 0
                                        ? 'text-[#4d342d]'
                                        : 'text-[#7b6d67] hover:text-[#4d342d]'
                                    }`}
                            >
                                {link.name}

                                {/* Active underline for HOME */}
                                {index === 0 && (
                                    <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-[#4d342d]" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="bg-[#5b3a2e] hover:bg-[#6d4637] text-white px-9 py-4 rounded-full text-sm tracking-[2px] font-semibold transition-all duration-300 shadow-sm">
                            BOOK APPOINTMENT
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-[#4d342d]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-5 bg-white rounded-3xl shadow-xl p-6">
                        <div className="flex flex-col gap-5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-[#4d342d] font-medium tracking-wide"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <button className="mt-2 bg-[#5b3a2e] text-white py-3 rounded-full tracking-[2px] text-sm font-semibold">
                                BOOK APPOINTMENT
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}