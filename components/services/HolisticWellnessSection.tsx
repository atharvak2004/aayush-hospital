"use client";

import {
  Check,
} from "lucide-react";

const features = [
  "Bespoke Wellness Integration Plans",
  "Therapeutic Environment Design",
  "Post-Recovery Support Systems",
];

export default function HolisticWellnessSection() {
  return (
    <section className="bg-[#f5f3ee] py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          
          {/* LEFT IMAGE */}
          <div>
            
            <div
              className="
                relative
                overflow-hidden
                rounded-[26px]
                shadow-xl
                h-[420px]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80"
                alt="Holistic Wellness Center"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[560px]">
            
            {/* Small Label */}
            <p
              className="
                uppercase
                tracking-[4px]
                text-(--eyebrow)
                text-[12px]
                font-semibold
                mb-7
              "
            >
              The Integrative Path
            </p>

            {/* Heading */}
            <h2
              className="
                text-(--brown-deep)
                text-[52px]
                md:text-[64px]
                leading-[1]
                tracking-[-2px]
                font-bold
              "
            >
              Wholistic Wellness Centers
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
              We believe that true healing happens when modern science
              meets centuries of wisdom. Our Holistic Wellness Centers
              offer a bespoke blend of nutritional counseling,
              mindfulness practices, and restorative therapies to
              complement your clinical treatment plan.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  
                  {/* Icon */}
                  <div
                    className="
                      min-w-[28px]
                      h-7
                      rounded-full
                      bg-[#f5d8cf]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Check
                      size={14}
                      strokeWidth={3}
                      className="text-(--brown-deep)"
                    />
                  </div>

                  {/* Text */}
                  <p
                    className="
                      text-(--brown-deep)
                      text-[16px]
                      font-medium
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}