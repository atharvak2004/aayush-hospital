"use client";

import {
  Mail,
  Asterisk,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function ContactHeroSection() {
  return (
    <section className="bg-[#f5f3ee] overflow-hidden">
      {/* HERO WRAPPER */}
      <div
        className="
    relative
    min-h-[1650px]
    sm:min-h-[1500px]
    md:min-h-[1250px]
    lg:min-h-[860px]
  "
      >
        {/* BACKGROUND IMAGE */}
        <img
          src="/Aayush_Contact_hero.png"
          alt="Luxury Hospital Lobby"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-black/30
          "
        />

        {/* HERO CONTENT */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            text-center
            px-5
            sm:px-6
            md:px-10
            pt-32
            sm:pt-36
            md:pt-40
            lg:pt-44
            pb-[220px]
            sm:pb-[260px]
            md:pb-[300px]
            lg:pb-48
          "
        >
          {/* HEADING */}
          <h1
            className="
              text-white
              text-[42px]
              sm:text-[56px]
              md:text-[72px]
              lg:text-[82px]
              leading-[0.9]
              tracking-[-2px]
              sm:tracking-[-3px]
              md:tracking-[-4px]
              font-bold
            "
          >
            Get In Touch
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              sm:mt-8
              text-white/85
              text-[15px]
              sm:text-[17px]
              md:text-[18px]
              leading-7
              sm:leading-8
              max-w-[760px]
            "
          >
            Step into a sanctuary of healing and restoration.
            We are here to provide compassionate support and
            answer all your wellness needs.
          </p>
        </div>

        {/* FLOATING CARDS */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2

            top-[420px]
            sm:top-[460px]
            md:top-[500px]
            lg:top-auto
            lg:bottom-10

            w-full
            max-w-7xl
            px-4
            sm:px-6
            md:px-8
            z-20
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
              md:gap-6
            "
          >
            {/* CARD 1 */}
            <div
              className="
                bg-[#fbfaf8]
                rounded-[24px]
                p-6
                sm:p-7
                md:p-8
                shadow-xl
                border
                border-white/30
              "
            >
              {/* ICON */}
              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-[#f4e2da]
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                <Mail
                  size={20}
                  className="text-[#5b342b]"
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-[#5b342b]
                  text-[28px]
                  sm:text-[30px]
                  leading-none
                  tracking-[-1px]
                  font-semibold
                "
              >
                General Inquiries
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-5
                  text-[#7a5b50]
                  text-[15px]
                  sm:text-[16px]
                  leading-7
                "
              >
                For non-urgent matters, patient services,
                or administrative questions.
              </p>

              {/* EMAIL */}
              <a
                href="mailto:care@aayush.com"
                className="
    mt-6
    block
    text-[#5b342b]
    text-[15px]
    font-semibold
    break-all
    hover:underline
  "
              >
                care@aayush.com
              </a>

              <a
                href="tel:+919970766313"
                className="
    mt-2
    block
    text-[#7a5b50]
    text-[14px]
    hover:underline
  "
              >
                +91 09970766313
              </a>
            </div>

            {/* CARD 2 */}
            <div
              className="
                bg-[#5b342b]
                rounded-[24px]
                p-6
                sm:p-7
                md:p-8
                shadow-xl
                border
                border-white/10
              "
            >
              {/* ICON */}
              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                <Asterisk
                  size={20}
                  className="text-white"
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-white
                  text-[28px]
                  sm:text-[30px]
                  leading-none
                  tracking-[-1px]
                  font-semibold
                "
              >
                Emergency Support
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-5
                  text-white/75
                  text-[15px]
                  sm:text-[16px]
                  leading-7
                "
              >
                Available 24/7 for urgent medical
                assistance and critical care coordination.
              </p>

              {/* NUMBER */}
              <a
                href="tel:+919970766313"
                className="
    mt-6
    block
    text-white
    text-[22px]
    sm:text-[26px]
    font-bold
    break-words
    hover:text-white/80
    transition-all
  "
              >
                +91 09970766313
              </a>

              {/* SMALL TEXT */}
              <p
                className="
                  mt-2
                  text-white/50
                  text-[10px]
                  sm:text-[11px]
                  tracking-[2px]
                  sm:tracking-[3px]
                  uppercase
                  font-medium
                "
              >
                Immediate Response Guaranteed
              </p>
            </div>

            {/* CARD 3 */}
            <div
              className="
                bg-[#fbfaf8]
                rounded-[24px]
                p-6
                sm:p-7
                md:p-8
                shadow-xl
                border
                border-white/30
              "
            >
              {/* ICON */}
              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-[#f4e2da]
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                <MapPin
                  size={20}
                  className="text-[#5b342b]"
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-[#5b342b]
                  text-[28px]
                  sm:text-[30px]
                  leading-none
                  tracking-[-1px]
                  font-semibold
                "
              >
                Our Location
              </h3>

              {/* ADDRESS */}
              <p
                className="
                  mt-5
                  text-[#7a5b50]
                  text-[15px]
                  sm:text-[16px]
                  leading-7
                "
              >
                Aayush Hospital and Aayush advanced Physiotherapy Clinic,
                <br />
                Samruddhi prime, Opposite to Indian oil Petrol Pump, Sant Nagar Wagholi road Lohegaon Pune 411047
              </p>

              {/* BUTTON */}
              <a
                href="https://google.com/maps?cid=1491924204318330295&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed"
                target="_blank"
                rel="noopener noreferrer"
                className="
    mt-6
    flex
    items-center
    gap-3
    text-[#5b342b]
    text-[15px]
    font-semibold
    hover:gap-4
    transition-all
    duration-300
  "
              >
                Get Directions
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}