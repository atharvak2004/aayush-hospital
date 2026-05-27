import AboutHeroSection from "@/components/about/AboutHeroSection";
import CorePrinciplesSection from "@/components/about/CorePrinciplesSection";
import LeadershipTeamSection from "@/components/about/LeadershipTeamSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
  
export default function About() {
  return (
    <main className="min-h-screen">
      <AboutHeroSection />
      <MissionVisionSection />
      <LeadershipTeamSection />
      <CorePrinciplesSection />
    </main>
  );
}
