"use client";

import Image from "next/image";

export default function ServicesHeroSection() {
  return (
    <section className="bg-[#f5f3ee] py-24 lg:py-32 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div
          className="
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >
          
          {/* LEFT CONTENT */}
          <div className="max-w-[520px]">
            
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                px-5
                py-2
                rounded-full
                bg-[#f5d89f]
                text-[#8a6329]
                text-[12px]
                tracking-[3px]
                uppercase
                font-semibold
                mb-10
              "
            >
              Excellence in Care
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
              Our Medical
              <br /> 
              Services
            </h1>

            {/* Description */}
            <p
              className="
                mt-10
                text-(--brown-soft)
                text-md
                leading-[1.9]
                max-w-130
              "
            >
              At AAYUSH, we redefine clinical excellence through a
              curated sanctuary of wellness, integrating advanced
              medical science with holistic, restorative patient care.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Main Image */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                w-full
                max-w-[520px]
                h-[650px]
                shadow-2xl
              "
            >
              <Image
                src="/Aayush_About_Hero1.JPG"
                alt="Luxury Hospital Corridor"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Floating Quote Card */}
            <div
              className="
                absolute
                bottom-[-30px]
                left-[-20px]
                bg-white
                rounded-[20px]
                shadow-2xl
                px-7
                py-6
                max-w-[280px]
                border
                border-[#f0ece6]
              "
            >
              
              {/* Quote */}
              <p
                className="
                  text-(--brown-deep)
                  text-[17px]
                  leading-[1.8]
                  font-semibold
                "
              >
                "Healing begins in the mind and heart before it reaches the body."
              </p>

              {/* Small Text */}
              <p
                className="
                  mt-5
                  text-(--brown-soft)
                  text-[10px]
                  tracking-[3px]
                  uppercase
                  font-medium
                "
              >
                Medical Director's Note
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}