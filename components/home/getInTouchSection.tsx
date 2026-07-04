"use client";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Camera,
  Send,
} from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

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
                  font-bold
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
                      Aayush Hospital and Aayush advanced Physiotherapy Clinic, 
                      <br />
                      Samruddhi prime, Opposite to Indian oil Petrol Pump, Sant Nagar Wagholi road Lohegaon Pune 411047
                      
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
                      +91 09970766313
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

    {[
      {
        icon: FaWhatsapp,
        href: "https://wa.me/919970766313",
      },
      {
        icon: FaInstagram,
        href: "https://www.instagram.com/aayushhospital_pune/",
      },
    ].map((item, index) => {
      const Icon = item.icon;

      return (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
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
            text-[#5b342b]
            hover:bg-[#5b342b]
            hover:text-white
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <Icon size={18} />
        </a>
      );
    })}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24162.036409854387!2d73.93503590443012!3d18.598922224405282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c76caa595d01%3A0x14b46128c6338db7!2sAayush%20hospital%20and%20Aayush%20advanced%20physiotherapy%20clinic!5e0!3m2!1sen!2sin!4v1779192483629!5m2!1sen!2sin"
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
            
          </div>
        </div>
      </div>
    </section>
  );
}