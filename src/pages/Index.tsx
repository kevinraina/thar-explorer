import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SpecsSection from "@/components/SpecsSection";
import ColorPicker from "@/components/ColorPicker";
import GallerySection from "@/components/GallerySection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SpecsSection />
        <ColorPicker selectedColor={selectedColor} onColorChange={setSelectedColor} />
        <GallerySection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
