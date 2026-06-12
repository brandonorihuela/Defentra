import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SolutionsCards } from "@/components/SolutionsCards";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { AboutSection } from "@/components/AboutSection";
import { LogosBanner } from "@/components/LogosBanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SolutionsCards />
        <ValuePropositionSection />
        <LogosBanner />
        <IndustriesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
