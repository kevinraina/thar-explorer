import { useState } from "react";
import tharBlack from "@/assets/thar-black.jpg";
import tharRed from "@/assets/thar-red.jpg";
import tharWhite from "@/assets/thar-white.jpg";

interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const colors = [
  { id: "black", name: "Galaxy Grey", hex: "#2a2a2a", image: tharBlack },
  { id: "red", name: "Napoli Black", hex: "#8B0000", image: tharRed },
  { id: "white", name: "Arctic White", hex: "#f5f5f5", image: tharWhite },
];

const ColorPicker = ({ selectedColor, onColorChange }: ColorPickerProps) => {
  const currentColor = colors.find((c) => c.id === selectedColor) || colors[0];

  return (
    <section id="colors" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
            Personalize
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            CHOOSE YOUR STYLE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Express yourself with a range of bold colors designed to stand out on any terrain.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Car Image */}
          <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden shadow-card">
            <img
              src={currentColor.image}
              alt={`Mahindra Thar in ${currentColor.name}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            
            {/* Color Name Badge */}
            <div className="absolute bottom-6 left-6 bg-card/80 backdrop-blur-md rounded-lg px-4 py-2 border border-border">
              <p className="text-sm text-muted-foreground">Selected Color</p>
              <p className="font-display text-xl text-foreground">{currentColor.name}</p>
            </div>
          </div>

          {/* Color Swatches */}
          <div className="flex justify-center gap-6">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => onColorChange(color.id)}
                className={`group relative p-1 rounded-full transition-all duration-300 ${
                  selectedColor === color.id
                    ? "ring-2 ring-primary ring-offset-4 ring-offset-background"
                    : "hover:ring-2 hover:ring-muted hover:ring-offset-2 hover:ring-offset-background"
                }`}
              >
                <div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorPicker;
