"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="bg-[#f4f2ed] py-16 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            sm:rounded-[30px]
            lg:rounded-[36px]
            px-6
            sm:px-10
            py-14
            sm:py-16
            lg:py-20
            text-center
            bg-gradient-to-r
            from-[#5a342b]
            via-[#64392e]
            to-[#6d4032]
          "
        >

          {/* Top Gradient Shape */}
          <div
            className="
              absolute
              inset-0
              opacity-20
            "
          >
            <div
              className="
                absolute
                top-0
                left-0
                w-full
                h-full
                bg-gradient-to-br
                from-white/20
                to-transparent
                rounded-[36px]
              "
              style={{
                clipPath: "ellipse(85% 55% at 50% 0%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">

            {/* Heading */}
            <h2
              className="
                text-white
                text-[32px]
                sm:text-[42px]
                md:text-[50px]
                lg:text-[58px]
                leading-[1.1]
                sm:leading-none
                tracking-[-1px]
                sm:tracking-[-1.5px]
                lg:tracking-[-2px]
                font-bold
              "
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your Health, Our Priority
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                sm:mt-6
                lg:mt-8
                text-white/70
                text-base
                sm:text-lg
                lg:text-xl
                leading-7
                sm:leading-8
                lg:leading-10
                max-w-3xl
                mx-auto
              "
            >
              Join thousands of families who trust us for their healthcare needs.
              <br className="hidden sm:block" />
              {" "}Schedule your visit today.
            </p>

            {/* Button */}
            <a
              href="https://wa.me/919970766313?text=Hello%20AAYUSH%20Hospital,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                sm:gap-3
                mt-8
                sm:mt-10
                lg:mt-12
                w-full
                sm:w-auto
                bg-[#f5f3ef]
                hover:bg-white
                text-[#4b2d25]
                px-8
                sm:px-10
                lg:px-12
                py-4
                sm:py-4.5
                lg:py-5
                rounded-full
                text-[13px]
                sm:text-[14px]
                lg:text-[15px]
                tracking-[1px]
                sm:tracking-[1.5px]
                lg:tracking-[2px]
                font-semibold
                transition-all
                hover:scale-105
                cursor-pointer
              "
            >
              <FaWhatsapp size={20} />
              BOOK APPOINTMENT NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}