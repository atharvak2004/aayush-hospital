"use client";

import Image from "next/image";
import {
  Bone,
  Activity,
  Pill,
  Wind,
} from "lucide-react";
import Link from "next/link";
import CountUp from "react-countup";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    icon: Bone,
    label: "Surgery and Orthopedics",
  },
  {
    icon: Activity,
    label: "Physiotherapy",
  },
  {
    icon: Pill,
    label: "Pain Management",
  },
  {
    icon: Wind,
    label: "Ozone Treatments",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-175 sm:min-h-195 min-[1170px]:min-h-screen overflow-hidden bg-[#B0937A] min-[1350px]:bg-[#b87b42]">
      {/* BACKGROUND IMAGE - hidden below 1350px, shown from 1350px up */}
      <div className="hidden min-[1350px]:block absolute inset-0">
        <Image
          src="/Aayush_Hero_Image9.png"
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
      <div className="relative z-10 flex flex-col min-h-175 sm:min-h-195 min-[1170px]:min-h-screen ">
        {/* HERO CONTENT */}
        <div
          className="
            flex
            items-center
            flex-1
            px-4
            sm:px-6
            md:px-10
            lg:px-10
            xl:px-16
            2xl:px-16
            py-20
            sm:py-24
            lg:pt-36
            lg:pb-32
            max-w-350
            mx-auto
            w-full
          "
        >
          {/* GLASS CARD */}
          <div
            className="
              w-full
              max-w-2xl
              lg:max-w-3xl
              bg-white/35
              backdrop-blur-lg
              rounded-3xl
              border border-white/40
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.5)]
              mt-10
              p-7
              sm:p-9
              md:p-10
              lg:p-12
            "
          >
            {/* TOP TEXT */}
            <p
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-light
                text-[#4b2d25]
                leading-none
                tracking-[-1px]
              "
            >
              <CountUp
                end={15}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
              + Years of
            </p>

            {/* MAIN HEADING */}
            <h1
              className="
                mt-3
                text-5xl
                sm:text-5xl
                md:text-6xl
                lg:text-6xl
                xl:text-7xl
                2xl:text-8xl
                leading-[0.95]
                sm:leading-[0.9]
                tracking-[-1px]
                sm:tracking-[-2px]
                lg:tracking-[-3px]
              "
            >
              <span
                className="font-semibold text-(--brown-deep) whitespace-nowrap"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Medical
              </span>

              <br />

              <span
                className="font-light text-(--brown-deep)"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Excellence
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                text-[#4a352c]
                text-[15px]
                sm:text-[16px]
                lg:text-[17px]
                leading-7
                max-w-xl
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
              <a
                href="https://wa.me/919970766313?text=Hello%20AAYUSH%20Hospital,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  sm:w-auto
                  min-w-50
                  lg:min-w-70
                  h-12
                  sm:h-14
                  lg:h-16
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-[#5a3a32]
                  hover:bg-[#4a2f29]
                  text-white
                  px-6
                  sm:px-8
                  lg:px-10
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
                <FaWhatsapp size={18} />
                BOOK APPOINTMENT
              </a>

              {/* BUTTON 2 */}
              <Link href="/services" className="w-full sm:w-auto">
                <button
                  className="
                    w-full
                    sm:w-auto
                    min-w-50
                    lg:min-w-70
                    h-12
                    sm:h-14
                    lg:h-16
                    bg-[#f2f0ed]
                    hover:bg-white
                    text-[#3f2a24]
                    px-6
                    sm:px-8
                    lg:px-10
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
            lg:px-10
            xl:px-16
            2xl:px-20
            pb-6
            sm:pb-10
            max-w-350
            mx-auto
            w-full
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
                  bg-white/20
                    backdrop-blur-md
                    rounded-2xl
                    h-27.5
                    sm:h-31.25
                    lg:h-33.75
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    sm:gap-4
                    shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    border
                    border-white/40
                  "
                >
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                    className="text-[#5a3a32] sm:size-[30px]"
                  />

                  <p
                    className="
                      text-[#4b2d25]
                      text-[14px]
                      sm:text-[15px]
                      lg:text-[16px]
                      font-medium
                      text-center
                      px-2
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