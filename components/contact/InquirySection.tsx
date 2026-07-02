"use client";

import { useState } from "react";
import { MapPin, Plus } from "lucide-react";
import { toast } from "sonner";
export default function InquirySection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {

        toast.success("Message sent successfully");

        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "",
          message: "",
        });

      } else {

        toast.error(data.message || "Something went wrong");
      }

    } catch (error) {

      // console.error(error);

      toast.error("Something went wrong");

    } finally {

      setLoading(false);
    }
  };

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
                font-bold
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

            {/* FORM */}
            <form
              className="mt-12"
              onSubmit={handleSubmit}
            >

              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-5">

                {/* Name */}
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
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rohan Verma"
                    required
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

                {/* Email */}
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
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rohan.verma@example.com"
                    required
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

                {/* Phone */}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
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

                {/* Department */}
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
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
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
                    <option value="">Select Department</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Orthopedics">Orthopedics</option>
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
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we assist you today?"
                  required
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
                disabled={loading}
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
                  disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

          {/* RIGHT SECTION */}
          <div>

            {/* Heading */}
            <h2
              className="
                text-(--brown-deep)
                text-[48px]
                leading-none
                tracking-[-2px]
                font-bold
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

              <iframe
                title="Aayush Hospital Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24162.036409854387!2d73.93503590443012!3d18.598922224405282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c76caa595d01%3A0x14b46128c6338db7!2sAayush%20hospital%20and%20Aayush%20advanced%20physiotherapy%20clinic!5e0!3m2!1sen!2sin!4v1779192483629!5m2!1sen!2sin"
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}