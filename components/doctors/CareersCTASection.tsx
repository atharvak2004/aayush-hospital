"use client";

import Image from "next/image";

export default function CareersCTASection() {
  return (
    <section className="bg-[#f5f3ee] py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div
          className="
            grid
            lg:grid-cols-2
            overflow-hidden
            rounded-[30px]
            shadow-xl
          "
        >
          
          {/* LEFT CONTENT */}
          <div
            className="
              bg-[#6a463b]
              px-10
              lg:px-16
              py-16
              flex
              flex-col
              justify-center
            "
          >
            
            {/* Heading */}
            <h2
              className="
                text-white
                text-[52px]
                md:text-[52px]
                leading-[0.95]
                tracking-[-2px]
                font-bold
                max-w-[480px]
              "
            >
              Elevate Your Career in Healthcare
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                text-white/70
                text-md
                leading-[1.9]
                max-w-[470px]
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
    mt-10
    w-fit
    px-8
    h-13
    rounded-full
    bg-[#f0ebe7]
    text-[#8d8179]
    text-[14px]
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
          <div className="relative min-h-[500px]">
            
            <Image
              src="/Aayush_Doctors_career.png"
              alt="Healthcare Team"
              fill
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-black/10
              "
            />

            {/* Bottom Labels */}
            <div
              className="
                absolute
                bottom-6
                left-0
                right-0
                flex
                justify-center
                gap-10
                px-6
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
                    text-[10px]
                    tracking-[3px]
                    uppercase
                    font-medium
                    text-center
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