// app/page.js

import AayushAdvantageSection from '@/components/aayushAdvantageSection';
import AboutSection from '@/components/aboutSection';
import ExpertTeamSection from '@/components/expertTeamSection';
import Footer from '@/components/footer';
import GetInTouchSection from '@/components/getInTouchSection';
import Hero from '@/components/Hero';
import SpecializationsSection from '@/components/specializationSection';
import TestimonialsAndCTA from '@/components/testimonialsAndCta';
export default function Home() {
  return (
    <main className="min-h-screen">
        <Hero />
        <AboutSection />
        <SpecializationsSection />
        <ExpertTeamSection />
        <AayushAdvantageSection />
        <TestimonialsAndCTA />
        <GetInTouchSection />
        <Footer />
    </main>
  );
}