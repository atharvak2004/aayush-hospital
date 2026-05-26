"use client";

import {
  Stethoscope,
  Syringe,
  Baby,
  HeartPulse,
  Brain,
  ScanSearch,
} from "lucide-react";

const specializations = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    desc: "Comprehensive preventive care and diagnostic services for adults of all ages.",
  },
  {
    icon: Syringe,
    title: "Advanced Surgery",
    desc: "State-of-the-art surgical procedures utilizing minimally invasive techniques.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    desc: "Expert pediatric care in a warm, child-friendly environment for your little ones.",
  },
  {
    icon: HeartPulse,
    title: "Cardiology",
    desc: "Comprehensive heart health management from prevention to complex treatments.",
  },
  {
    icon: Brain,
    title: "Neurology",
    desc: "Specialized care for neurological disorders with advanced brain mapping technology.",
  },
  {
    icon: ScanSearch,
    title: "Radiology",
    desc: "High-precision imaging services for accurate and fast clinical diagnosis.",
  },
];
export default function SpecializationsSection() {
  return (
    <section className="bg-[#f3f1ec] py-24">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Heading */}
        <div className="mb-14">
          
          <p
            className="
              uppercase
              tracking-[4px]
              text-(--eyebrow)
              text-[14px]
              font-semibold
              mb-5
            "
          >
            Specializations
          </p>

          <h2
            className="
              text-[52px]
              leading-none
              tracking-[-2px]
              text-(--brown-deep)
              font-bold
            "
          >
            World-Class Medical Care
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {specializations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-[#faf9f7]
                  rounded-3xl
                  p-8
                  min-h-65
                  border
                  border-[#ece7df]
                  hover:-translate-y-1
                  transition-all
                "
              >
                
                {/* Icon Box */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#f7d9cf]
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                    className="text-(var(--deep-brown))"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-2xl
                    leading-tight
                    text-(--brown-deep)
                    font-semibold
                    mb-5
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-(--brown-soft)
                    text-md
                    leading-9
                  "
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}