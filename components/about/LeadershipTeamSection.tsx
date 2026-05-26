"use client";

import {
  AtSign,
  Share2,
  ShieldPlus,
} from "lucide-react";

const leaders = [
  {
    name: "Dr. Umesh Jaiswal",
    role: "M.S. General Surgery",
    desc: "With extensive experience in General Surgery, Dr. Umesh Jaiswal specializes in delivering advanced surgical care with precision and patient-centered treatment approaches. He is dedicated to ensuring safe procedures and effective recovery for every patient.",
  },
  {
    name: "Dr. Pradisha Jaiswal",
    role: "M.P.T. Neurology",
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
                sm:flex-row
                items-center
                sm:items-start
                text-center
                sm:text-left
                gap-6
                lg:gap-8
              "
            >

              {/* Icon/Image Card */}
              <div
                className="
                  rounded-2xl
                  h-36
                  w-36
                  md:h-44
                  md:w-44
                  lg:h-80
                  lg:w-52
                  bg-white
                  flex
                  items-center
                  justify-center
                  border
                  border-[#e4ded6]
                  hover:shadow-lg
                  transition-all
                  duration-500
                  shrink-0
                "
              >
                <ShieldPlus
                  className="
                    w-14
                    h-14
                    md:w-20
                    md:h-20
                    text-[#4b2d25]
                  "
                  strokeWidth={1}
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

                <div className="flex justify-center sm:justify-start items-center gap-5 mt-6">
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
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}