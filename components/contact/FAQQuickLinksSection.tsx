"use client";

import {
  ShieldCheck,
  Clock3,
  CarFront,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

const faqItems = [
  {
    icon: ShieldCheck,
    title: "Insurance Partners",
  },
  {
    icon: Clock3,
    title: "Visiting Hours",
  },
  {
    icon: CarFront,
    title: "Parking & Valet",
  },
  {
    icon: ClipboardList,
    title: "Patient Records",
  },
];

export default function FAQQuickLinksSection() {
  return (
    <section className="bg-[#f5f3ee] py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Top Header */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-8
            mb-14
          "
        >
          
          {/* Left Content */}
          <div>
            
            <h2
              className="
                text-(--brown-deep)
                text-[42px]
                md:text-[52px]
                leading-none
                tracking-[-2px]
                font-semibold
              "
            >
              Common Questions
            </h2>

            <p
              className="
                mt-5
                text-(--brown-soft)
                text-md
                leading-8
              "
            >
              Find quick answers to help guide your visit.
            </p>
          </div>

          {/* Right Link */}
          <button
            className="
              flex
              items-center
              gap-3
              text-(--brown-deep)
              text-[16px]
              font-semibold
              hover:gap-4
              transition-all
              w-fit
            "
          >
            View All FAQs

            <ArrowRight size={16} />
          </button>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
          "
        >
          
          {faqItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className="
                  bg-[#fbfaf8]
                  rounded-[22px]
                  border
                  border-[#ece7df]
                  h-[110px]
                  px-7
                  flex
                  items-center
                  gap-5
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all
                  text-left
                "
              >
                
                {/* Icon */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#f6ead1]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={22}
                    className="text-[#8a6329]"
                  />
                </div>

                {/* Title */}
                <span
                  className="
                    text-(--brown-deep)
                    text-[20px]
                    leading-tight
                    font-semibold
                  "
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}