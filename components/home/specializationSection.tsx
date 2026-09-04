"use client";
import { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
    points: [
      {
        title: "General Surgery",
        desc: "Comprehensive surgical care services",
      },
      {
        title: "Laparoscopic Surgery",
        desc: "Minimally invasive surgical procedures",
      },
      {
        title: "Para-Surgical Procedures",
        desc: "Advanced minor surgical treatments",
      },
      {
        title: "Kshar Sutra Treatment",
        desc: "Ayurvedic fistula treatment method",
      },
      {
        title: "Proctological Surgeries",
        desc: "Expert anorectal surgical care",
      },
    ],
  },
  {
    image: "/Non-Surgical Spine Recovery.png",
    title: "Advanced Physiotherapy & Rehab",
    desc: "Expert rehabilitation programs to improve mobility and reduce pain.",
    points: [
      {
        title: "Ortho Physiotherapy",
        desc: "Restores joint mobility effectively",
      },
      {
        title: "Neuro Physiotherapy",
        desc: "Improves neurological movement function",
      },
      {
        title: "Sports Physiotherapy",
        desc: "Accelerates sports injury recovery",
      },
      {
        title: "Geriatric Physiotherapy",
        desc: "Enhances senior mobility safely",
      },
      {
        title: "Rehabilitation",
        desc: "Supports complete functional recovery",
      },
      {
        title: "Specialised Spine Management Program",
        desc: "Relieves chronic spine pain",
      },
      {
        title: "Robospine Spinal Decompression Treatment",
        desc: "Non-surgical spinal decompression therapy",
      },
      {
        title: "Various Modalities Like IFT, U-TENS, Shockwave Therapy",
        desc: "Advanced pain relief therapies",
      },
    ],
  },
  {
    image: "/Proctology.png",
    title: "Proctology",
    desc: "Advanced treatment for piles, fissures, fistulas, and colorectal conditions.",
    points: [
      {
        title: "Piles, Fissure & Fistula Surgery",
        desc: "Advanced anorectal surgical care",
      },
      {
        title: "Laser Surgery",
        desc: "Minimally invasive laser treatment",
      },
      {
        title: "Proctoscopy",
        desc: "Accurate rectal health examination",
      },
      {
        title: "Ozone Therapy",
        desc: "Promotes healing and recovery",
      },
      {
        title: "Kshar Sutra Surgery",
        desc: "Effective Ayurvedic fistula treatment",
      },
      {
        title: "Ayurvedic Treatment for Rectal Disorders",
        desc: "Natural care for rectal conditions",
      },
    ],
  },
  {
    image: "/OzoneInjection.png",
    title: "DSCB & Ozone Treatments",
    desc: "Regenerative therapies that support healing and faster recovery.",
    points: [
      {
        title: "Distal Sodium Channel Blockers",
        desc: "Targets chronic nerve pain",
      },
      {
        title: "EBOO Therapy",
        subpoints: ["Extracorporeal Blood", "Ozonation & Oxygenation"],
        desc: "Advanced blood purification therapy",
      },
      {
        title: "Ozone Wound Bagging",
        desc: "Promotes faster wound healing",
      },
      {
        title: "Local Ozone Infiltration",
        desc: "Reduces pain and inflammation",
      },
      {
        title: "ION RPR",
        desc: "Supports tissue regeneration",
      },
      {
        title: "Prolotherapy",
        desc: "Strengthens ligaments and tendons",
      },
      {
        title: "Chelation Therapy",
        desc: "Removes harmful heavy metals",
      },
    ],
  },
  {
    image: "/AyurvedaHomeopathy.png",
    title: "Ayurveda & Homeopathy",
    desc: "Natural and holistic treatments for long-term health and wellness.",
  },
];

