"use client";

import { useRef } from "react";
import { Stethoscope } from "lucide-react";
import Image from "next/image";
import {
  UserRound,
  HeartPulse,
  BriefcaseMedical,
  ShieldPlus
} from "lucide-react";
const doctors = [
  {
    name: "Dr. Umesh Jaiswal",
    role: "M.S. General Surgery",
    image: "/Dr. Umesh Jaiswal.png",
    desc: "With extensive experience in General Surgery, Dr. Umesh Jaiswal specializes in delivering advanced surgical care with precision and patient-centered treatment approaches. He is dedicated to ensuring safe procedures and effective recovery for every patient.",
  },
  {
    name: "Dr. Pradisha Jaiswal",
    role: "M.P.T. Neurology",
    image: "/Dr. Pradisha Jaiswal.png",
    desc: "Dr. Pradisha Jaiswal specializes in Neurological Physiotherapy, focusing on rehabilitation and improving the quality of life for patients with neurological conditions. She is committed to personalized therapy plans that promote recovery, mobility, and overall well-being.",
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
                font-bold
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
            {/* <button
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
            </button> */}
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

      {/* Doctor Icon */}
      <div
        className="
    relative
    w-full
    aspect-[3/4]
    overflow-hidden
    rounded-2xl
    border
    border-[#e4ded6]
    bg-white
    hover:shadow-lg
    transition-all
    duration-500
  "
      >
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes={
            carousel
              ? "(max-width:768px) 320px, 360px"
              : "(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          }
          priority
        />
      </div>

      {/* Content */}
      <div className="mt-5">

        <h3
          className="
            text-2xl
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