import { Gauge, Fuel, Cog, Mountain, Shield, Zap } from "lucide-react";

const specs = [
  {
    icon: Gauge,
    label: "Engine",
    value: "2.0L mStallion",
    description: "Turbocharged Petrol",
  },
  {
    icon: Zap,
    label: "Power",
    value: "152 BHP",
    description: "@ 5000 RPM",
  },
  {
    icon: Cog,
    label: "Torque",
    value: "300 Nm",
    description: "@ 1500-3000 RPM",
  },
  {
    icon: Fuel,
    label: "Mileage",
    value: "15.2 km/l",
    description: "ARAI Certified",
  },
  {
    icon: Mountain,
    label: "Ground Clearance",
    value: "226 mm",
    description: "Unladen",
  },
  {
    icon: Shield,
    label: "Safety Rating",
    value: "4 Stars",
    description: "Global NCAP",
  },
];

const SpecsSection = () => {
  return (
    <section id="specs" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
            Specifications
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            POWER MEETS PRECISION
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every detail engineered for the ultimate off-road experience. The Thar delivers 
            uncompromising performance whether you're conquering mountains or city streets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <div
              key={spec.label}
              className="group gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <spec.icon size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    {spec.label}
                  </p>
                  <p className="font-display text-3xl text-foreground mb-1">
                    {spec.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {spec.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
