"use client";

import { useRef } from "react";

const doctors = [
  {
    name: "Dr. Jonathan Aris",
    role: "CHIEF CARDIOLOGIST",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "HEAD OF SURGERY",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Michael Chen",
    role: "SENIOR PEDIATRICIAN",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Sarah Thompson",
    role: "NEUROLOGY EXPERT",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  },

  // EXTRA DOCTORS
  {
    name: "Dr. Emma Watson",
    role: "ORTHOPEDIC SPECIALIST",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ExpertTeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const isCarousel = doctors.length > 4;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 380 : -380,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f4f2ed] py-24 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          
          <div>
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
              Expert Team
            </p>

            <h2
              className="
                text-[52px]
                leading-none
                tracking-[-2px]
                text-(--brown-deep)
                font-semibold
              "
            >
              Meet Our Specialists
            </h2>
          </div>

          <div className="flex items-center gap-4">
            
            {/* Arrows */}
            {isCarousel && (
              <>
                <button
                  onClick={() => scroll("left")}
                  className="
                    hidden
                    md:flex
                    w-12
                    h-12
                    rounded-full
                    border
                    border-[#d8d2ca]
                    items-center
                    justify-center
                    text-[#4b2d25]
                    hover:bg-white
                    transition-all
                  "
                >
                  ←
                </button>

                <button
                  onClick={() => scroll("right")}
                  className="
                    hidden
                    md:flex
                    w-12
                    h-12
                    rounded-full
                    border
                    border-[#d8d2ca]
                    items-center
                    justify-center
                    text-[#4b2d25]
                    hover:bg-white
                    transition-all
                  "
                >
                  →
                </button>
              </>
            )}

            {/* Button */}
            <button
              className="
                hidden
                md:flex
                items-center
                justify-center
                bg-[#e8e5df]
                hover:bg-[#ddd8d0]
                text-[#2f2b28]
                px-10
                py-4
                rounded-full
                text-[14px]
                tracking-[2px]
                font-semibold
                transition-all
                whitespace-nowrap
              "
            >
              VIEW ALL DOCTORS
            </button>
          </div>
        </div>

        {/* CONDITIONAL LAYOUT */}
        {isCarousel ? (
          
          <div
            ref={scrollRef}
            className="
              flex
              gap-6
              overflow-x-auto
              scroll-smooth
              scrollbar-hide
            "
          >
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} carousel />
            ))}
          </div>

        ) : (
          
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function DoctorCard({
  doctor,
  carousel = false,
}: {
  doctor: any;
  carousel?: boolean;
}) {
  return (
    <div className={carousel ? "min-w-[320px]" : ""}>
      
      {/* Image */}
      <div
        className="
          rounded-2xl
          overflow-hidden
          h-[420px]
          bg-gray-200
        "
      >
        <img
          src={doctor.image}
          alt={doctor.name}
          className="
            w-full
            h-full
            object-cover
            hover:scale-105
            transition-all
            duration-500
          "
        />
      </div>

      {/* Content */}
      <div className="mt-5">
        
        <h3
          className="
            text-[32px]
            leading-tight
            text-(--brown-deep)
            font-semibold
          "
        >
          {doctor.name}
        </h3>

        <p
          className="
            mt-2
            text-(--brown-soft)
            text-[14px]
            tracking-[2px]
            uppercase
            font-medium
          "
        >
          {doctor.role}
        </p>
      </div>
    </div>
  );
}