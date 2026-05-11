"use client";

import { useEffect, useRef, useState } from "react";

const specializations = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "General Medicine",
    desc: "Comprehensive preventive care and diagnostic services for adults of all ages.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Advanced Surgery",
    desc: "State-of-the-art surgical procedures utilizing minimally invasive techniques.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M8 14s-4 1.5-4 5h16c0-3.5-4-5-4-5"/>
        <path d="M15 8h1a2 2 0 0 1 0 4h-1"/>
      </svg>
    ),
    title: "Pediatrics",
    desc: "Expert pediatric care in a warm, child-friendly environment for your little ones.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Cardiology",
    desc: "Comprehensive heart health management from prevention to complex treatments.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2a7.5 7.5 0 0 1 5.2 12.81L21 21l-6.19-6.3A7.5 7.5 0 1 1 9.5 2z"/>
        <path d="M9.5 7v5M7 9.5h5"/>
      </svg>
    ),
    title: "Neurology",
    desc: "Specialized care for neurological disorders with advanced brain mapping technology.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
    ),
    title: "Radiology",
    desc: "High-precision imaging services for accurate and fast clinical diagnosis.",
  },
];

export default function SpecializationsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#EFEDE8",
        padding: "5rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(197,160,89,0.08)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            marginBottom: "2.8rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold-muted)",
              marginBottom: "0.6rem",
            }}
          >
            Specializations
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              color: "var(--brown-deep)",
              lineHeight: 1.15,
            }}
          >
            World-Class Medical Care
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.1rem",
          }}
          className="spec-grid"
        >
          {specializations.map((s, i) => (
            <SpecCard key={s.title} {...s} delay={0.08 + i * 0.08} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .spec-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .spec-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SpecCard({
  icon,
  title,
  desc,
  delay,
  visible,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "rgba(255,255,255,0.72)",
        borderRadius: "1.25rem",
        padding: "1.8rem 1.6rem",
        border: hovered
          ? "1.5px solid rgba(197,160,89,0.4)"
          : "1.5px solid rgba(197,160,89,0.12)",
        boxShadow: hovered
          ? "0 12px 40px rgba(93,64,55,0.12)"
          : "0 2px 12px rgba(93,64,55,0.05)",
        cursor: "pointer",
        transition:
          "background 0.25s, border 0.25s, box-shadow 0.25s, transform 0.25s, opacity 0.7s ease, filter 0.7s ease",
        transform: visible
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(22px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Icon pill */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "44px",
          height: "44px",
          borderRadius: "0.75rem",
          background: hovered
            ? "rgba(197,160,89,0.18)"
            : "rgba(197,160,89,0.10)",
          color: "var(--brown-soft)",
          marginBottom: "1.1rem",
          transition: "background 0.25s, color 0.25s",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontFamily: "var(--font-playfair)",
          fontWeight: 700,
          fontSize: "1.05rem",
          color: "var(--brown-deep)",
          marginBottom: "0.55rem",
          lineHeight: 1.25,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-manrope)",
          fontWeight: 400,
          fontSize: "0.82rem",
          color: "#6b5a53",
          lineHeight: 1.7,
        }}
      >
        {desc}
      </p>

      {/* Arrow link on hover */}
      <div
        style={{
          marginTop: "1.1rem",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-8px)",
          transition: "opacity 0.22s, transform 0.22s",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          color: "var(--gold-muted)",
          fontFamily: "var(--font-manrope)",
          fontWeight: 700,
          fontSize: "0.72rem",
          letterSpacing: "0.05em",
        }}
      >
        Learn more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  );
}