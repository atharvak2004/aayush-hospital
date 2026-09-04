"use client";

import Link from "next/link";

import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "About Us",
  "Services",
  "Emergency Care",
];

const hours = [
  {
    label: "Morning OPD",
    time: "10:00 AM – 2:00 PM",
  },
  {
    label: "Evening OPD",
    time: "6:00 PM – 9:30 PM",
  },
  {
    label: "Sunday",
    time: "Open",
  },
];

const socials = [
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919970766313",
    label: "WhatsApp",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/aayushhospital_pune/",
    label: "Instagram",
  },  
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@aayushhospitalpune",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        bg-(--brown-deep)
        border-t
        border-[rgba(197,160,89,0.15)]
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-16
          pt-14
          sm:pt-16
          lg:pt-20
          pb-8
          sm:pb-10
          lg:pb-12
        "
      >
        {/* Top Grid */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
            sm:gap-12
            lg:gap-14
            pb-10
            sm:pb-12
            lg:pb-14
            border-b
            border-white/10
          "
        >
          {/* Brand */}
          <div className="max-w-sm">
            <p
              className="
    text-[13px]
    sm:text-[15px]
    tracking-[3px]
    sm:tracking-[4px]
    uppercase
    font-bold
    text-(--gold-muted)
  "
            >
              Curated Wellness
            </p>

            <h3
              className="
    mt-4
    sm:mt-5
    text-[32px]
    sm:text-[36px]
    lg:text-[42px]
    leading-[1.05]
    tracking-[-1px]
    sm:tracking-[-1.5px]
    lg:tracking-[-2px]
    text-white
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
    mt-5
    sm:mt-6
    text-[14px]
    sm:text-[15px]
    leading-7
    sm:leading-8
    text-white/70
  "
            >
              Delivering compassionate healthcare and advanced
              medical excellence in a sanctuary designed for
              healing and recovery.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6 sm:mt-8">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="
          w-10
          h-10
          sm:w-11
          sm:h-11
          rounded-full
          border
          border-white/15
          flex
          items-center
          justify-center
          text-white/70
          hover:bg-(--gold-muted)
          hover:text-white
          hover:-translate-y-1
          transition-all
          duration-300
        "
                  >
                    <Icon size={18} />
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
  tracking-[3px]
  sm:tracking-[4px]
  text-[12px]
  sm:text-[13px]
  font-semibold
  text-white
  mb-5
  sm:mb-6
  lg:mb-7
"
            >
              Quick Links
            </p>

            <ul className="space-y-4 sm:space-y-5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="
  text-[14px]
  sm:text-[15px]
  text-white/70
  hover:text-(--brown-soft)
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
  tracking-[3px]
  sm:tracking-[4px]
  text-[12px]
  sm:text-[13px]
  font-semibold
  text-white
  mb-5
  sm:mb-6
  lg:mb-7
"
            >
              OPD Timings
            </p>

            <div className="space-y-4 sm:space-y-5">
              {hours.map((item) => (
                <div
                  key={item.label}
                  className="
                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-x-4
                    gap-y-1
                    border-b
                    border-white/10
                    pb-3
                    sm:pb-4
                  "
                >
                  <p
                    className="
  text-[14px]
  sm:text-[15px]
  text-white/70
"
                  >
                    {item.label}
                  </p>

                  <p
                    className="
  text-[14px]
  sm:text-[15px]
  font-semibold
  text-(--gold-muted)
  whitespace-nowrap
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
            pt-6
            sm:pt-8
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
  text-[12px]
  sm:text-[13px]
  text-white/50
  text-center
  md:text-left
"
          >
            © 2026 AAYUSH HOSPITAL. All Rights Reserved.
          </p>

          <div
            className="
    flex
    flex-wrap
    justify-center
    md:justify-end
    items-center
    gap-x-5
    gap-y-2
    mt-2
    md:mt-0
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
        tracking-[2px]
        sm:tracking-[3px]
        text-[10px]
        sm:text-[11px]
        font-semibold
        text-white/30
        whitespace-nowrap
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
            mt-6
            sm:mt-8
            pt-5
            sm:pt-6
            border-t
            border-white/10
            text-center
          "
        >
          <p
            className="
  text-[11px]
  sm:text-[12px]
  tracking-[1px]
  text-white/50
  leading-6
"
          >
            Design & Developed by{" "}

            <a
              href="https://prushal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
  text-(--gold-muted)
  font-bold
  hover:text-white
  transition-all
  duration-300
"
            >
              PRUSHAL TECHNOLOGY PVT. LTD.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}