"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
const categories = [
  "All Departments",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
];

import {
  ShieldPlus,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Umesh Jaiswal",
    role: "M.S. General Surgery",
    category: "General Surgery",
    image: "/Dr. Umesh Jaiswal.png",
    desc: "Specialized in advanced surgical care with a focus on precision, safety, and patient recovery.",
  },
  {
    name: "Dr. Pradisha Jaiswal",
    role: "M.P.T. Neurology",
    category: "Neurology",
    image: "/Dr. Pradisha Jaiswal.png",
    desc: "Focused on neurological rehabilitation, mobility improvement, and personalized patient care.",
  },

];

export default function DoctorsGridSection() {
  const [active, setActive] = useState("All Departments");
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesCategory =
      active === "All Departments" ||
      doctor?.category === active;

    const matchesSearch = doctor?.name
      ?.toLowerCase()
      ?.includes(search?.toLowerCase() || "") ?? false;

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-[#f5f3ee] py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top Filters */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            gap-6
            justify-between
            mb-16
          "
        >

          {/* Search */}
          <div
            className="
              flex
              items-center
              gap-3
              bg-[#fbfaf8]
              border
              border-[#ece7df]
              rounded-2xl
              px-5
              h-[58px]
              w-full
              lg:max-w-[420px]
            "
          >
            <Search
              size={18}
              className="text-(--brown-soft)"
            />

            <input
              type="text"
              placeholder="Search specialist by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                bg-transparent
                outline-none
                w-full
                text-(--brown-deep)
                placeholder:text-(--brown-soft)
                text-[15px]
              "
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">

            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(item)}
                className={`
                  px-5
                  h-[44px]
                  rounded-full
                  text-[14px]
                  font-medium
                  transition-all
                  whitespace-nowrap
                  ${active === item
                    ? "bg-[#4b2d25] text-white"
                    : "bg-[#ece7df] text-[#5b342b] hover:bg-[#e4ddd5]"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {filteredDoctors.map((doctor, index) => (
            <div
              key={index}
              className="
                bg-[#fbfaf8]
                rounded-[28px]
                overflow-hidden
                border
                border-[#ece7df]
                hover:-translate-y-1
                transition-all
              "
            >

              {/* Image */}
              {/* Icon Card */}
              <div className="relative p-6">

                {/* Category Badge */}
                <div
                  className="
      absolute
      top-10
      left-10
      z-10
      px-4
      py-1.5
      rounded-full
      bg-[#c89b43]
      text-white
      text-[10px]
      tracking-[2px]
      uppercase
      font-semibold
    "
                >
                  {doctor.category}
                </div>

                <div
                  className="
    relative
    w-full
    aspect-[3/4]
    overflow-hidden
    rounded-2xl
    border
    border-[#e4ded6]
    bg-white
    hover:shadow-lg
    transition-all
    duration-500
  "
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                </div>

              </div>

              {/* Content */}
              <div className="p-7">

                {/* Name */}
                <h3
                  className="
                    text-(--brown-deep)
                    text-[32px]
                    leading-none
                    tracking-[-1px]
                    font-semibold
                  "
                >
                  {doctor.name}
                </h3>

                {/* Role */}
                <p
                  className="
                    mt-3
                    text-(--brown-soft)
                    text-[12px]
                    tracking-[3px]
                    uppercase
                    font-semibold
                  "
                >
                  {doctor.role}
                </p>

                {/* Description */}
                <p
                  className="
                    mt-6
                    text-(--brown-soft)
                    text-md
                    leading-[1.9]
                  "
                >
                  "{doctor.desc}"
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-8">

                  {/* <button
                    className="
                      flex-1
                      h-[46px]
                      rounded-full
                        bg-[#ece7df]
                      hover:bg-[#e4ddd5]
                      text-[#4b2d25]
                      text-[14px]
                      font-medium
                      transition-all
                      cursor-pointer
                    "
                  >
                    View Profile
                  </button> */}

                  <a
                    href={`https://wa.me/919970766313?text=${encodeURIComponent(
                      `Hello AAYUSH Hospital, I would like to book an appointment with ${doctor.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    flex-1
    h-[46px]
    rounded-full
    bg-[#5b342b]
    hover:bg-[#4b2d25]
    text-white
    text-[14px]
    font-medium
    transition-all
    cursor-pointer
    flex
    items-center
    justify-center
    gap-2
  "
                  >
                    <FaWhatsapp size={18} />
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}