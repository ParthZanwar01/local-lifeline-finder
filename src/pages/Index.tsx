import { Header } from "@/components/Header";
import { VerdantHero } from "@/components/VerdantHero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <VerdantHero />
      <WelcomeSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
};

export default Index;
