"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    label: "Emergency Care",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0H5m4 0h10M5 14v6m14-6v6M5 20h14"/>
        <circle cx="12" cy="10" r="2"/>
      </svg>
    ),
    label: "Diagnostics",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <path d="M3 9h18M9 4v5M15 4v5M8 14h3M8 17h5"/>
      </svg>
    ),
    label: "OPD Services",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4"/>
        <rect x="9" y="1" width="6" height="4" rx="1"/>
        <path d="M12 11v4M10 13h4"/>
      </svg>
    ),
    label: "Pharmacy",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    label: "Cardiology",
  },
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh", fontFamily: "var(--font-manrope)" }}
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"
          alt="Hospital interior"
          className="w-full h-full object-cover object-center"
          style={{
            transition: "transform 8s ease-out",
            transform: loaded ? "scale(1.04)" : "scale(1)",
          }}
        />
        {/* Warm gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(93,64,55,0.18) 0%, rgba(20,14,10,0.38) 60%, rgba(0,0,0,0.18) 100%)",
          }}
        />
      </div>

      {/* ── Nav ── */}
      <nav
        className="relative z-20 flex items-center justify-between px-8 py-5"
        style={{
          background: "rgba(245,245,240,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(197,160,89,0.18)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontSize: "1.05rem",
            letterSpacing: "0.08em",
            color: "var(--brown-deep)",
          }}
        >
          AAYUSH HOSPITAL
        </span>

        <ul className="hidden md:flex gap-8">
          {["Home", "About Us", "Services", "Doctors", "Contact"].map((item, i) => (
            <li key={item}>
              <a
                href="#"
                style={{
                  fontSize: "0.78rem",
                  fontWeight: i === 0 ? 700 : 500,
                  letterSpacing: "0.06em",
                  color: i === 0 ? "var(--brown-deep)" : "var(--brown-soft)",
                  textDecoration: i === 0 ? "underline" : "none",
                  textUnderlineOffset: "4px",
                  textDecorationColor: "var(--gold-muted)",
                  transition: "color 0.2s",
                }}
              >
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        <button
          style={{
            background: "var(--brown-deep)",
            color: "#fff",
            fontFamily: "var(--font-manrope)",
            fontWeight: 600,
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            padding: "0.6rem 1.4rem",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = "var(--gold-muted)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = "var(--brown-deep)";
          }}
        >
          BOOK APPOINTMENT
        </button>
      </nav>

      {/* ── Hero Content ── */}
      <div
        className="relative z-10 flex flex-col justify-center"
        style={{ minHeight: "calc(100svh - 72px - 130px)", padding: "3rem 2rem 2rem 3rem" }}
      >
        {/* Frosted text card */}
        <div
          style={{
            maxWidth: "420px",
            background: "rgba(245,245,240,0.72)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            borderRadius: "1.5rem",
            padding: "2.4rem 2.2rem 2rem",
            border: "1px solid rgba(197,160,89,0.22)",
            boxShadow: "0 8px 48px rgba(93,64,55,0.14)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 600,
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              color: "var(--gold-muted)",
              marginBottom: "0.85rem",
              textTransform: "uppercase",
            }}
          >
            10+ Years of Excellence
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 2.9rem)",
              lineHeight: 1.12,
              color: "var(--brown-deep)",
              marginBottom: "1rem",
            }}
          >
            Trusted<br />
            Healthcare<br />
            <span style={{ color: "var(--gold-muted)" }}>Excellence</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 400,
              fontSize: "0.85rem",
              color: "#5a4a44",
              lineHeight: 1.65,
              marginBottom: "1.8rem",
            }}
          >
            Delivering compassionate and advanced medical care in a sanctuary designed for your recovery.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
            <button
              style={{
                background: "var(--brown-deep)",
                color: "#fff",
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.09em",
                padding: "0.75rem 1.6rem",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
                boxShadow: "0 4px 16px rgba(93,64,55,0.3)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--gold-muted)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--brown-deep)";
                el.style.transform = "translateY(0)";
              }}
            >
              BOOK APPOINTMENT
            </button>

            <button
              style={{
                background: "transparent",
                color: "var(--brown-deep)",
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.09em",
                padding: "0.75rem 1.6rem",
                borderRadius: "9999px",
                border: "1.5px solid var(--brown-deep)",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--brown-deep)";
                el.style.color = "#fff";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.color = "var(--brown-deep)";
                el.style.transform = "translateY(0)";
              }}
            >
              EXPLORE SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* ── Service Cards Strip ── */}
      <div
        className="relative z-20"
        style={{
          background: "rgba(245,245,240,0.96)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(197,160,89,0.18)",
          padding: "0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
          }}
        >
          {services.map((s, i) => (
            <button
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.55rem",
                padding: "1.5rem 1rem",
                background: "transparent",
                border: "none",
                borderRight: i < services.length - 1 ? "1px solid rgba(197,160,89,0.18)" : "none",
                cursor: "pointer",
                transition: "background 0.22s",
                color: "var(--brown-soft)",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(18px)",
                // staggered reveal
                transitionDelay: `${0.35 + i * 0.07}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(197,160,89,0.09)";
                e.currentTarget.style.color = "var(--brown-deep)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--brown-soft)";
              }}
            >
              <span style={{ color: "inherit" }}>{s.icon}</span>
              <span
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "0.72rem",
                  letterSpacing: "0.05em",
                  color: "inherit",
                }}
              >
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}