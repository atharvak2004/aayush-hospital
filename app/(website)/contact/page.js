import ContactHeroSection from "@/components/contact/ContactHeroSection";
import FAQQuickLinksSection from "@/components/contact/FAQQuickLinksSection";
import InquirySection from "@/components/contact/InquirySection";

// app/contact/page.js
export default function Contact() {
  return (
     <main className="min-h-screen">
      <ContactHeroSection />
      <InquirySection />
      <FAQQuickLinksSection />
     </main>
  );
}