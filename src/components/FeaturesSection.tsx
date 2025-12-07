import { useState } from "react";
import { Compass, Shield, Gauge, Wifi, Sun, Lock } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "4x4 Drivetrain",
    description: "Shift-on-the-fly 4WD system with low range for tackling the toughest terrains.",
    details: "The mechanical transfer case allows seamless switching between 2H, 4H, and 4L modes.",
  },
  {
    icon: Shield,
    title: "Built Tough",
    description: "Body-on-frame construction with independent front suspension for durability.",
    details: "Reinforced chassis designed to handle impacts and provide maximum off-road capability.",
  },
  {
    icon: Gauge,
    title: "Powerful Engine",
    description: "Choose between the 2.0L mStallion petrol or 2.2L mHawk diesel engine.",
    details: "Both engines deliver exceptional power and torque for any adventure.",
  },
  {
    icon: Sun,
    title: "Convertible Top",
    description: "Switch between hardtop and soft-top variants for open-air driving.",
    details: "Experience the freedom of roofless driving on scenic mountain roads.",
  },
  {
    icon: Wifi,
    title: "Connected SUV",
    description: "7-inch touchscreen with smartphone connectivity and navigation.",
    details: "Apple CarPlay and Android Auto compatibility keeps you connected on every journey.",
  },
  {
    icon: Lock,
    title: "Safety First",
    description: "ESP, ABS, dual airbags, and ISOFIX child seat mounts as standard.",
    details: "4-star Global NCAP safety rating ensures protection for all occupants.",
  },
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
            Features
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            BUILT FOR THE BOLD
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every feature designed with purpose. Every detail crafted for adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-primary/10 border-primary"
                    : "bg-card border-border hover:border-muted-foreground"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg transition-colors duration-300 ${
                      activeFeature === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <feature.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Detail */}
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="text-center">
              <div className="inline-flex p-6 rounded-2xl bg-primary/10 text-primary mb-6">
                {(() => {
                  const Icon = features[activeFeature].icon;
                  return <Icon size={48} />;
                })()}
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {features[activeFeature].description}
              </p>
              <p className="text-foreground/80">
                {features[activeFeature].details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
