"use client";

const principles = [
  {
    number: "01",
    title: "Compassion",
    desc: "Beyond medical records lie human stories. We approach every interaction with a heart-first philosophy that prioritizes comfort and understanding.",
  },
  {
    number: "02",
    title: "Integrity",
    desc: "Absolute transparency in diagnosis and treatment. We believe trust is the most vital component of the healing journey.",
  },
  {
    number: "03",
    title: "Excellence",
    desc: "A relentless pursuit of medical breakthroughs and meticulous attention to detail in every aspect of our hospital’s operations.",
  },
];

export default function CorePrinciplesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-28
        bg-gradient-to-r
        from-[#4b241d]
        via-[#5a2d23]
        to-[#6a3a2c]
      "
    >
      
      {/* Background Glow */}
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
            right-0
            w-[600px]
            h-full
            bg-gradient-to-l
            from-[#8a5a48]
            to-transparent
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="mb-24">
          
          {/* Small Title */}
          <p
            className="
              uppercase
              tracking-[5px]
              text-white/60
              text-[12px]
              font-semibold
              mb-8
            "
          >
            The Pillars of Aayush
          </p>

          {/* Main Heading */}
          <h2
            className="
              text-white
              text-[52px]
              md:text-[80px]
              leading-none
              tracking-[-3px]
              font-bold
            "
          >
            Core Principles
          </h2>
        </div>

        {/* Principles Grid */}
        <div
          className="
            grid
            md:grid-cols-3
            gap-10
          "
        >
          
          {principles.map((item, index) => (
            <div key={index}>
              
              {/* Top Border */}
              <div className="w-full h-px bg-white/10 mb-10" />

              {/* Number + Title */}
              <div className="flex items-center gap-5">
                
                <span
                  className="
                    text-white/25
                    text-[52px]
                    leading-none
                    font-light
                    tracking-[-2px]
                  "
                >
                  {item.number}
                </span>

                <h3
                  className="
                    text-white
                    text-[34px]
                    leading-none
                    tracking-[-1px]
                    font-semibold
                  "
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="
                  mt-8
                  text-white/65
                  text-md
                  leading-[1.9]
                  max-w-[320px]
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}