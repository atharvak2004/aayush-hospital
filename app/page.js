// app/page.js

import AayushAdvantageSection from '@/components/home/aayushAdvantageSection';
import AboutSection from '@/components/home/aboutSection';
import ExpertTeamSection from '@/components/home/expertTeamSection';
import Footer from '@/components/home/footer';
import GetInTouchSection from '@/components/home/getInTouchSection';
import Hero from '@/components/home/Hero';
import SpecializationsSection from '@/components/home/specializationSection';
import TestimonialsAndCTA from '@/components/home/testimonialsAndCta';
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