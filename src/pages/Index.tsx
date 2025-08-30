import { HeroSection } from "@/components/HeroSection";
import { FeaturedResources } from "@/components/FeaturedResources";
import { ResourceDirectory } from "@/components/ResourceDirectory";
import { AddResourceForm } from "@/components/AddResourceForm";
import { CommunityNews } from "@/components/CommunityNews";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedResources />
      <ResourceDirectory />
      <CommunityNews />
      <AddResourceForm />
      <Footer />
    </main>
  );
};

export default Index;
