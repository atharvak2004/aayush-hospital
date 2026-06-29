"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#f6f4ef] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="relative">

            {/* Decorative Circle */}
            <div className="absolute -top-2 -left-8 w-28 h-28 rounded-full border border-[#d8c7a2] z-0" />

            {/* Main Image */}
            <div
              className="
                relative
                rounded-4xl
                overflow-hidden
                w-full
                max-w-140
                h-162.5
                z-10
              "
            >
              <Image
                src="/Home_about_section.JPG"
                alt="Doctor"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div
              className="
                absolute
                -bottom-4
                -right-4
                bg-[#5b342b]
                text-white
                rounded-2xl
                px-8
                py-7
                shadow-2xl
                z-20
              "
            >
              <h3 className="text-5xl font-bold leading-none">
                15+
              </h3>

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[2px]
                  mt-2
                  text-white/80
                "
              >
                Years Excellence
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-155">

            {/* Small Title */}
            <p
              className="
                uppercase
                tracking-[4px]
                text-(--eyebrow)
                text-[14px]
                font-semibold
                mb-4
              "
            >
              Our Heritage
            </p>

            {/* Main Heading */}
            <h2
              className="
    text-[50px]
    leading-[1.05]
    tracking-[-2px]
    text-(--brown-deep)
    font-bold
  "
            >
              A Decade of
              <br />
              Compassionate Healing

            </h2>

            {/* Description */}
            <p
              className="
                mt-10
                text-(--brown-soft)
                text-md
                leading-loose
                
              "
            >
              Founded on the principles of integrity and excellence,
              Aayush Hospital has grown from a local clinic to a premier
              medical destination. Our journey over the last ten years
              has been defined by the lives we've touched and the trust
              we've built with every patient who enters our sanctuary.
            </p>

            {/* Link */}
            <Link href="/about">
              <button
                className="
                  mt-10
                  text-(--brown-deep)
                  font-semibold
                  text-[18px]
                border-b-2
                border-[#cba65a]
                pb-1
                hover:opacity-80
                transition-all
                cursor-pointer
              "
              >
                Learn More About Our History
              </button>
            </Link>
          </div>
        </div>
        {/* SECOND SECTION - REVERSE LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-32">

          {/* LEFT SIDE CONTENT */}
          <div className="max-w-155 lg:order-1">

            <p
              className="
        uppercase
        tracking-[4px]
        text-(--eyebrow)
        text-[14px]
        font-semibold
        mb-4
      "
            >
              Our Heritage
            </p>

            <h2
              className="
        text-[50px]
        leading-[1.05]
        tracking-[-2px]
        text-(--brown-deep)
        font-bold
      "
            >
              Modern Care
              <br />
              With A Human Touch
            </h2>

            <p
              className="
        mt-10
        text-(--brown-soft)
        text-md
        leading-loose
      "
            >
              At Aayush Hospital, we combine advanced medical technology with
              compassionate patient care. Our multidisciplinary team works
              together to ensure every patient receives personalized treatment,
              comfort, and support throughout their healthcare journey.
            </p>

            <Link href="/services">
              <button
                className="
          mt-10
          text-(--brown-deep)
          font-semibold
          text-[18px]
          border-b-2
          border-[#cba65a]
          pb-1
          hover:opacity-80
          transition-all
          cursor-pointer
        "
              >
                Explore Our Services
              </button>
            </Link>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative lg:order-2">

            <div className="absolute -top-2 -right-8 w-28 h-28 rounded-full border border-[#d8c7a2] z-0" />

            <div
              className="
        relative
        rounded-4xl
        overflow-hidden
        w-full
        max-w-140
        h-162.5
        ml-auto
        z-10
      "
            >
              <Image
                src="/Advanced Physiotherapy.png"
                alt="Medical Team"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="
        absolute
        -bottom-4
        -left-4
        bg-[#5b342b]
        text-white
        rounded-2xl
        px-8
        py-7
        shadow-2xl
        z-20
      "
            >
              <h3 className="text-5xl font-bold leading-none">
                25K+
              </h3>

              <p
                className="
          text-[11px]
          uppercase
          tracking-[2px]
          mt-2
          text-white/80
        "
              >
                Happy Patients
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}