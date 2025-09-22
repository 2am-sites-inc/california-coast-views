import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DestinationsGrid } from "@/components/DestinationsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DestinationsGrid />
    </div>
  );
};

export default Index;
