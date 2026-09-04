import AayushAdvantageSection from '@/components/home/aayushAdvantageSection';
import AboutSection from '@/components/home/aboutSection';
import CTASection from '@/components/home/CTASection';
import ExpertTeamSection from '@/components/home/expertTeamSection';
import FeaturedBlogsSection from '@/components/home/FeaturedBlogsSection';
import GetInTouchSection from '@/components/home/getInTouchSection';
import Hero from '@/components/home/Hero';
import SpecializationsSection from '@/components/home/specializationSection';
import TestimonialsAndCTA from '@/components/home/testimonialsAndCta';

export const metadata = {
  // "absolute" so this bypasses the "%s | Aayush Hospital" template in the
  // root layout — the homepage title shouldn't repeat the brand name twice.
  title: {
    absolute: "Aayush Hospital | Quality Healthcare in Lohegaon, Pune",
  },
  description:
    "15+ years of medical excellence in Lohegaon, Pune. Aayush Hospital and Aayush Advanced Physiotherapy Clinic offer orthopedics, surgery, physiotherapy, ozone therapy and compassionate patient care.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aayush Hospital | Quality Healthcare in Lohegaon, Pune",
    description:
      "15+ years of medical excellence across orthopedics, surgery, physiotherapy, ozone therapy and more — right here in Lohegaon, Pune.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
        <Hero />
        <AboutSection />
        <SpecializationsSection />
        <ExpertTeamSection />
        <AayushAdvantageSection />
        <FeaturedBlogsSection />
        <TestimonialsAndCTA />
        <CTASection />
        <GetInTouchSection />
    </main>
  );
}