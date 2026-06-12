import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ha sido un cambio radical para nosotros, honestamente. Ha sido una diferencia de la noche a la mañana desde que hicimos el cambio.",
    author: "Coriscana, Director de Infraestructura Tecnológica",
    company: "Distrito del Este de Texas",
  },
  {
    quote: "He trabajado con proveedores durante más de 18 años y puedo atestiguar que Defentra se destaca de los demás. Con su excelente servicio al cliente y línea de productos de seguridad, puedo enfocarme más en mis objetivos diarios en un entorno reactivo.",
    author: "Distrito Escolar Independiente de Weslaco",
    company: "",
  },
  {
    quote: "Hemos trabajado con ustedes durante casi 6 años. Probablemente una de las asociaciones más inteligentes y mejores que hemos hecho.",
    author: "Marble Falls ISD, Director Ejecutivo de Tecnología",
    company: "Distrito Escolar del Centro Norte de Texas",
  },
  {
    quote: "Es simple: Continúa satisfaciendo nuestras necesidades.",
    author: "Seguin ISD, Administrador de Red",
    company: "Distrito Escolar del Centro de Texas",
  },
  {
    quote: "Todo funciona excelente y es el mejor soporte en el negocio.",
    author: "Syracuse City Schools, Gerente de Operaciones y Administrador de Red",
    company: "Distrito Escolar de NY",
  },
];

const clientLogos = [
  "Los Fresnos ISD",
  "Seguin ISD",
  "Irving ISD",
  "Alamo Heights ISD",
  "Round Rock ISD",
  "Dickinson ISD",
  "Weslaco ISD",
  "Boerne ISD",
  "Arlington ISD",
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-foreground mb-2">
            Soluciones Inteligentes y Probadas para los
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Desafíos de Educación Actuales
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-card rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-muted-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-card rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-muted-foreground" />
          </button>

          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg mx-12">
            <Quote className="w-12 h-12 text-primary mb-6" />
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="border-t border-border pt-6">
              <p className="font-semibold text-foreground">
                {testimonials[currentIndex].author}
              </p>
              {testimonials[currentIndex].company && (
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].company}
                </p>
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos Marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 py-4 px-6 bg-card rounded-lg shadow"
              >
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
