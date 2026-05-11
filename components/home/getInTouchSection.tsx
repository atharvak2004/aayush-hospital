"use client";

import { useEffect, useRef, useState } from "react";

export default function GetInTouchSection() {
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
        background: "var(--off-white)",
        padding: "5rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(197,160,89,0.07)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "1.5rem",
          alignItems: "stretch",
        }}
        className="contact-grid"
      >
        {/* ── Left: Contact card ── */}
        <div
          style={{
            background: "#ECEAE4",
            borderRadius: "1.5rem",
            padding: "2.4rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.8rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-28px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              color: "var(--brown-deep)",
              lineHeight: 1.2,
              marginBottom: "0.4rem",
            }}
          >
            Get In Touch
          </h2>

          {/* Contact rows */}
          {[
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              ),
              label: "Our Address",
              lines: ["123 Wellness Blvd, Sanctuary District,", "Health City, HC 54321"],
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.86 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              ),
              label: "Emergency Support",
              lines: ["+1 (800) 555-0199 (24/7)"],
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              ),
              label: "General Inquiry",
              lines: ["care@aayushhospital.com"],
            },
          ].map((item, i) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                gap: "0.9rem",
                alignItems: "flex-start",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transition: `opacity 0.65s ease ${0.2 + i * 0.1}s, transform 0.65s ease ${0.2 + i * 0.1}s`,
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "36px",
                  height: "36px",
                  borderRadius: "0.65rem",
                  background: "rgba(197,160,89,0.13)",
                  border: "1px solid rgba(197,160,89,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--brown-soft)",
                  marginTop: "2px",
                }}
              >
                {item.icon}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: "var(--brown-deep)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.label}
                </p>
                {item.lines.map((line) => (
                  <p
                    key={line}
                    style={{
                      fontFamily: "var(--font-manrope)",
                      fontWeight: 400,
                      fontSize: "0.8rem",
                      color: "#6b5a53",
                      lineHeight: 1.6,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Divider + social */}
          <div style={{ borderTop: "1px solid rgba(197,160,89,0.2)", paddingTop: "1.4rem" }}>
            <p
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "0.65rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--gold-muted)",
                marginBottom: "0.85rem",
              }}
            >
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "0.65rem" }}>
              {[
                {
                  label: "Facebook",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(197,160,89,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--brown-soft)",
                    transition: "background 0.2s, color 0.2s, transform 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "var(--brown-deep)";
                    el.style.color = "#fff";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.7)";
                    el.style.color = "var(--brown-soft)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Map ── */}
        <div
          style={{
            borderRadius: "1.5rem",
            overflow: "hidden",
            minHeight: "360px",
            position: "relative",
            boxShadow: "0 8px 40px rgba(93,64,55,0.13)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(28px)",
            transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
          }}
        >
          <iframe
            title="Aayush Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              minHeight: "360px",
              display: "block",
              filter: "sepia(20%) saturate(0.85) brightness(0.95)",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Map overlay pin label */}
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              background: "rgba(245,245,240,0.92)",
              backdropFilter: "blur(10px)",
              borderRadius: "0.75rem",
              padding: "0.6rem 0.9rem",
              border: "1px solid rgba(197,160,89,0.25)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                fontSize: "0.7rem",
                color: "var(--brown-deep)",
                letterSpacing: "0.04em",
              }}
            >
              Aayush Hospital
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}