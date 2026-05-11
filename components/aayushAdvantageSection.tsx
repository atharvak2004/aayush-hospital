"use client";

import { useEffect, useRef, useState } from "react";

const advantages = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Experienced Staff",
    desc: "A team of globally trained specialists dedicated to your well-being.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <circle cx="12" cy="10" r="3"/>
        <path d="M12 7v1M12 12v1M9 10H8M15 10h1"/>
      </svg>
    ),
    title: "Modern Equipment",
    desc: "The latest medical technology for precise diagnosis and treatment.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Patient-Centered Care",
    desc: "Personalized care plans tailored to individual needs and comfort.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "24/7 Support",
    desc: "Round-the-clock emergency services and patient assistance.",
  },
];

export default function AayushAdvantageSection() {
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
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--brown-deep)",
        padding: "5.5rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative warm radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(197,160,89,0.07)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "30%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(197,160,89,0.05)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="advantage-grid"
      >
        {/* ── Left: Text + feature list ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-32px)",
            transition: "opacity 0.85s ease 0.1s, transform 0.85s ease 0.1s",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold-muted)",
              marginBottom: "0.9rem",
            }}
          >
            The Aayush Advantage
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              color: "#F5F5F0",
              lineHeight: 1.18,
              marginBottom: "2.8rem",
            }}
          >
            Setting New Standards in{" "}
            <span style={{ fontWeight: 800, color: "#fff" }}>Healthcare</span>
          </h2>

          {/* Advantage list */}
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            {advantages.map((item, i) => (
              <li
                key={item.title}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.65s ease ${0.2 + i * 0.1}s, transform 0.65s ease ${0.2 + i * 0.1}s`,
                }}
              >
                {/* Icon bubble */}
                <div
                  style={{
                    flexShrink: 0,
                    width: "42px",
                    height: "42px",
                    borderRadius: "0.75rem",
                    background: "rgba(197,160,89,0.14)",
                    border: "1px solid rgba(197,160,89,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-muted)",
                    marginTop: "2px",
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#F5F5F0",
                      marginBottom: "0.3rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-manrope)",
                      fontWeight: 400,
                      fontSize: "0.82rem",
                      color: "rgba(245,245,240,0.58)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Image ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(32px)",
            transition: "opacity 0.85s ease 0.25s, transform 0.85s ease 0.25s",
            position: "relative",
          }}
        >
          {/* Decorative frame */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-10px",
              borderRadius: "1.75rem",
              border: "1px solid rgba(197,160,89,0.15)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              width: "100%",
              aspectRatio: "4/3.2",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=900&q=80"
              alt="Modern surgical theatre at Aayush Hospital"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                filter: "grayscale(30%) brightness(0.88)",
              }}
            />

            {/* Corner gold accent */}
            <div
              style={{
                position: "absolute",
                bottom: "1.2rem",
                left: "1.2rem",
                background: "rgba(93,64,55,0.75)",
                backdropFilter: "blur(10px)",
                borderRadius: "0.75rem",
                padding: "0.7rem 1rem",
                border: "1px solid rgba(197,160,89,0.3)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold-muted)",
                  marginBottom: "0.1rem",
                }}
              >
                State-of-the-Art
              </p>
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#F5F5F0",
                }}
              >
                Surgical Theatre
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .advantage-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}