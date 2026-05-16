"use client";

import {
  MapPin,
  Plus,
} from "lucide-react";

export default function InquirySection() {
  return (
    <section className="bg-[#f5f3ee] py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
          "
        >
          
          {/* LEFT FORM */}
          <div
            className="
              bg-[#f1efeb]
              rounded-[32px]
              p-8
              lg:p-10
            "
          >
            
            {/* Heading */}
            <h2
              className="
                text-(--brown-deep)
                text-[48px]
                leading-none
                tracking-[-2px]
                font-semibold
              "
            >
              Send an Inquiry
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                text-(--brown-soft)
                text-md
                leading-[1.8]
                max-w-120
              "
            >
              Please fill out the form below and our coordinators
              will reach out within 24 hours.
            </p>

            {/* Form */}
            <form className="mt-12">
              
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-5">
                
                <div>
                  <label
                    className="
                      block
                      text-[#9a8f88]
                      text-[12px]
                      tracking-[3px]
                      uppercase
                      font-semibold
                      mb-4
                    "
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="
                      w-full
                      h-[60px]
                      rounded-full
                      bg-white
                      px-6
                      text-(--brown-deep)
                      outline-none
                      border
                      border-transparent
                      focus:border-[#c7a16a]
                      placeholder:text-[#c2b7ae]
                    "
                  />
                </div>

                <div>
                  <label
                    className="
                      block
                      text-[#9a8f88]
                      text-[12px]
                      tracking-[3px]
                      uppercase
                      font-semibold
                      mb-4
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="
                      w-full
                      h-[60px]
                      rounded-full
                      bg-white
                      px-6
                      text-(--brown-deep)
                      outline-none
                      border
                      border-transparent
                      focus:border-[#c7a16a]
                      placeholder:text-[#c2b7ae]
                    "
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-5 mt-7">
                
                <div>
                  <label
                    className="
                      block
                      text-[#9a8f88]
                      text-[12px]
                      tracking-[3px]
                      uppercase
                      font-semibold
                      mb-4
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+1 (000) 000-0000"
                    className="
                      w-full
                      h-[60px]
                      rounded-full
                      bg-white
                      px-6
                      text-(--brown-deep)
                      outline-none
                      border
                      border-transparent
                      focus:border-[#c7a16a]
                      placeholder:text-[#c2b7ae]
                    "
                  />
                </div>

                <div>
                  <label
                    className="
                      block
                      text-[#9a8f88]
                      text-[12px]
                      tracking-[3px]
                      uppercase
                      font-semibold
                      mb-4
                    "
                  >
                    Department
                  </label>

                  <select
                    className="
                      w-full
                      h-[60px]
                      rounded-full
                      bg-white
                      px-6
                      text-(--brown-deep)
                      outline-none
                      border
                      border-transparent
                      focus:border-[#c7a16a]
                    "
                  >
                    <option>Select Department</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Pediatrics</option>
                    <option>Orthopedics</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-7">
                
                <label
                  className="
                    block
                    text-[#9a8f88]
                    text-[12px]
                    tracking-[3px]
                    uppercase
                    font-semibold
                    mb-4
                  "
                >
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="How can we assist you today?"
                  className="
                    w-full
                    rounded-[24px]
                    bg-white
                    px-6
                    py-5
                    text-(--brown-deep)
                    outline-none
                    border
                    border-transparent
                    focus:border-[#c7a16a]
                    resize-none
                    placeholder:text-[#c2b7ae]
                  "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  mt-10
                  w-full
                  h-[62px]
                  rounded-full
                  bg-gradient-to-r
                  from-[#5b342b]
                  to-[#6d4336]
                  text-white
                  text-[16px]
                  font-semibold
                  shadow-xl
                  hover:opacity-95
                  transition-all
                  cursor-pointer
                "
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT MAP */}
          <div>
            
            {/* Heading */}
            <h2
              className="
                text-(--brown-deep)
                text-[48px]
                leading-none
                tracking-[-2px]
                font-semibold
              "
            >
              Our Sanctuary
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                text-(--brown-soft)
                text-md
                leading-[1.8]
                max-w-130
              "
            >
              Located in the heart of the Sanctuary District,
              surrounded by peaceful landscapes.
            </p>

            {/* Map */}
            <div
              className="
                relative
                mt-10
                rounded-4xl
                overflow-hidden
                h-[620px]
                bg-[#dfddd8]
              "
            >
              
              {/* Map iframe */}
              <iframe
                title="Aayush Hospital Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  border-0
                "
                loading="lazy"
                allowFullScreen
              />

              {/* Floating Card */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  bg-white
                  rounded-[22px]
                  shadow-2xl
                  px-6
                  py-5
                  flex
                  items-center
                  gap-5
                  min-w-[320px]
                "
              >
                
                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-(--brown-deep)
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Plus
                    size={22}
                    className="text-white"
                  />
                </div>

                {/* Content */}
                <div>
                  
                  <h3
                    className="
                      text-(--brown-deep)
                      text-[20px]
                      font-bold
                    "
                  >
                    AAYUSH HOSPITAL
                  </h3>

                  <p
                    className="
                      mt-1
                      text-(--brown-soft)
                      text-[12px]
                      tracking-[3px]
                      uppercase
                      font-semibold
                    "
                  >
                    Main Sanctuary Campus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}