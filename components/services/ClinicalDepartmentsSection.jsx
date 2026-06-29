"use client";
import {
  Stethoscope,
  Syringe,
  HeartPulse,
  Brain,
  Baby,
  ScanSearch,
  Scissors,
  Activity,
  Bone,
  Leaf,
  ShieldPlus,
  Accessibility,
} from "lucide-react";
import Image from "next/image";

const departments = [
  {
    image: "/general mediciene.png",
    title: "General Medicine",
    desc: "Comprehensive diagnosis, treatment, and preventive healthcare for patients of all ages.",
  },
  {
    image: "/Laparoscopic Surgery.png",
    title: "General & Laparoscopic Surgery",
    desc: "Advanced surgical care using minimally invasive techniques for faster recovery and better outcomes.",
  },
  {
    image: "/Advanced Physiotherapy.png",
    title: "Advanced Physiotherapy & Rehabilitation",
    desc: "Personalized rehabilitation programs to restore mobility, strength, and overall physical function.",
    large: true,
  },
  {
    image: "/Pain Management.png",
    title: "DSCB Injections & Pain Management",
    desc: "Targeted pain relief solutions and injection therapies for chronic musculoskeletal and spine conditions.",
    large: true,
  },
  {
    image: "/Medical Orthopaedics.png",
    title: "Medical Orthopaedics",
    desc: "Expert diagnosis and treatment of bone, joint, muscle, and ligament disorders.",
  },
  {
    image: "/Ozone Therapy.png",
    title: "Ozone Therapy",
    desc: "Innovative ozone-based treatments designed to support healing, reduce inflammation, and improve recovery.",
  },
  {
    image: "/Preventive Healthcare.png",
    title: "Preventive Healthcare",
    desc: "Routine health screenings, wellness assessments, and preventive care for long-term health.",
    large: true,
  },
  {
    image: "/Non-Surgical Spine Recovery.png",
    title: "Advanced Non-Surgical Spine Recovery Program",
    desc: "Comprehensive non-surgical treatments and rehabilitation plans for lasting spine health and pain relief.",
    large: true,
  },
];


export default function ClinicalDepartmentsSection() {
  return (
    <section className="bg-[#f5f3ee] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14">

          <h2
            className="
              text-(--brown-deep)
              text-[52px]
              md:text-[52px]
              leading-none
              tracking-[-2px]
              font-bold
            "
          >
            Clinical Departments
          </h2>

          <p
            className="
              mt-5
              text-(--brown-soft)
              text-md
              leading-8
            "
          >
            Expert care across specialized medical disciplines.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            md:grid-cols-12
            gap-5
          "
        >

          {departments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  bg-[#fbfaf8]
                  rounded-[24px]
                  border
                  border-[#eee9e2]
                  p-8
                  hover:-translate-y-1
                  transition-all
                  text-center
                  ${item.large
                    ? "md:col-span-6"
                    : "md:col-span-3"
                  }
                `}
              >

                <div
                  className={`
        relative
        h-72
        rounded-2xl
        overflow-hidden
        mb-8
    `}
                >
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
                    text-(--brown-deep)
                    text-4xl
                    leading-tight
                    tracking-[-1px]
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
            );
          })}
        </div>
      </div>
    </section>
  );
}