"use client";

import { useEffect, useRef, useState } from "react";

const doctors = [
  {
    name: "Dr. Jonathan Aris",
    role: "Chief Cardiologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Head of Surgery",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Michael Chen",
    role: "Senior Pediatrician",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Sarah Thompson",
    role: "Neurology Expert",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Arjun Mehta",
    role: "Radiologist",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ExpertTeamSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--off-white)",
        padding: "5rem 0 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-40px",
          right: "-60px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(197,160,89,0.08)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Header row */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "2.8rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(18px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div>
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
            Expert Team
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
            Meet Our Specialists
          </h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Scroll arrows */}
          {[{ dir: "left" as const, show: canScrollLeft }, { dir: "right" as const, show: canScrollRight }].map(
            ({ dir, show }) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(93,64,55,0.25)",
                  background: show ? "#fff" : "transparent",
                  color: show ? "var(--brown-deep)" : "rgba(93,64,55,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: show ? "pointer" : "default",
                  transition: "background 0.2s, color 0.2s, border 0.2s",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {dir === "left"
                    ? <path d="M19 12H5M12 19l-7-7 7-7"/>
                    : <path d="M5 12h14M12 5l7 7-7 7"/>}
                </svg>
              </button>
            )
          )}

          {/* View All button */}
          <button
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
              color: "var(--brown-deep)",
              background: "transparent",
              border: "1.5px solid rgba(93,64,55,0.3)",
              borderRadius: "9999px",
              padding: "0.55rem 1.2rem",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--brown-deep)";
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "var(--brown-deep)";
            }}
          >
            VIEW ALL DOCTORS
          </button>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        style={{
          display: "flex",
          gap: "1.1rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingLeft: "max(2rem, calc((100vw - 1100px)/2 + 2rem))",
          paddingRight: "2rem",
          paddingBottom: "0.5rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="hide-scrollbar"
      >
        {doctors.map((doc, i) => (
          <DoctorCard key={doc.name} {...doc} delay={0.1 + i * 0.09} visible={visible} />
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

function DoctorCard({
  name,
  role,
  image,
  delay,
  visible,
}: {
  name: string;
  role: string;
  image: string;
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        width: "240px",
        scrollSnapAlign: "start",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {/* Image container */}
      <div
        style={{
          borderRadius: "1.25rem",
          overflow: "hidden",
          width: "100%",
          aspectRatio: "3/4",
          position: "relative",
          boxShadow: hovered
            ? "0 16px 48px rgba(93,64,55,0.2)"
            : "0 4px 18px rgba(93,64,55,0.10)",
          transition: "box-shadow 0.3s",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />

        {/* Subtle gradient at bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(to top, rgba(93,64,55,0.22) 0%, transparent 55%)"
              : "linear-gradient(to top, rgba(93,64,55,0.08) 0%, transparent 55%)",
            transition: "background 0.3s",
          }}
        />
      </div>

      {/* Name & role */}
      <div style={{ marginTop: "0.95rem", paddingLeft: "0.1rem" }}>
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontSize: "0.98rem",
            color: "var(--brown-deep)",
            marginBottom: "0.2rem",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 600,
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--gold-muted)",
          }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}