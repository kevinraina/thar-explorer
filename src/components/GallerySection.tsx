import { useState } from "react";
import { X } from "lucide-react";
import tharOffroad1 from "@/assets/thar-offroad1.jpg";
import tharOffroad2 from "@/assets/thar-offroad2.jpg";
import tharInterior from "@/assets/thar-interior.jpg";
import tharBlack from "@/assets/thar-black.jpg";
import tharRed from "@/assets/thar-red.jpg";
import tharHero from "@/assets/thar-hero.jpg";

const galleryImages = [
  { src: tharOffroad1, alt: "Thar conquering rocky mountain trail", category: "Off-Road" },
  { src: tharOffroad2, alt: "Thar crossing river stream", category: "Adventure" },
  { src: tharInterior, alt: "Premium interior dashboard", category: "Interior" },
  { src: tharBlack, alt: "Thar in Galaxy Grey", category: "Exterior" },
  { src: tharRed, alt: "Thar in Napoli Black", category: "Exterior" },
  { src: tharHero, alt: "Thar desert adventure", category: "Off-Road" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
            Gallery
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            ADVENTURE AWAITS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From rugged mountain trails to city streets, the Thar is built for every journey.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer hover-lift ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`${index === 0 ? "aspect-square" : "aspect-video"}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {image.category}
                </span>
                <p className="text-foreground text-sm mt-2">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image fullscreen"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
