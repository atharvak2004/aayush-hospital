"use client";

export default function CTASection() {
  return (
    <section className="bg-[#f4f2ed] py-24">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            px-6
            py-20
            text-center
            bg-gradient-to-r
            from-[#5a342b]
            via-[#64392e]
            to-[#6d4032]
          "
        >
          
          {/* Top Gradient Shape */}
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
                left-0
                w-full
                h-full
                bg-gradient-to-br
                from-white/20
                to-transparent
                rounded-[36px]
              "
              style={{
                clipPath: "ellipse(85% 55% at 50% 0%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            
            {/* Heading */}
            <h2
              className="
                text-white
                text-[58px]
                leading-none
                tracking-[-2px]
                font-bold
              "
            >
              Your Health, Our Priority
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                text-white/70
                text-xl
                leading-10
                max-w-3xl
                mx-auto
              "
            >
              Join thousands of families who trust us for their healthcare needs.
              <br />
              Schedule your visit today.
            </p>

            {/* Button */}
            <button
              className="
                mt-12
                bg-[#f5f3ef]
                hover:bg-white
                text-[#4b2d25]
                px-12
                py-5
                rounded-full
                text-[15px]
                tracking-[2px]
                font-semibold
                transition-all
                hover:scale-105
                cursor-pointer
              "
            >
              BOOK APPOINTMENT NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}