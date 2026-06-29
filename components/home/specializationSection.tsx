"use client";

import Image from "next/image";

const specializations = [
  {
    image: "/general mediciene.png",
    title: "General Medicine",
    desc: "Comprehensive preventive care and diagnostic services for adults of all ages.",
  },
  {
    image: "/Laparoscopic Surgery.png",
    title: "Advanced Surgery",
    desc: "State-of-the-art surgical procedures utilizing minimally invasive techniques.",
  },
  {
    image: "/Non-Surgical Spine Recovery.png",
    title: "Advanced Physiotherapy & Rehab",
    desc: "Expert rehabilitation programs to improve mobility and reduce pain.",
  },
  {
    image: "/Proctology.png",
    title: "Proctology",
    desc: "Advanced treatment for piles, fissures, fistulas, and colorectal conditions.",
  },
  {
    image: "/Ozone Therapy.png",
    title: "DSCB & Ozone Treatment",
    desc: "Regenerative therapies that support healing and faster recovery.",
  },
  {
    image: "/Ayurveda & Homeopathy.png",
    title: "Ayurveda & Homeopathy",
    desc: "Natural and holistic treatments for long-term health and wellness.",
  },
];

export default function SpecializationsSection() {
  return (
    <section className="bg-[#f3f1ec] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="mb-14">
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
            Specializations
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
            World-Class Medical Care
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {specializations.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#faf9f7]
                rounded-[24px]
                border
                border-[#ece7df]
                p-8
                hover:-translate-y-1
                transition-all
                text-center
              "
            >
              {/* Image */}
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3
                className="
                  text-4xl
                  leading-tight
                  tracking-[-1px]
                  text-(--brown-deep)
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
          ))}
        </div>
      </div>
    </section>
  );
}