function SpecializationPoints({ points }: { points?: Array<{ title: string; desc: string; subpoints?: string[] }> }) {
  if (!points || points.length === 0) return null;
  return (
    <ul
      className="
        mt-4
        flex
        flex-col
        gap-2.5
        text-left
        max-w-md
        mx-auto
      "
    >
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle2
            className="
              w-5
              h-5
              mt-0.5
              text-(--brown-deep)
              shrink-0
            "
          />
          <div>
            <p
              className="
                text-(--brown-deep)
                text-md
                font-medium
                leading-relaxed
              "
            >
              {point.title}
            </p>
            <p
              className="
                text-(--brown-soft)
                text-sm
                leading-relaxed
              "
            >
              {point.desc}
            </p>

            {point.subpoints && point.subpoints.length > 0 && (
              <ul className="mt-1.5 ml-1 flex flex-col gap-1">
                {point.subpoints.map((sub, j) => (
                  <li
                    key={j}
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-(--brown-soft)
                      text-sm
                      leading-relaxed
                    "
                  >
                    <span
                      className="
                        w-1
                        h-1
                        rounded-full
                        bg-(--brown-soft)
                        shrink-0
                      "
                    />
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

function SpecializationModal({ item, onClose }: { item: any; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: { key: string; }) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-start justify-center
        overflow-y-auto
        p-3 sm:p-6
        pt-24 sm:pt-28
        pb-6
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="specialization-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      {/* Modal card */}
      <div
        className="
    relative
    bg-[#faf9f7]
    rounded-[24px]
    border
    border-[#ece7df]
    w-full
    max-w-2xl
    max-h-[calc(100dvh-7rem)]
    sm:max-h-[calc(100dvh-9rem)]
    shadow-2xl
    overflow-hidden
  "
      >
        {/* Scrollable Content */}
        <div
          className="
      h-full
      max-h-[calc(100dvh-7rem)]
      sm:max-h-[calc(100dvh-9rem)]
      overflow-y-auto
      p-4
      sm:p-8
      text-center
      scrollbar-thin
      scrollbar-thumb-[#b48d79]
      scrollbar-track-transparent
    "
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="
        absolute
        top-3
        right-3
        sm:top-5
        sm:right-5
        w-8
        h-8
        sm:w-9
        sm:h-9
        flex
        items-center
        justify-center
        rounded-full
        bg-[#f3f1ec]
        hover:bg-[#ece7df]
        transition-colors
        text-(--brown-deep)
        z-20
      "
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5  cursor-pointer" />
          </button>

          <div className="relative h-44 sm:h-64 md:h-80 rounded-2xl overflow-hidden mb-3 sm:mb-5">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, 700px"
              className="object-cover object-top"
            />
          </div>

          <h3
            id="specialization-modal-title"
            className="
        text-xl
        sm:text-2xl
        md:text-3xl
        leading-tight
        tracking-[-1px]
        text-(--brown-deep)
        font-semibold
      "
          >
            {item.title}
          </h3>

          <p
            className="
        mt-2
        sm:mt-3
        text-(--brown-soft)
        text-sm
        sm:text-md
        leading-[1.6]
        sm:leading-[1.8]
      "
          >
            {item.desc}
          </p>

          <SpecializationPoints points={item.points} />
        </div>
      </div>
    </div>
  );
}

export default function SpecializationsSection() {
  const [selected, setSelected] = useState<typeof specializations[number] | null>(null);

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
              text-[16px]
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
            <button
              key={index}
              type="button"
              onClick={() => setSelected(item)}
              className="
                bg-[#faf9f7]
                rounded-[20px]
                sm:rounded-[24px]
                border
                border-[#ece7df]
                p-5
                sm:p-6
                md:p-8
                hover:-translate-y-1
                transition-all
                text-center
                cursor-pointer
                flex
                flex-col
                w-full
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-(--brown-deep)
              "
            >
              {/* Image */}
              <div className="relative h-48 sm:h-60 md:h-72 rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-6 md:mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 900px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  md:text-4xl
                  leading-tight
                  tracking-[-0.5px]
                  md:tracking-[-1px]
                  text-(--brown-deep)
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

              <span
                className="
    mt-auto
    pt-4
    sm:pt-5
    inline-flex
    items-center
    justify-center
    gap-2
    text-(--brown-deep)
    text-xs
    sm:text-sm
    font-semibold
    uppercase
    tracking-[1.5px]
    group
  "
              >
                More Info
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Popup modal with full details */}
      {selected && (
        <SpecializationModal item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}