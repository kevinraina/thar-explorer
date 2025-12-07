import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/thar-hero.jpg";

const HeroSection = () => {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mahindra Thar conquering desert terrain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            The Legend Returns
          </p>
        </div>
        
        <h1 
          className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          MAHINDRA THAR
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Born for the wild. Built for adventure. The all-new Thar is ready to take on any terrain with its legendary 4x4 capabilities.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button variant="hero" size="xl">
            Explore Now
          </Button>
          <Button variant="outline" size="xl">
            Watch Video
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#specs" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown size={24} />
        </a>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-card/80 backdrop-blur-md border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-primary">152</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">BHP Power</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-primary">300</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">NM Torque</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-primary">4x4</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Drive System</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-primary">226</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">MM Ground Clearance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
