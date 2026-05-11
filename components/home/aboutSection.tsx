"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--off-white)",
        padding: "5rem 2rem 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blurred blob top-left */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-60px",
          left: "-60px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "rgba(197,160,89,0.10)",
          filter: "blur(60px)",
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
        className="about-grid"
      >
        {/* ── Left: Image + badge ── */}
        <div
          style={{
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-36px)",
            transition: "opacity 0.85s ease 0.1s, transform 0.85s ease 0.1s",
          }}
        >
          {/* Main doctor image */}
          <div
            style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              width: "100%",
              maxWidth: "340px",
              aspectRatio: "4/5",
              boxShadow: "0 24px 64px rgba(93,64,55,0.18)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80"
              alt="Doctor at Aayush Hospital"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
            />
          </div>

          {/* 10+ Years badge */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              background: "var(--brown-deep)",
              color: "#fff",
              borderRadius: "1rem",
              padding: "1.2rem 1.6rem",
              minWidth: "130px",
              boxShadow: "0 8px 28px rgba(93,64,55,0.28)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 800,
                fontSize: "2rem",
                lineHeight: 1,
                marginBottom: "0.2rem",
              }}
            >
              10+
            </p>
            <p
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              Years Excellence
            </p>
          </div>

          {/* Decorative ring behind image */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-18px",
              left: "-18px",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "2px solid rgba(197,160,89,0.35)",
              zIndex: 0,
            }}
          />
        </div>

        {/* ── Right: Text ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(36px)",
            transition: "opacity 0.85s ease 0.25s, transform 0.85s ease 0.25s",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold-muted)",
              marginBottom: "1rem",
            }}
          >
            Our Heritage
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              lineHeight: 1.15,
              color: "var(--brown-deep)",
              marginBottom: "1.5rem",
            }}
          >
            A Decade of{" "}
            <span style={{ fontWeight: 800 }}>Compassionate</span>{" "}
            <span style={{ color: "#2C2C2C", fontWeight: 500 }}>Healing</span>
          </h2>

          {/* Divider */}
          <div
            style={{
              width: "48px",
              height: "2px",
              background: "linear-gradient(90deg, var(--gold-muted), transparent)",
              marginBottom: "1.5rem",
              borderRadius: "2px",
            }}
          />

          {/* Body */}
          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 400,
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "#5a4a44",
              marginBottom: "2rem",
              maxWidth: "480px",
            }}
          >
            Founded on the principles of integrity and excellence, Aayush Hospital has grown from a local
            clinic to a premier medical destination. Our journey over the last ten years has been defined by
            the lives we've touched and the trust we've built with every patient who enters our sanctuary.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              marginBottom: "2.2rem",
            }}
          >
            {[
              { value: "12K+", label: "Patients Served" },
              { value: "40+", label: "Specialists" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    color: "var(--brown-deep)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 500,
                    fontSize: "0.68rem",
                    letterSpacing: "0.06em",
                    color: "var(--brown-soft)",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA link */}
          <a
            href="#"
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.04em",
              color: "var(--brown-deep)",
              textDecoration: "underline",
              textDecorationColor: "var(--gold-muted)",
              textUnderlineOffset: "5px",
              transition: "color 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-muted)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--brown-deep)";
            }}
          >
            Learn More About Our History
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}