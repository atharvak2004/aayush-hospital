"use client";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Camera,
  Send,
} from "lucide-react";

export default function GetInTouchSection() {
  return (
    <section className="bg-[#f4f2ed] py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div
          className="
            grid
            lg:grid-cols-[420px_1fr]
            gap-6
            items-stretch
          "
        >
          
          {/* LEFT CONTACT CARD */}
          <div
            className="
              bg-[#ebe8e2]
              rounded-[32px]
              p-10
              flex
              flex-col
              justify-between
            "
          >
            
            <div>
              
              {/* Heading */}
              <h2
                className="
                  text-(--brown-deep)
                  text-[52px]
                  leading-none
                  tracking-[-1px]
                  font-semibold
                  mb-12
                "
              >
                Get In Touch
              </h2>

              {/* Contact Items */}
              <div className="space-y-10">
                
                {/* Address */}
                <div className="flex items-start gap-5">
                  
                  <div
                    className="
                      min-w-[52px]
                      h-13
                      rounded-2xl
                      bg-[#f4ded3]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <MapPin
                      size={22}
                      className="text-[#5b342b]"
                    />
                  </div>

                  <div>
                    <h3
                      className="
                        text-(--brown-deep)
                        text-[20px]
                        font-semibold
                        mb-2
                      "
                    >
                      Our Address
                    </h3>

                    <p
                      className="
                        text-(--brown-soft)
                        text-md
                        leading-8
                      "
                    >
                      123 Wellness Blvd, Sanctuary District,
                      <br />
                      Health City, HC 54321
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  
                  <div
                    className="
                      min-w-[52px]
                      h-13
                      rounded-2xl
                      bg-[#f4ded3]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Phone
                      size={22}
                      className="text-[#5b342b]"
                    />
                  </div>

                  <div>
                    <h3
                      className="
                        text-(--deep-brown)
                        text-[20px]
                        font-semibold
                        mb-2
                      "
                    >
                      Emergency Support
                    </h3>

                    <p
                      className="
                        text-(--brown-soft)
                        text-[16px]
                        leading-8
                      "
                    >
                      +1 (800) 555-0199 (24/7)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  
                  <div
                    className="
                      min-w-[52px]
                      h-13
                      rounded-2xl
                      bg-[#f4ded3]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Mail
                      size={22}
                      className="text-[#5b342b]"
                    />
                  </div>

                  <div>
                    <h3
                      className="
                        text-(--brown-deep)
                        text-[20px]
                        font-semibold
                        mb-2
                      "
                    >
                      General Inquiry
                    </h3>

                    <p
                      className="
                        text-(--brown-soft)
                        text-[16px]
                        leading-8
                      "
                    >
                      care@aayushhospital.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-14">
              
              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-(--deep-brown)
                  text-[12px]
                  font-semibold
                  mb-5
                "
              >
                Follow Us
              </p>

              <div className="flex items-center gap-4">
                
                {[Globe, Camera, Send].map(
                  (Icon, index) => (
                    <button
                      key={index}
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-white
                        border
                        border-[#e2d9cf]
                        flex
                        items-center
                        justify-center
                        hover:bg-[#5b342b]
                        hover:text-white
                        transition-all
                      "
                    >
                      <Icon size={18} />
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              min-h-[720px]
            "
          >
            
            <iframe
              title="Aayush Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
              className="
                absolute
                inset-0
                w-full
                h-full
                border-0
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Overlay Label */}
            <div
              className="
                absolute
                top-6
                left-6
                bg-white/90
                backdrop-blur-md
                px-5
                py-4
                rounded-2xl
                flex
                items-center
                gap-3
                shadow-lg
              "
            >
              <MapPin
                size={18}
                className="text-(--deep-brown)"
              />

              <span
                className="
                  text-(--brown-deep)
                  text-[15px]
                  font-semibold
                "
              >
                Aayush Hospital
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}