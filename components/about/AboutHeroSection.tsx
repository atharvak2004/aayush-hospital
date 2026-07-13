"use client";

import Image from "next/image";
import CountUp from "react-countup";
export default function AboutHeroSection() {
  return (
    <section className="bg-[#f5f3ee] py-24 lg:py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* LEFT CONTENT */}
          <div className="max-w-130">

            {/* Small Tag */}
            <div
              className="
                inline-flex
                items-center
                px-5
                py-2
                rounded-full
                bg-[#FED7CA]
                text-[#795C51]
                text-[12px]
                tracking-[3px]
                uppercase
                font-semibold
                mb-10
              "
            >
              Our Legacy
            </div>

            {/* Heading */}
            <h1
              className="
                text-(--brown-deep)
                text-[58px]
                md:text-[74px]
                leading-[0.95]
                tracking-[-3px]
                font-bold
              "
            >
              Healing with
              <br />
              Grace
            </h1>

            {/* Description */}
            <p
              className="
                mt-10
                text-(--brown-soft)
                text-lg
                leading-[1.9]
              "
            >
              For over a decade, AAYUSH HOSPITAL has been a curated
              sanctuary for restorative health. Our 10-year legacy is
              built on the intersection of advanced clinical precision
              and a deeply compassionate approach to patient care.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-16 mt-14">

              {/* Stat 1 */}
              <div>
                <h3
                  className="
        text-(--brown-deep)
        text-[42px]
        font-bold
        leading-none
      "
                >
                  <CountUp
                    end={15}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h3>

                <p
                  className="
        mt-3
        text-[#9a8f88]
        text-[12px]
        tracking-[3px]
        uppercase
        font-semibold
      "
                >
                  Years of Excellence
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <h3
                  className="
        text-(--brown-deep)
        text-[42px]
        font-bold
        leading-none
      "
                >
                  <CountUp
                    end={50}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  K+
                </h3>

                <p
                  className="
        mt-3
        text-[#9a8f88]
        text-[12px]
        tracking-[3px]
        uppercase
        font-semibold
      "
                >
                  Lives Touched
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-75 md:h-125 lg:h-162.5">
            <div
              className="
      relative
      overflow-hidden
      rounded-4xl
      w-full
      h-full
      shadow-xl
    "
            >
              <Image
                src="/Aayush_About_hero2.png"
                alt="Luxury Hospital Interior"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}