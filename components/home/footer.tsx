"use client";

import { useState } from "react";

const quickLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Patient Portal",
  "Emergency Care",
];

const hours = [
  { label: "OPD", time: "8AM – 8PM" },
  { label: "Emergency", time: "24 Hours" },
  { label: "Pharmacy", time: "24 Hours" },
];

const socialIcons = [
  {
    label: "Website",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    label: "Share",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    label: "Like",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
      </svg>
    ),
  },
];

function SocialBtn({ label, icon }: { label: string; icon: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        border: "1px solid rgba(93,64,55,0.18)",
        background: hovered ? "rgba(197,160,89,0.18)" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: hovered ? "var(--gold-muted)" : "rgba(93,64,55,0.45)",
        transition: "background 0.2s, color 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      {icon}
    </a>
  );
}

function FooterLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <a
        href="#"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "var(--font-manrope)",
          fontWeight: 400,
          fontSize: "0.82rem",
          color: hovered ? "var(--gold-muted)" : "rgba(93,64,55,0.6)",
          textDecoration: "none",
          transition: "color 0.2s",
          display: "inline-block",
        }}
      >
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "#ECEAE4",
        borderTop: "1px solid rgba(197,160,89,0.18)",
      }}
    >
      {/* Main footer body */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "3.5rem 2rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gap: "3rem",
        }}
        className="footer-grid"
      >
        {/* ── Col 1: Brand ── */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "0.12em",
              color: "var(--brown-deep)",
              marginBottom: "1rem",
            }}
          >
            AAYUSH HOSPITAL
          </p>

          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 400,
              fontSize: "0.82rem",
              color: "rgba(93,64,55,0.6)",
              lineHeight: 1.75,
              marginBottom: "1.6rem",
              maxWidth: "260px",
            }}
          >
            The Curated Sanctuary of Wellness. Dedicated to providing world-class medical excellence with a heart for ten remarkable years.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.6rem" }}>
            {socialIcons.map((s) => (
              <SocialBtn key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* ── Col 2: Quick Links ── */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--brown-deep)",
              marginBottom: "1.2rem",
            }}
          >
            Quick Links
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {quickLinks.map((link) => (
              <FooterLink key={link} label={link} />
            ))}
          </ul>
        </div>

        {/* ── Col 3: Hours ── */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--brown-deep)",
              marginBottom: "1.2rem",
            }}
          >
            Hours
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {hours.map((h) => (
              <li
                key={h.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(93,64,55,0.1)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 400,
                    fontSize: "0.82rem",
                    color: "rgba(93,64,55,0.55)",
                  }}
                >
                  {h.label}:
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: "var(--gold-muted)",
                  }}
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid rgba(93,64,55,0.1)",
          padding: "1.1rem 2rem",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 400,
            fontSize: "0.7rem",
            color: "rgba(93,64,55,0.45)",
          }}
        >
          © 2024 AAYUSH HOSPITAL. The Curated Sanctuary of Wellness.
        </p>

        <div style={{ display: "flex", gap: "2rem" }}>
          {["Designed for Excellence", "Healing with Grace"].map((tag) => (
            <p
              key={tag}
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "0.62rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(93,64,55,0.3)",
              }}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>

      {/* ── Dev credit ── */}
      <div
        style={{
          textAlign: "center",
          padding: "0.75rem 2rem 1.2rem",
          borderTop: "1px solid rgba(93,64,55,0.07)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 500,
            fontSize: "0.68rem",
            color: "rgba(93,64,55,0.35)",
            letterSpacing: "0.04em",
          }}
        >
          Design &amp; Developed by{" "}
          <span style={{ color: "var(--gold-muted)", fontWeight: 700 }}>PRUSHAL TECH</span>
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}