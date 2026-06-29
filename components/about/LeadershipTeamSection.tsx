"use client";

import {
  AtSign,
  Share2,
  ShieldPlus,
} from "lucide-react";
import Image from "next/image";

const leaders = [
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

export default function LeadershipTeamSection() {
  return (
    <section className="bg-[#f5f3ee] py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20 lg:mb-24">

          <h2
            className="
              text-(--brown-deep)
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              leading-tight
              tracking-tight
              font-bold
            "
          >
            The Leadership Team
          </h2>

          <div className="w-20 h-1 bg-[#7a5a24] rounded-full mx-auto mt-5 md:mt-8" />

          <p
            className="
              mt-5
              md:mt-8
              text-(--brown-soft)
              text-[11px]
              md:text-sm
              tracking-[3px]
              uppercase
              font-semibold
            "
          >
            Curating a New Standard of Healthcare Leadership
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {leaders.map((leader, index) => (
            <div
              key={index}
              className="
  flex
  flex-col
  md:flex-row
  items-center
  md:items-start
  text-center
  md:text-left
  gap-8
"
            >

              {/* Icon/Image Card */}
              <div
                className="
    relative
    w-full
    sm:w-44
    md:w-52
    lg:w-60
    aspect-[3/4]
    overflow-hidden
    rounded-2xl
    border
    border-[#e4ded6]
    bg-white
    shrink-0
    hover:shadow-xl
    transition-all
    duration-500
  "
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 220px, 260px"
                  priority={index < 2}
                />
              </div>

              {/* Content */}
              <div>

                <h3
                  className="
                    text-(--brown-deep)
                    text-2xl
                    md:text-3xl
                    lg:text-4xl
                    font-semibold
                    leading-tight
                  "
                >
                  {leader.name}
                </h3>

                <p
                  className="
                    mt-3
                    text-(--brown-soft)
                    text-[11px]
                    md:text-xs
                    tracking-[3px]
                    uppercase
                    font-semibold
                  "
                >
                  {leader.role}
                </p>

                <p
                  className="
                    mt-5
                    text-(--brown-soft)
                    text-md
                    md:text-base
                    leading-7
                    max-w-md
                  "
                >
                  {leader.desc}
                </p>

                {/* <div className="flex justify-center sm:justify-start items-center gap-5 mt-6">
                  <button
                    className="
                      text-[#8d8179]
                      hover:text-(--brown-deep)
                      transition-all
                    "
                  >
                    <AtSign size={22} />
                  </button>

                  <button
                    className="
                      text-[#8d8179]
                      hover:text-(--brown-deep)
                      transition-all
                    "
                  >
                    <Share2 size={22} />
                  </button>
                </div> */}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}