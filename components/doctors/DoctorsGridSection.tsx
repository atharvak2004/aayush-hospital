"use client";

import { Search } from "lucide-react";
import { useState } from "react";

const categories = [
  "All Departments",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
];

const doctors = [
  {
    name: "Dr. Umens",
    role: "CHIEF OF CARDIOLOGY",
    category: "Cardiology",
    desc: "Healing begins with the heart, both physically and through the compassionate connection we build with every patient.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Umesh",
    role: "LEAD NEUROSURGEON",
    category: "Neurology",
    desc: "Precision in treatment meets empathy in care. Understanding the mind is the first step to holistic recovery.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Umesh",
    role: "LEAD SURGEON",
    category: "Orthopedics",
    desc: "Advancing the art of surgery through minimal intervention and maximal attention to patient well-being.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
  },
];

export default function DoctorsGridSection() {
  const [active, setActive] = useState("All Departments");
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesCategory =
      active === "All Departments" ||
      doctor.category === active;

    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(search.toLowerCase());

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
                  ${
                    active === item
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
              <div className="relative overflow-hidden">
                
                {/* Category Badge */}
                <div
                  className="
                    absolute
                    top-4
                    left-4
                    z-10
                    px-4
                    py-1.5
                    rounded-full
                    bg-[#c89b43]
                    text-[#fff]
                    text-[10px]
                    tracking-[2px]
                    uppercase
                    font-semibold
                  "
                >
                  {doctor.category}
                </div>

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="
                    w-full
                    h-[380px]
                    object-cover
                    grayscale
                    hover:scale-105
                    transition-all
                    duration-500
                  "
                />
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
                  
                  <button
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
                  </button>

                  <button
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
                    "
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}