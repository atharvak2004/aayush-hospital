"use client";
import {
  Stethoscope,
  Syringe,
  HeartPulse,
  Brain,
  Baby,
  ScanSearch,
} from "lucide-react";

const departments = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    desc: "Comprehensive preventative and acute care for patients of all ages, focused on long-term vitality.",
    large: true,
  },
  {
    icon: Syringe,
    title: "Advanced Surgery",
    desc: "Minimally invasive techniques for faster recovery and precise outcomes.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    desc: "Expert, gentle care for your little ones in a kid-friendly environment.",
  },
  {
    icon: HeartPulse,
    title: "Cardiology",
    desc: "Comprehensive heart health management and rhythm diagnostic services.",
  },
  {
    icon: Brain,
    title: "Neurology",
    desc: "Advanced brain mapping and treatment for complex neurological conditions using next-gen neuroimaging.",
    large: true,
  },
  {
    icon: ScanSearch,
    title: "Radiology",
    desc: "High-precision digital imaging for accurate and fast diagnostics.",
  },
];

export default function ClinicalDepartmentsSection() {
  return (
    <section className="bg-[#f5f3ee] py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="mb-14">
          
          <h2
            className="
              text-(--brown-deep)
              text-[52px]
              md:text-[52px]
              leading-none
              tracking-[-2px]
              font-bold
            "
          >
            Clinical Departments
          </h2>

          <p
            className="
              mt-5
              text-(--brown-soft)
              text-md
              leading-8
            "
          >
            Expert care across specialized medical disciplines.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            md:grid-cols-12
            gap-5
          "
        >
          
          {departments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  bg-[#fbfaf8]
                  rounded-[24px]
                  border
                  border-[#eee9e2]
                  p-8
                  hover:-translate-y-1
                  transition-all
                  ${
                    item.large
                      ? "md:col-span-6"
                      : "md:col-span-3"
                  }
                `}
              >
                
                {/* Icon */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#f6e3dc]
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="text-[#5b342b]"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-(--brown-deep)
                    text-4xl
                    leading-tight
                    tracking-[-1px]
                    font-semibold
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5
                    text-(--brown-soft)
                    text-md
                    leading-[1.9]
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