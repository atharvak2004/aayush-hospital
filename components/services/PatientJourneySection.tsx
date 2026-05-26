"use client";

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "Meet our specialists for an in-depth evaluation of your health and wellness goals.",
  },
  {
    number: "02",
    title: "Diagnosis",
    desc: "State-of-the-art diagnostics to uncover the root cause and map out your precise recovery.",
  },
  {
    number: "03",
    title: "Recovery",
    desc: "Personalized care plans designed for rapid healing and lasting health transformations.",
  },
];

export default function PatientJourneySection() {
  return (
    <section className="bg-[#f5f3ee] py-28 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-24">
          
          <h2
            className="
              text-(--brown-deep)
              text-[42px]
              md:text-[52px]
              leading-none
              tracking-[-2px]
              font-bold
            "
          >
            The Patient Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Line */}
          <div
            className="
              hidden
              md:block
              absolute
              top-10
              left-[16.5%]
              right-[16.5%]
              h-px
              bg-[#ddd7cf]
            "
          />

          {/* Steps */}
          <div
            className="
              grid
              md:grid-cols-3
              gap-16
              relative
              z-10
            "
          >
            
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                
                {/* Circle */}
                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-[#ebe7e1]
                    flex
                    items-center
                    justify-center
                    mx-auto
                    text-(--brown-deep)
                    text-[26px]
                    font-semibold
                    shadow-sm
                  "
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-8
                    text-(--brown-deep)
                    text-3xl
                    leading-none
                    tracking-[-1px]
                    font-semibold
                  "
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5
                    text-(--brown-soft)
                    text-md
                    leading-[1.9]
                    max-w-65
                    mx-auto
                  "
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}