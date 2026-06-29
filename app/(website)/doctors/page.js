import CareersCTASection from "@/components/doctors/CareersCTASection";
import DoctorsGridSection from "@/components/doctors/DoctorsGridSection";
import DoctorsHeroSection from "@/components/doctors/DoctorsHeroSection";

// app/doctors/page.js
export default function Doctors() {
  return (
   <main className="min-h-screen">
      <DoctorsHeroSection />
      <DoctorsGridSection />
      <CareersCTASection />
   </main>
  );
}