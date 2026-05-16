"use client";

import Image from "next/image";
import {
  Asterisk,
  Microscope,
  ClipboardPlus,
  Cross,
} from "lucide-react";
import Link from "next/link";
const services = [
  {
    icon: Asterisk,
    label: "Emergency Care",
  },
  {
    icon: Microscope,
    label: "Diagnostics",
  },
  {
    icon: ClipboardPlus,
    label: "OPD Services",
  },
  {
    icon: Cross,
    label: "Pharmacy",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#b87b42]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/Home_hero.png"
          alt="Hospital Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#8b5a2b]/25" />
      </div>

      {/* MAIN WRAPPER */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* HERO CONTENT */}
        <div
          className="
            flex
            items-center
            flex-1
            px-4
            sm:px-6
            md:px-10
            lg:px-16
            pt-28
            sm:pt-32
            md:pt-36
            pb-28
            sm:pb-32
          "
        >
          {/* GLASS CARD */}
          <div
            className="
              w-full
              max-w-full
              sm:max-w-[620px]
              lg:max-w-[680px]
              bg-white/20
              backdrop-blur-md
              rounded-[24px]
              border border-white/20
              shadow-2xl
              p-6
              sm:p-8
              md:p-10
              lg:p-12
            "
          >
            {/* TOP TEXT */}
            <p
              className="
                text-[28px]
                sm:text-[34px]
                md:text-[38px]
                font-light
                text-[#4b2d25]
                leading-none
                tracking-[-1px]
              "
            >
              10+ Years of
            </p>

            {/* MAIN HEADING */}
            <h1
              className="
                mt-4
                text-[52px]
                xs:text-[58px]
                sm:text-[72px]
                md:text-[82px]
                lg:text-[92px]
                leading-[0.9]
                tracking-[-2px]
                sm:tracking-[-3px]
                font-semibold
                text-[var(--brown-deep)]
              "
            >
              Trusted
              <br />
              Healthcare
              <br />
              <span className="font-light">
                Excellence
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                text-[#5c463d]
                text-[16px]
                sm:text-[17px]
                leading-7
                max-w-[540px]
              "
            >
              Delivering compassionate and advanced medical
              care in a sanctuary designed for your recovery.
            </p>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                mt-8
                w-full
              "
            >
              {/* BUTTON 1 */}
              <button
                className="
                  w-full
                  sm:w-auto
                  min-w-[220px]
                  bg-[#5a3a32]
                  hover:bg-[#4a2f29]
                  text-white
                  px-8
                  py-4
                  rounded-full
                  text-[12px]
                  sm:text-[13px]
                  tracking-[2px]
                  font-semibold
                  transition-all
                  duration-300
                  whitespace-nowrap
                  cursor-pointer
                "
              >
                BOOK APPOINTMENT
              </button>

              {/* BUTTON 2 */}
              <Link href="/services">
                <button
                  className="
                  w-full
                  sm:w-auto
                  min-w-[220px]
                  bg-[#f2f0ed]
                  hover:bg-white
                  text-[#3f2a24]
                  px-8
                  py-4
                  rounded-full
                  text-[12px]
                  sm:text-[13px]
                  tracking-[2px]
                  font-semibold
                  transition-all
                  duration-300
                  whitespace-nowrap
                  cursor-pointer
                "
                >
                  EXPLORE SERVICES
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div
          className="
            relative
            z-20
            px-4
            sm:px-6
            md:px-8
            pb-6
            sm:pb-10
          "
        >
          <div
            className="
    grid
    grid-cols-2
    lg:grid-cols-4
    gap-4
  "
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-[#f7f5f3]
                    rounded-2xl
                    h-[120px]
                    sm:h-[135px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    border
                    border-white/40
                  "
                >
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="text-[#5a3a32]"
                  />

                  <p
                    className="
                      text-[#4b2d25]
                      text-[15px]
                      sm:text-[16px]
                      font-medium
                      text-center
                    "
                  >
                    {service.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}