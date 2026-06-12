import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const partners = [
  {
    badge: "MEJOR DESEMPEÑO",
    subtitle: "Mejor Firewall NextGen de 2024",
    logo: "Palo Alto Networks",
    product: "Firewall de Nueva Generación",
    color: "text-foreground",
  },
  {
    badge: "MEJOR DESEMPEÑO",
    subtitle: "Más Implementado en 6 Meses",
    logo: "Abnormal",
    product: "Seguridad de Email",
    color: "text-foreground",
  },
  {
    badge: "MEJOR DESEMPEÑO",
    subtitle: "Mejor Innovador de 2024",
    logo: "CrowdStrike",
    product: "SIEM NextGen y Protección de Identidad",
    color: "text-foreground",
  },
];

export const TopPerformers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-muted rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-muted-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-muted rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-muted-foreground" />
          </button>

          {/* Carousel Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6"
              >
                <span className="inline-block text-primary font-bold text-xl tracking-wide">
                  {partner.badge}
                </span>
                <p className="text-muted-foreground text-sm">{partner.subtitle}</p>
                <div className="py-6 px-4 bg-muted/50 rounded-lg min-h-[120px] flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">{partner.logo}</span>
                </div>
                <p className="font-semibold text-foreground">{partner.product}</p>
                <a
                  href="#"
                  className="inline-block text-primary font-semibold text-sm hover:underline"
                >
                  SABER MÁS
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
