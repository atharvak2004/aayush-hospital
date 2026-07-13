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
  CheckCircle2,
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
    image: "/Preventive Healthcare.png",
    title: "Preventive Healthcare",
    desc: "Routine health screenings, wellness assessments, and preventive care for long-term health.",
  },
  {
    image: "/OzoneInjection.png",
    title: "Ozone Treatments",
    large: true,
    desc: "Innovative ozone-based treatments designed to support healing, reduce inflammation, and improve recovery.",
    points: [
      { title: "EBOO Therapy", desc: "Ozonates blood outside the body" },
      { title: "Local Ozone Infiltration", desc: "Targeted ozone injections for pain" },
      { title: "Ozone Bagging", desc: "Ozone gas applied to limbs" },
    ],
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
    <section className="bg-[#f5f3ee] py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <h2
            className="
              text-(--brown-deep)
              text-[32px]
              sm:text-[40px]
              md:text-[52px]
              leading-none
              tracking-[-1px]
              md:tracking-[-2px]
              font-bold
            "
          >
            Clinical Departments
          </h2>

          <p
            className="
              mt-4
              sm:mt-5
              text-(--brown-soft)
              text-sm
              sm:text-md
              leading-7
              sm:leading-8
            "
          >
            Expert care across specialized medical disciplines.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-12
            gap-4
            sm:gap-5
          "
        >
          {departments.map((item, index) => (
            <div
              key={index}
              className={`
                bg-[#fbfaf8]
                rounded-[20px]
                sm:rounded-3xl
                border
                border-[#eee9e2]
                p-5
                sm:p-6
                md:p-8
                hover:-translate-y-1
                transition-all
                text-center
                ${item.large ? "sm:col-span-2 md:col-span-6" : "md:col-span-3"}
              `}
            >
              <div
                className="
                  relative
                  h-48
                  sm:h-60
                  md:h-72
                  rounded-xl
                  sm:rounded-2xl
                  overflow-hidden
                  mb-6
                  sm:mb-8
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={
                    item.large
                      ? "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                      : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  }
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3
                className="
                  text-(--brown-deep)
                  text-xl
                  sm:text-2xl
                  md:text-4xl
                  leading-tight
                  tracking-[-0.5px]
                  md:tracking-[-1px]
                  font-semibold
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3
                  sm:mt-4
                  md:mt-5
                  text-(--brown-soft)
                  text-sm
                  sm:text-md
                  leading-[1.7]
                  md:leading-[1.9]
                "
              >
                {item.desc}
              </p>

              {/* Points */}
              {item.points && item.points.length > 0 && (
                <ul
                  className="
                    mt-4
                    sm:mt-5
                    flex
                    flex-col
                    gap-2
                    sm:gap-2.5
                    text-left
                    max-w-md
                    mx-auto
                  "
                >
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        items-start
                        gap-2
                      "
                    >
                      <CheckCircle2
                        className="
                          w-4
                          h-4
                          sm:w-5
                          sm:h-5
                          mt-0.5
                          text-(--brown-deep)
                          shrink-0
                        "
                      />
                      <div>
                        <p
                          className="
                            text-(--brown-deep)
                            text-sm
                            sm:text-md
                            font-medium
                            leading-relaxed
                          "
                        >
                          {point.title}
                        </p>
                        <p
                          className="
                            text-(--brown-soft)
                            text-xs
                            sm:text-sm
                            leading-relaxed
                          "
                        >
                          {point.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}