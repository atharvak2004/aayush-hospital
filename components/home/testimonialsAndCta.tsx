"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "The level of care I received at Aayush Hospital was exceptional. From the moment I walked in, I felt I was in a place that truly cared about my recovery. The doctors are brilliant and the environment is incredibly calming.",
    name: "Robert Vanderwall",
    role: "Cardiac Patient",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote:
      "Aayush Hospital gave my mother a new lease on life. The surgical team was world-class and the post-operative care was thorough and compassionate. We couldn't have asked for better.",
    name: "Priya Sharma",
    role: "Family of Patient",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote:
      "From the OPD to the diagnostics lab, every step was seamless. The staff was warm, professional, and incredibly reassuring throughout my treatment journey.",
    name: "Anand Kulkarni",
    role: "Neurology Patient",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
  },
];

export default function TestimonialsAndCTA() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
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

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <>
      {/* ── Testimonials ── */}
      <section
        ref={sectionRef}
        style={{
          background: "var(--off-white)",
          padding: "6rem 2rem 5rem",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Decorative blob */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(197,160,89,0.06)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Big quote mark */}
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
              fontSize: "4rem",
              color: "var(--gold-muted)",
              lineHeight: 0.6,
              marginBottom: "2rem",
              userSelect: "none",
            }}
          >
            "
          </p>

          {/* Quote text */}
          <blockquote
            key={active}
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 500,
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              color: "#3a2e2a",
              lineHeight: 1.75,
              marginBottom: "2.2rem",
              fontStyle: "italic",
              animation: "fadeQuote 0.5s ease",
            }}
          >
            "{t.quote}"
          </blockquote>

          {/* Avatar + name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(197,160,89,0.4)",
                boxShadow: "0 4px 14px rgba(93,64,55,0.15)",
              }}
            >
              <img
                src={t.avatar}
                alt={t.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "var(--brown-deep)",
              }}
            >
              {t.name}
            </p>
            <p
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "0.63rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold-muted)",
              }}
            >
              {t.role}
            </p>
          </div>

          {/* Dot indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "2rem" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  background: i === active ? "var(--gold-muted)" : "rgba(197,160,89,0.3)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.35s ease, background 0.35s ease",
                }}
              />
            ))}
          </div>
        </div>

        <style>{`
          @keyframes fadeQuote {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: "var(--off-white)", padding: "0 2rem 5rem" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            background: "var(--brown-deep)",
            borderRadius: "1.75rem",
            padding: "4rem 2rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.85s ease 0.3s, transform 0.85s ease 0.3s",
          }}
        >
          {/* Decorative texture rings */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-60px",
              left: "-60px",
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              border: "1px solid rgba(197,160,89,0.12)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: "-80px",
              right: "-80px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              border: "1px solid rgba(197,160,89,0.10)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "600px",
              height: "300px",
              borderRadius: "50%",
              background: "rgba(197,160,89,0.05)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />

          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              color: "#F5F5F0",
              marginBottom: "1rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            Your Health, Our Priority
          </h2>

          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 400,
              fontSize: "0.88rem",
              color: "rgba(245,245,240,0.62)",
              lineHeight: 1.7,
              marginBottom: "2.2rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            Join thousands of families who trust us for their healthcare needs.
            <br />
            Schedule your visit today.
          </p>

          <CTAButton />
        </div>
      </section>
    </>
  );
}

function CTAButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-manrope)",
        fontWeight: 700,
        fontSize: "0.75rem",
        letterSpacing: "0.1em",
        color: hovered ? "#fff" : "var(--brown-deep)",
        background: hovered ? "var(--gold-muted)" : "#F5F5F0",
        border: "none",
        borderRadius: "9999px",
        padding: "0.85rem 2.2rem",
        cursor: "pointer",
        transition: "background 0.25s, color 0.25s, transform 0.2s, box-shadow 0.25s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 28px rgba(197,160,89,0.35)"
          : "0 2px 10px rgba(0,0,0,0.12)",
        position: "relative",
        zIndex: 1,
      }}
    >
      BOOK APPOINTMENT NOW
    </button>
  );
}