"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "The level of care I received at Aayush Hospital was exceptional. From the moment I walked in, I felt I was in a place that truly cared about my recovery. The doctors are brilliant and the environment is incredibly calming.",
    name: "Robert Vanderwall",
    role: "CARDIAC PATIENT",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The doctors and nursing staff were incredibly compassionate throughout my treatment. Every step of the process felt smooth, professional, and reassuring.",
    name: "Priya Sharma",
    role: "SURGERY PATIENT",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section className="bg-[#f4f2ed] py-16 sm:py-24 lg:py-32 overflow-hidden">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Quote Icon */}
        <div
          className="
    text-[#d0a24a]
    text-5xl
    sm:text-6xl
    lg:text-7xl
    leading-none
    font-serif
    mb-6
    sm:mb-8
    lg:mb-10
  "
        >
          &rdquo;
        </div>

        {/* Quote */}
        <blockquote
          key={active}
          className="
    text-(--brown-deep)
    text-2xl
    sm:text-2xl
    md:text-3xl
    lg:text-4xl
    leading-snug
    sm:leading-[1.3]
    tracking-[-0.5px]
    sm:tracking-[-1px]
    font-light
    max-w-4xl
    mx-auto
    animate-[fadeIn_0.5s_ease]
  "
        >
          "{testimonial.quote}"
        </blockquote>

        {/* User */}
        <div className="mt-8 sm:mt-10 lg:mt-14 flex flex-col items-center">

          {/* Avatar */}
          <div
            className="
              w-14
              h-14
              sm:w-16
              sm:h-16
              rounded-full
              overflow-hidden
              mb-4
              sm:mb-5
            "
          >
            {/* <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            /> */}
          </div>

          {/* Name */}
          <h3
            className="
              text-(--brown-deep)
              text-xl
              sm:text-2xl
              font-semibold
            "
          >
            {testimonial.name}
          </h3>

          {/* Role */}
          <p
            className="
              mt-1
              text-(--brown-soft)
              text-[11px]
              sm:text-[12px]
              tracking-[2px]
              sm:tracking-[3px]
              uppercase
              font-medium
            "
          >
            {testimonial.role}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6 sm:mt-8 lg:mt-10">

          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                rounded-full
                transition-all
                duration-300
                ${active === index
                  ? "w-10 h-2 bg-[#c79a43]"
                  : "w-2 h-2 bg-[#d9cfc5]"
                }
              `}
            />
          ))}
        </div>
      </div>


    </section>
  );
}