"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#f6f4ef] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* ================= FIRST SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="relative">
            {/* Decorative Circle */}
            <div className="absolute -top-4 -left-4 lg:-left-8 w-20 h-20 lg:w-28 lg:h-28 rounded-full border border-[#d8c7a2] z-0" />

            {/* Main Image */}
            <div
              className="
                relative
                rounded-[32px]
                overflow-hidden
                w-full
                max-w-[560px]
                h-[420px]
                sm:h-[520px]
                lg:h-[650px]
                mx-auto
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
                bottom-4
                right-4
                lg:-bottom-4
                lg:-right-4
                bg-[#5b342b]
                text-white
                rounded-2xl
                px-5
                py-4
                sm:px-6
                sm:py-5
                lg:px-8
                lg:py-7
                shadow-2xl
                z-20
              "
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-none">
                15+
              </h3>

              <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] mt-2 text-white/80">
                Years Excellence
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[620px] mx-auto lg:mx-0">
            {/* Small Title */}
            <p
              className="
                uppercase
                tracking-[3px]
                sm:tracking-[4px]
                text-(--eyebrow)
                text-xs
                sm:text-sm
                font-semibold
                mb-4
              "
            >
              Our Heritage
            </p>

            {/* Main Heading */}
            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-[50px]
                leading-tight
                lg:leading-[1.05]
                tracking-tight
                lg:tracking-[-2px]
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
                mt-6
                lg:mt-10
                text-base
                leading-7
                lg:leading-loose
                text-(--brown-soft)
              "
            >
              Founded on the principles of integrity and excellence,
              Aayush Hospital has grown from a local clinic to a premier
              medical destination. Our journey over the last ten years
              has been defined by the lives we've touched and the trust
              we've built with every patient who enters our sanctuary.
            </p>

            {/* Button */}
            <Link href="/about">
              <button
                className="
                  mt-8
                  lg:mt-10
                  text-base
                  lg:text-lg
                  text-(--brown-deep)
                  font-semibold
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

        {/* ================= SECOND SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-20 lg:mt-32">
          {/* LEFT SIDE CONTENT */}
          <div className="max-w-[620px] mx-auto lg:mx-0 lg:order-1">
            <p
              className="
                uppercase
                tracking-[3px]
                sm:tracking-[4px]
                text-(--eyebrow)
                text-xs
                sm:text-sm
                font-semibold
                mb-4
              "
            >
              Our Heritage
            </p>

            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-[50px]
                leading-tight
                lg:leading-[1.05]
                tracking-tight
                lg:tracking-[-2px]
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
                mt-6
                lg:mt-10
                text-base
                leading-7
                lg:leading-loose
                text-(--brown-soft)
              "
            >
              At Aayush Hospital, we combine advanced medical technology
              with compassionate patient care. Our multidisciplinary team
              works together to ensure every patient receives personalized
              treatment, comfort, and support throughout their healthcare
              journey.
            </p>

            <Link href="/services">
              <button
                className="
                  mt-8
                  lg:mt-10
                  text-base
                  lg:text-lg
                  text-(--brown-deep)
                  font-semibold
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
            <div className="absolute -top-4 -right-4 lg:-right-8 w-20 h-20 lg:w-28 lg:h-28 rounded-full border border-[#d8c7a2] z-0" />

            <div
              className="
                relative
                rounded-[32px]
                overflow-hidden
                w-full
                max-w-[560px]
                h-[420px]
                sm:h-[520px]
                lg:h-[650px]
                mx-auto
                lg:ml-auto
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
                bottom-4
                left-4
                lg:-bottom-4
                lg:-left-4
                bg-[#5b342b]
                text-white
                rounded-2xl
                px-5
                py-4
                sm:px-6
                sm:py-5
                lg:px-8
                lg:py-7
                shadow-2xl
                z-20
              "
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-none">
                25K+
              </h3>

              <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] mt-2 text-white/80">
                Happy Patients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}