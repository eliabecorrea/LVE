import Image from "next/image";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contact-form";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/howitworks-section";
import Testimonials from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full px-4 gap-4 lg:px-6 lg:gap-6">
        <section className="relative overflow-hidden flex items-center justify-self-center p-4 lg:px-6 lg:py-16 bg-base-darker/50 rounded-lg  gap-4 lg:gap-6 flex-wrap lg:flex-nowrap w-full mx-auto">
          <Image src="/fullbanner1.jpg" width={1920} height={1080} alt="Descrição do banner" className="absolute top-0 left-0 z-0 brightness-50 translate-y-[-20%]" />
          <div className="z-10 w-[1440px] mx-auto flex justify-between items-center">
            <div className="space-y-2 [&>p]:mb-0 ">
              <p className="text-5xl font-bold">Liberty for your wealth.</p>
              <p className="text-5xl font-bold text-emerald-500">Vault for your future.</p>
              <p className="text-3xl text-base-100">Exchange Local Risk for Global Opportunity</p>
              <p className="text-2xl text-base-100">Multiply Potential. Minimize Risk</p>
              <div><Button variant="default">Discover how</Button></div>
            </div>
            <div className="bg-white p-4 lg:px-6 lg:py-8 w-[450px] rounded-lg">
              <p className="text-base-800 w-full text-lg mb-8 font-bold">Start your jorney to financial freedom</p>
              <ContactForm  />
            </div>
          </div>
        </section>
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
