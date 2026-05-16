import ClinicalDepartmentsSection from "@/components/services/ClinicalDepartmentsSection";
import HolisticWellnessSection from "@/components/services/HolisticWellnessSection";
import PatientJourneySection from "@/components/services/PatientJourneySection";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";

// app/services/page.js
export default function Services() {
  return(
  <main className="min-h-screen">
    <ServicesHeroSection />
    <ClinicalDepartmentsSection />
    <HolisticWellnessSection />
    <PatientJourneySection />
  </main>
  );
}
