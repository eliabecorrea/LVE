import Header from "../components/Header";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/howitworks-section";
import Testimonials from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/Footer";
import PrincipalSection from "@/components/principal-section";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-items-center min-h-screen">
      <Header />
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full gap-4 lg:gap-6 container">
        <PrincipalSection />
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
