"use client";

import {
  AtSign,
  Share2,
} from "lucide-react";

const leaders = [
  {
    name: "Dr. Umesh",
    role: "CHIEF MEDICAL OFFICER",
    desc: "With over 20 years in specialized surgery, Dr. Thorne focuses on procedural precision combined with empathetic recovery strategies. He leads our clinical innovation department.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Vanni",
    role: "HEAD OF WELLNESS DESIGN",
    desc: "Dr. Vane is a pioneer in holistic recovery environments. She ensures that every aspect of the patient journey at AAYUSH is optimized for psychological and physical well-being.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function LeadershipTeamSection() {
  return (
    <section className="bg-[#f5f3ee] py-28 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-24">
          
          <h2
            className="
              text-(--brown-deep)
              text-[52px]
              md:text-[72px]
              leading-none
              tracking-[-3px]
              font-bold
            "
          >
            The Leadership Team
          </h2>

          {/* Underline */}
          <div
            className="
              w-20
              h-1
              bg-[#7a5a24]
              rounded-full
              mx-auto
              mt-8
            "
          />

          {/* Subtitle */}
          <p
            className="
              mt-8
              text-(--brown-soft)
              text-[14px]
              tracking-[4px]
              uppercase
              font-semibold
            "
          >
            Curating a New Standard of Healthcare Leadership
          </p>
        </div>

        {/* Team Grid */}
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
          "
        >
          
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                sm:flex-row
                gap-8
                items-start
              "
            >
              
              {/* Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-4xl
                  min-w-57.5
                  w-57.5
                  h-75
                  bg-[#ddd]
                  shadow-lg
                "
              >
                <img
                  src={leader.image}
                  alt={leader.name}
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
              <div className="pt-2">
                
                {/* Name */}
                <h3
                  className="
                    text-(--brown-deep)
                    text-[38px]
                    leading-none
                    tracking-[-1px]
                    font-semibold
                  "
                >
                  {leader.name}
                </h3>

                {/* Role */}
                <p
                  className="
                    mt-4
                    text-(--brown-soft)
                    text-[12px]
                    tracking-[4px]
                    uppercase
                    font-semibold
                  "
                >
                  {leader.role}
                </p>

                {/* Description */}
                <p
                  className="
                    mt-8
                    text-(--brown-soft)
                    text-md
                    leading-[1.9]
                    max-w-[420px]
                  "
                >
                  {leader.desc}
                </p>

                {/* Icons */}
                <div className="flex items-center gap-5 mt-8">
                  
                  <button
                    className="
                      text-[#8d8179]
                      hover:text-(--brown-deep)
                      transition-all
                      cursor-pointer
                    "
                  >
                    <AtSign size={22} />
                  </button>

                  <button
                    className="
                      text-[#8d8179]
                      hover:text-(--brown-deep)
                      transition-all
                      cursor-pointer
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