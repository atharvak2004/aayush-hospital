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
    title: "Treatment",
    desc: "Receive a personalized treatment plan using advanced therapies tailored to your condition and wellness goals.",
  },
  {
    number: "04",
    title: "Recovery",
    desc: "Personalized care plans designed for rapid healing and lasting health transformations.",
  },
];

export default function PatientJourneySection() {
  return (
    <section className="bg-[#f5f3ee] py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2
            className="
              text-(--brown-deep)
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[52px]
              leading-tight
              tracking-tight
              font-bold
            "
          >
            The Patient Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Line */}
          <div
            className="
              hidden
              md:block
              absolute
              top-10
              left-[12.5%]
              right-[12.5%]
              h-[2px]
              bg-[#ddd7cf]
            "
          />

          {/* Steps */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-10
              md:gap-8
              lg:gap-6
              relative
              z-10
            "
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="text-center flex flex-col items-center"
              >
                {/* Circle */}
                <div
                  className="
                    w-16
                    h-16
                    sm:w-18
                    sm:h-18
                    md:w-20
                    md:h-20
                    rounded-full
                    bg-[#ebe7e1]
                    flex
                    items-center
                    justify-center
                    text-(--brown-deep)
                    text-xl
                    md:text-2xl
                    font-semibold
                    shadow-sm
                  "
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-(--brown-deep)
                    text-xl
                    sm:text-2xl
                    md:text-[28px]
                    font-semibold
                    leading-tight
                  "
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4
                    text-(--brown-soft)
                    text-sm
                    sm:text-base
                    leading-7
                    max-w-[260px]
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