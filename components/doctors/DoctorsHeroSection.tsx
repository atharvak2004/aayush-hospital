"use client";

export default function DoctorsHeroSection() {
  return (
    <section className="bg-[#f5f3ee] py-32 lg:py-40 overflow-hidden md:mt-12">
      
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Small Label */}
        <p
          className="
            uppercase
            tracking-[5px]
            text-(--eyebrow)
            text-[12px]
            font-semibold
            mb-10
          "
        >
          Meet The Team
        </p>

        {/* Main Heading */}
        <h1
          className="
            text-(--brown-deep)
            text-[60px]
            md:text-[110px]
            leading-[0.9]
            tracking-[-4px]
            font-bold
          "
        >
          Our World-Class
          <br />
          Specialists
        </h1>

        {/* Description */}
        <p
          className="
            mt-12
            text-(--brown-soft)
            text-xl
            leading-[1.8]
            max-w-4xl
            mx-auto
          "
        >
          At Aayush Hospital, we unite global medical expertise with
          deeply personalized care. Our specialists represent the
          pinnacle of healing, dedicated to your wellness journey in
          our curated sanctuary.
        </p>
      </div>
    </section>
  );
}