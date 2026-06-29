"use client"

import { Eye, Clock3, ArrowRight } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="bg-[#f5f3ee] py-24 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        <div
          className="
            grid
            md:grid-cols-2
            gap-8
          "
        >
          
          {/* Mission Card */}
          <div
            className="
              bg-[#fbfaf8]
              rounded-[36px]
              p-10
              lg:p-12
              border
              border-[#efeae3]
              hover:-translate-y-1
              transition-all
            "
          >
            
            {/* Icon */}
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-[#f6d8ce]
                flex
                items-center
                justify-center
              "
            >
              <Clock3
                size={28}
                className="text-(--brown-deep)"
              />
            </div>

            {/* Title */}
            <h2
              className="
                mt-10
                text-(--brown-deep)
                text-[46px]
                leading-none
                tracking-[-2px]
                font-semibold
              "
            >
              Our Mission
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                text-(--brown-soft)
                text-md
                leading-[1.9]
              "
            >
              To redefine healthcare by providing personalized,
              patient-centric treatments that honor the dignity of
              every individual while ensuring that medical excellence
              is always delivered with compassion.
            </p>

            {/* Link */}
            {/* <button
              className="
                mt-10
                flex
                items-center
                gap-3
                text-[#4b2d25]
                text-[17px]
                font-semibold
                hover:gap-4
                transition-all
              "
            >
              Learn about our process

              <ArrowRight size={18} />
            </button> */}
          </div>

          {/* Vision Card */}
          <div
            className="
              bg-[#fbfaf8]
              rounded-[36px]
              p-10
              lg:p-12
              border
              border-[#efeae3]
              hover:-translate-y-1
              transition-all
            "
          >
            
            {/* Icon */}
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-[#f6d58f]
                flex
                items-center
                justify-center
              "
            >
              <Eye
                size={28}
                className="text-(--brown-deep)"
              />
            </div>

            {/* Title */}
            <h2
              className="
                mt-10
                text-(--brown-deep)
                text-[46px]
                leading-none
                tracking-[-2px]
                font-semibold
              "
            >
              Our Vision
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                text-(--brown-soft)
                text-md
                leading-[1.9]
              "
            >
              To become the global gold standard for restorative
              wellness where traditional healing values and modern
              innovation coexist in a sanctuary designed for life-long
              vitality.
            </p>

            {/* Link */}
            {/* <button
              className="
                mt-10
                flex
                items-center
                gap-3
                text-[#4b2d25]
                text-[17px]
                font-semibold
                hover:gap-4
                transition-all
              "
            >
              View our future goals

              <ArrowRight size={18} />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}