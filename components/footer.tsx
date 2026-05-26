"use client";

import Link from "next/link";
import {
  Globe,
  Share2,
  Heart,
} from "lucide-react";

const quickLinks = [
  "Home",
  "About Us",
  "Services",
  "Emergency Care",
];

const hours = [
  {
    label: "OPD",
    time: "8AM – 8PM",
  },
  {
    label: "Emergency",
    time: "24 Hours",
  },
  {
    label: "Pharmacy",
    time: "24 Hours",
  },
];

const socials = [
  {
    icon: Globe,
    href: "#",
  },
  {
    icon: Share2,
    href: "#",
  },
  {
    icon: Heart,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        bg-[#ece8e1]
        border-t
        border-[rgba(197,160,89,0.15)]
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-16
          pt-20
          pb-12
        "
      >
        {/* Top Grid */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-14
            pb-14
            border-b
            border-[rgba(93,64,55,0.08)]
          "
        >
          {/* Brand */}
          <div className="max-w-sm">
            <p
              className="
                text-[15px]
                tracking-[4px]
                uppercase
                font-bold
                text-[var(--brown-deep)]
              "
            >
              Curated Wellness
            </p>

            <h3
              className="
                mt-5
                text-[42px]
                leading-[1.05]
                tracking-[-2px]
                text-[var(--brown-deep)]
                font-light
                font-semibold
              "
            >
              AAYUSH
              <br />

              <span className="font-semibold">
                HOSPITAL
              </span>
            </h3>

            <p
              className="
                mt-6
                text-[15px]
                leading-8
                text-[var(--brown-soft)]
              "
            >
              Delivering compassionate healthcare and advanced
              medical excellence in a sanctuary designed for
              healing and recovery.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-8">
              {socials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-[rgba(93,64,55,0.12)]
                      flex
                      items-center
                      justify-center
                      text-[var(--brown-soft)]
                      hover:bg-[var(--gold-muted)]
                      hover:text-white
                      hover:-translate-y-1
                      transition-all
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="
                uppercase
                tracking-[4px]
                text-[13px]
                font-semibold
                text-[var(--brown-deep)]
                mb-7
              "
            >
              Quick Links
            </p>

            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="
                      text-[15px]
                      text-[var(--brown-soft)]
                      hover:text-[var(--gold-muted)]
                      transition-colors
                    "
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p
              className="
                uppercase
                tracking-[4px]
                text-[13px]
                font-semibold
                text-[var(--brown-deep)]
                mb-7
              "
            >
              Opening Hours
            </p>

            <div className="space-y-5">
              {hours.map((item) => (
                <div
                  key={item.label}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[rgba(93,64,55,0.08)]
                    pb-4
                  "
                >
                  <p
                    className="
                      text-[15px]
                      text-[var(--brown-soft)]
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      text-[15px]
                      font-semibold
                      text-[var(--gold-muted)]
                    "
                  >
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p
            className="
              text-[13px]
              text-[rgba(93,64,55,0.55)]
            "
          >
            © 2026 AAYUSH HOSPITAL. All Rights Reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-6
              flex-wrap
            "
          >
            {[
              "Designed for Excellence",
              "Healing with Grace",
            ].map((tag) => (
              <p
                key={tag}
                className="
                  uppercase
                  tracking-[3px]
                  text-[11px]
                  font-semibold
                  text-[rgba(93,64,55,0.35)]
                "
              >
                {tag}
              </p>
            ))}
          </div>
        </div>

        {/* Credit */}
        <div
          className="
            mt-8
            pt-6
            border-t
            border-[rgba(93,64,55,0.06)]
            text-center
          "
        >
          <p
            className="
    text-[12px]
    tracking-[1px]
    text-[rgba(93,64,55,0.45)]
  "
          >
            Design & Developed by{" "}

            <a
              href="https://prushal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
      text-[var(--gold-muted)]
      font-bold
      hover:opacity-80
      transition-all
      duration-300
    "
            >
              PRUSHAL TECH
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}