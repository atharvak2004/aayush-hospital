"use client";

import { SetStateAction, useState } from "react";
import {
  ShieldCheck,
  Clock3,
  CarFront,
  ClipboardList,
} from "lucide-react";

const faqItems = [
  {
    icon: ShieldCheck,
    title: "Insurance Partners",
    answer:
      "We work with most major insurance providers for faster approvals and seamless patient support.",
  },
  {
    icon: Clock3,
    title: "Visiting Hours",
    answer:
      "General visiting hours are from 10:00 AM to 8:00 PM. ICU timings may vary based on hospital policy.",
  },
  {
    icon: CarFront,
    title: "Parking & Valet",
    answer:
      "Secure parking and valet services are available for patients and visitors throughout the day.",
  },
  {
    icon: ClipboardList,
    title: "Patient Records",
    answer:
      "Patients can request digital medical records securely through the hospital support desk.",
  },
];

export default function FAQQuickLinksSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedCard((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f5f3ee] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-6
            mb-14
          "
        >
          <div>
            <h2
              className="
                text-(--brown-deep)
                text-[38px]
                md:text-[52px]
                leading-none
                tracking-[-2px]
                font-bold
              "
            >
              Common Questions
            </h2>

            <p
              className="
                mt-5
                text-(--brown-soft)
                text-[15px]
                md:text-md
                leading-7
              "
            >
              Tap each card to reveal quick answers for your visit.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {faqItems.map((item, index) => {
            const Icon = item.icon;
            const isFlipped = flippedCard === index;

            return (
              <div
                key={index}
                className="perspective-[1200px]"
                onClick={() => handleFlip(index)}
              >
                <div
                  className={`
                    relative
                    w-full
                    aspect-square
                    transition-transform
                    duration-700
                    cursor-pointer
                    [transform-style:preserve-3d]
                    ${isFlipped ? "rotate-y-180" : ""}
                  `}
                >
                  {/* Front Side */}
                  {/* Front Side */}
                  <div
                    className="
    absolute
    inset-0
    bg-[#fbfaf8]
    border
    border-[#ece7df]
    rounded-[26px]
    p-7
    flex
    flex-col
    items-center
    justify-center
    text-center
    shadow-sm
    [backface-visibility:hidden]
  "
                  >
                    {/* Icon */}
                    <div
                      className="
      w-16
      h-16
      rounded-2xl
      bg-[#f6ead1]
      flex
      items-center
      justify-center
      mb-6
    "
                    >
                      <Icon
                        size={28}
                        className="text-[#8a6329]"
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="
      text-(--brown-deep)
      text-[22px]
      font-semibold
      leading-snug
    "
                    >
                      {item.title}
                    </h3>

                    {/* Know More */}
                    <p
                      className="
      mt-4
      text-[#8a6329]
      text-[13px]
      font-semibold
      tracking-[2px]
      uppercase
      transition-all
    "
                    >
                      Know More →
                    </p>
                  </div>

                  {/* Back Side */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[26px]
                      bg-[#4a241d]
                      text-white
                      p-7
                      flex
                      items-center
                      justify-center
                      text-center
                      shadow-xl
                      rotate-y-180
                      backface-hidden
                    "
                  >
                    <p
                      className="
                        text-[15px]
                        md:text-[16px]
                        leading-7
                        font-medium
                      "
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}