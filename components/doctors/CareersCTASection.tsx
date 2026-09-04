"use client";

import Image from "next/image";

export default function CareersCTASection() {
  return (
    <section className="bg-[#f5f3ee] py-14 sm:py-20 lg:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div
          className="
            grid
            lg:grid-cols-2
            overflow-hidden
            rounded-[22px]
            sm:rounded-[26px]
            lg:rounded-[30px]
            shadow-xl
          "
        >

          {/* LEFT CONTENT */}
          <div
            className="
              bg-[#6a463b]
              px-6
              sm:px-8
              lg:px-16
              py-10
              sm:py-12
              lg:py-16
              flex
              flex-col
              justify-center
            "
          >

            {/* Heading */}
            <h2
              className="
                text-white
                text-[30px]
                sm:text-[38px]
                md:text-[46px]
                lg:text-[52px]
                leading-[1.05]
                sm:leading-[0.95]
                tracking-[-1px]
                sm:tracking-[-1.5px]
                lg:tracking-[-2px]
                font-bold
                max-w-full
                sm:max-w-[480px]
              "
            >
              Elevate Your Career in Healthcare
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                sm:mt-6
                lg:mt-8
                text-white/70
                text-sm
                sm:text-base
                leading-7
                sm:leading-8
                lg:leading-[1.9]
                max-w-full
                sm:max-w-[470px]
              "
            >
              We are always seeking passionate medical professionals
              who share our vision of compassionate, world-class
              healthcare. Join our elite team of specialists at
              Aayush Hospital.
            </p>

            {/* Button */}
            <button
              disabled
              className="
    mt-6
    sm:mt-8
    lg:mt-10
    w-fit
    px-6
    sm:px-8
    h-11
    sm:h-12
    lg:h-13
    rounded-full
    bg-[#f0ebe7]
    text-[#8d8179]
    text-[13px]
    sm:text-[14px]
    font-semibold
    cursor-not-allowed
    opacity-75
    select-none
  "
            >
              Coming Soon
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[500px] ">
            <Image
              src="/Aayush_Doctors_career-1.png"
              alt="Healthcare Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 z-50" ></div>


            {/* Bottom Labels */}
            <div
              className="
                absolute
                bottom-4
                sm:bottom-6
                left-0
                right-0
                flex
                flex-wrap
                justify-center
                gap-x-4
                gap-y-2
                sm:gap-x-6
                lg:gap-x-10
                px-3
                sm:px-6
                z-60
              "
            >

              {[
                "PATIENT SUPPORT",
                "MEDICAL EXCELLENCE",
                "ADVANCED CARE",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    text-white/80
                    text-[9px]
                    sm:text-[10px]
                    tracking-[2px]
                    sm:tracking-[3px]
                    uppercase
                    font-medium
                    text-center
                    whitespace-nowrap
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}