'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from "react-icons/fa";
export default function Navbar() {
    const pathname = usePathname();

    const [isMobileMenuOpen, setIsMobileMenuOpen] =
        useState(false);

    const [scrolled, setScrolled] = useState(false);

    /* SCROLL EFFECT */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener(
            'scroll',
            handleScroll
        );

        return () => {
            window.removeEventListener(
                'scroll',
                handleScroll
            );
        };
    }, []);

    /* LOCK BODY SCROLL */
    useEffect(() => {
        document.body.style.overflow =
            isMobileMenuOpen ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    /* CLOSE MENU ON ROUTE CHANGE */
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        {
            name: 'HOME',
            href: '/',
        },
        {
            name: 'ABOUT US',
            href: '/about',
        },
        {
            name: 'SERVICES',
            href: '/services',
        },
        {
            name: 'DOCTORS',
            href: '/doctors',
        },
        {
            name: 'BLOGS',
            href: '/blogs',
        },
        {
            name: 'CONTACT',
            href: '/contact',
        },
    ];
    const toggleMenu = (e) => {
        e.preventDefault();
        setIsMobileMenuOpen((prev) => !prev);
    };
    return (
        <>
            {/* NAVBAR */}
            <nav
                className={`
                    fixed
                    top-0
                    left-0
                    w-full
                    z-99999
                    transition-all
                    duration-300
                    ${scrolled
                        ? 'bg-white/95 shadow-sm'
                        : 'bg-white'
                    }
                `}
            >
                <div
                    className="
                        max-w-350
                        mx-auto
                        px-5
                        sm:px-6
                        lg:px-8
                        xl:px-10
                    "
                >
                    <div
                        className="
                            relative
                            flex
                            items-center
                            justify-between
                            h-20
                            z-100000
                        "
                    >
                        {/* LOGO */}
                        <Link
                            href="/"
                            className="
    relative
    z-100001
    shrink-0
    flex
    items-center
    gap-3
  "
                        >
                            <img
                                src="/Aayush_logo.png"
                                alt="Aayush Hospital Logo"
                                className="
      h-10
      md:h-12
      w-auto
      object-contain
    "
                            />

                            <h1
                                className="
      text-[18px]
      sm:text-[20px]
      xl:text-[26px]
      font-bold
      tracking-[-1px]
      text-(--brown-deep)
      uppercase
      leading-none
      whitespace-nowrap
    "
                            >
                                AAYUSH HOSPITAL
                            </h1>
                        </Link>

                        {/* DESKTOP NAV — switches on at xl (1280px), not lg,
                            so small laptop widths (1024–1279px) still get the
                            mobile drawer instead of a cramped/overlapping row */}
                        <div
                            className="
                                hidden
                                xl:flex
                                items-center
                                gap-8
                                2xl:gap-12
                            "
                        >
                            {navLinks.map((link) => {
                                const isActive =
                                    pathname ===
                                    link.href;

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`
                                            relative
                                            text-[13px]
                                            2xl:text-[14px]
                                            tracking-[1px]
                                            font-semibold
                                            pb-1
                                            whitespace-nowrap
                                            transition-all
                                            duration-300
                                            ${isActive
                                                ? 'text-(--brown-deep)'
                                                : 'text-(--brown-soft) hover:text-(--brown-deep)'
                                            }
                                        `}
                                    >
                                        {link.name}

                                        <span
                                            className={`
                                                absolute
                                                left-0
                                                -bottom-1
                                                h-0.5
                                                bg-(--brown-deep)
                                                transition-all
                                                duration-300
                                                ${isActive
                                                    ? 'w-full'
                                                    : 'w-0'
                                                }
                                            `}
                                        />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* DESKTOP CTA */}
                        <div className="hidden xl:block shrink-0">
                            <a
                                href="https://wa.me/919970766313?text=Hello%20AAYUSH%20Hospital,%20I%20would%20like%20to%20book%20an%20appointment."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
      bg-(--brown-deep)
      hover:opacity-90
      text-white
      px-6
      py-3
      2xl:px-8
      2xl:py-4
      rounded-full
      text-[12px]
      2xl:text-[13px]
      tracking-[2px]
      font-semibold
      transition-all
      duration-300
      shadow-sm
      cursor-pointer
      inline-flex
      items-center
      gap-2
      whitespace-nowrap
    "
                            >
                                <FaWhatsapp size={18} />
                                BOOK APPOINTMENT
                            </a>
                        </div>
                        {/* MOBILE / TABLET / SMALL-LAPTOP TOGGLE
                            visible up to xl (was lg before — that's what
                            broke on small laptop screens) */}
                        <button
                            type="button"
                            aria-label="Toggle Menu"
                            onPointerDown={toggleMenu}   // ✅ one event, works on both touch & mouse
                            className="
        xl:hidden
        absolute
        top-1/2
        right-0
        -translate-y-1/2
        flex
        items-center
        justify-center
        w-11
        h-11
        rounded-full
        bg-white
        shadow-lg
        border
        border-gray-200
        z-100002
        cursor-pointer
        touch-manipulation
    "
                        >
                            <div className="relative w-5 h-5">
                                {/* TOP */}
                                <span
                                    className={`
                                        absolute
                                        left-0
                                        w-5
                                        h-0.5
                                        rounded-full
                                        bg-black
                                        transition-all
                                        duration-300
                                        ${isMobileMenuOpen
                                            ? 'rotate-45 top-2'
                                            : 'top-1'
                                        }
                                    `}
                                />

                                {/* MIDDLE */}
                                <span
                                    className={`
                                        absolute
                                        left-0
                                        top-2
                                        w-5
                                        h-0.5
                                        rounded-full
                                        bg-black
                                        transition-all
                                        duration-300
                                        ${isMobileMenuOpen
                                            ? 'opacity-0'
                                            : 'opacity-100'
                                        }
                                    `}
                                />

                                {/* BOTTOM */}
                                <span
                                    className={`
                                        absolute
                                        left-0
                                        w-5
                                        h-0.5
                                        rounded-full
                                        bg-black
                                        transition-all
                                        duration-300
                                        ${isMobileMenuOpen
                                            ? '-rotate-45 top-2'
                                            : 'top-3'
                                        }
                                    `}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* OVERLAY */}
            <div
                onClick={() =>
                    setIsMobileMenuOpen(false)
                }
                className={`
                    fixed
                    inset-0
                    bg-black/40
                    backdrop-blur-sm
                    z-99990
                    transition-all
                    duration-300
                    xl:hidden
                    ${isMobileMenuOpen
                        ? 'opacity-100 visible pointer-events-auto'
                        : 'opacity-0 invisible pointer-events-none'
                    }
                `}
            />

            {/* MOBILE DRAWER */}
            <div
                className={`
                    fixed
                    top-0
                    right-0
                    h-screen
                    w-[85%]
                    max-w-90
                    bg-[#f8f5f1]
                    z-99991
                    shadow-2xl
                    transition-transform
                    duration-500
                    ease-in-out
                    xl:hidden
                    flex
                    flex-col
                    ${isMobileMenuOpen
                        ? 'translate-x-0'
                        : 'translate-x-full'
                    }
                `}
            >
                {/* HEADER */}
                <div
                    className="
                        px-6
                        pt-8
                        pb-6
                        border-b
                        border-[rgba(93,64,55,0.08)]
                    "
                >
                    <div className="flex items-center justify-between">
                        <h2
                            className="
                                text-[24px]
                                font-bold
                                tracking-[-1px]
                                text-(--brown-deep)
                            "
                        >
                            AAYUSH
                        </h2>

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(
                                    false
                                )
                            }
                            className="
                                w-10
                                h-10
                                rounded-full
                                bg-white
                                flex
                                items-center
                                justify-center
                                shadow-md
                                border
                                border-[rgba(93,64,55,0.08)]
                            "
                        >
                            <span className="text-[22px] leading-none">
                                ×
                            </span>
                        </button>
                    </div>
                </div>

                {/* LINKS */}
                <div
                    className="
                        flex
                        flex-col
                        gap-3
                        px-6
                        py-8
                        flex-1
                    "
                >
                    {navLinks.map((link) => {
                        const isActive =
                            pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() =>
                                    setIsMobileMenuOpen(
                                        false
                                    )
                                }
                                className={`
                                    flex
                                    items-center
                                    justify-between
                                    rounded-2xl
                                    px-5
                                    py-4
                                    transition-all
                                    duration-300
                                    ${isActive
                                        ? 'bg-[rgba(93,64,55,0.08)]'
                                        : 'hover:bg-[rgba(93,64,55,0.04)]'
                                    }
                                `}
                            >
                                <span
                                    className={`
                                        text-[15px]
                                        tracking-[2px]
                                        font-semibold
                                        transition-all
                                        duration-300
                                        ${isActive
                                            ? 'text-(--brown-deep)'
                                            : 'text-(--brown-soft)'
                                        }
                                    `}
                                >
                                    {link.name}
                                </span>

                                {isActive && (
                                    <span
                                    />
                                )}
                            </Link>
                        );
                    })}

                    {/* MOBILE CTA */}
                    <div className="mt-auto pt-8">
                        <a
                            href="https://wa.me/919970766313?text=Hello%20AAYUSH%20Hospital,%20I%20would%20like%20to%20book%20an%20appointment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
    w-full
    flex
    items-center
    justify-center
    gap-2
    bg-(--brown-deep)
    hover:opacity-90
    text-white
    py-4
    rounded-full
    text-[13px]
    tracking-[2px]
    font-semibold
    transition-all
    duration-300
    shadow-sm
  "
                        >
                            <FaWhatsapp size={18} />
                            BOOK APPOINTMENT
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}