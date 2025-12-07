import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
            Ready for Adventure?
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            START YOUR JOURNEY TODAY
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experience the thrill of the Mahindra Thar. Book a test drive at your nearest 
            dealership or explore our exclusive offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" className="group">
              Book Test Drive
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              View Price List
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-display text-xl text-foreground">1800-123-8888</p>
                </div>
              </div>
            </div>
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Find Dealer</p>
                  <p className="font-display text-xl text-foreground">Locate Nearby</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
