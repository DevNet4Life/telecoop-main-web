import { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";

// CMS-ready slide data — imageUrl, title, subtitle, and CTAs will be
// managed through the content manager once the CMS is connected.
export interface HeroSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; page: string };
  secondaryCta: { label: string; page: string };
}

export const DEFAULT_SLIDES: HeroSlide[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
    title: "Connecting Communities Across the Philippines",
    subtitle:
      "Empowering Barangay-based micro ICT service providers with technical assistance, legal guidance, and community development programs since 2019.",
    primaryCta: { label: "Join Our Cooperative", page: "membership" },
    secondaryCta: { label: "Learn Our Story", page: "about" },
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    title: "Affordable Internet for Every Filipino",
    subtitle:
      "Our member-owned cooperative model ensures no profit margins for external shareholders — just community-first, reliable internet service.",
    primaryCta: { label: "View Our Services", page: "services" },
    secondaryCta: { label: "Learn More", page: "about" },
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80",
    title: "Building the Future of Rural Connectivity",
    subtitle:
      "From Central Luzon to multi-regional coverage — we expand ICT infrastructure in underserved areas where it matters most.",
    primaryCta: { label: "Become a Member", page: "membership" },
    secondaryCta: { label: "Contact Us", page: "contact" },
  },
];

interface HeroSliderProps {
  onNavigate: (page: string) => void;
  slides?: HeroSlide[]; // pass from CMS in the future
}

export function HeroSlider({ onNavigate, slides = DEFAULT_SLIDES }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <div
      className="relative w-full h-[580px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: index === current ? 1 : 0 }}
          aria-hidden={index !== current}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms] ease-linear"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              transform: index === current ? "scale(1.05)" : "scale(1)",
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center text-white px-6">
              <h1
                className="text-white mb-6 text-3xl lg:text-5xl font-bold leading-tight"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
              >
                {slide.title}
              </h1>
              <p
                className="mb-8 text-lg lg:text-xl text-white/90 max-w-2xl mx-auto"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
              >
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => onNavigate(slide.primaryCta.page)}
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg"
                >
                  {slide.primaryCta.label}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate(slide.secondaryCta.page)}
                  className="border-white text-white bg-white/10 hover:bg-white hover:text-foreground backdrop-blur-sm"
                >
                  {slide.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
