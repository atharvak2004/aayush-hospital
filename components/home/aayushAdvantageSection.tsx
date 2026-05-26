"use client";

import {
  Users,
  MonitorSmartphone,
  HeartHandshake,
  Headphones,
} from "lucide-react";

const advantages = [
  {
    icon: Users,
    title: "Experienced Staff",
    desc: "A team of globally trained specialists dedicated to your well-being.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern Equipment",
    desc: "The latest medical technology for precise diagnosis and treatment.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    desc: "Personalized care plans tailored to individual needs and comfort.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Round-the-clock emergency services and patient assistance.",
  },
];

export default function AayushAdvantageSection() {
  return (
    <section
      className="
        py-24
        overflow-hidden
        bg-linear-to-r
        from-[#4a241d]
        via-[#5a2d23]
        to-[#6a3a2c]
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* LEFT SIDE */}
          <div>

            {/* Small Title */}
            <p
              className="
                uppercase
                tracking-[4px]
                text-white/70
                text-[14px]
                font-semibold
                mb-6
              "
            >
              The Aayush Advantage
            </p>

            {/* Heading */}
            <h2
              className="
                text-white
                text-[52px]
                leading-[1.05]
                tracking-[-2px]
                font-bold
                max-w-155
              "
            >
              Setting New Standards in Healthcare

              <span className="block font-bold mt-2">

              </span>
            </h2>

            {/* Features */}
            <div className="mt-14 space-y-10">

              {advantages.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-5"
                  >

                    {/* Icon */}
                    <div
                      className="
                        min-w-[56px]
                        h-14
                        rounded-full
                        bg-white/10
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                        className="text-white"
                      />
                    </div>

                    {/* Content */}
                    <div>

                      <h3
                        className="
                          text-white
                          text-2xl
                          leading-none
                          font-semibold
                          mb-3
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          text-white/65
                          text-md
                          leading-8
                          max-w-[500px]
                        "
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <div
              className="
                rounded-[36px]
                overflow-hidden
                h-full
               
              "
            >
              <img
                src="/Home_whyChooseAayush.png"
                alt="Modern Operation Theatre"
                className="
                  w-full
                  h-full
                  object-cover
                  grayscale
                  brightness-75

                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}