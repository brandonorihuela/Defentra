import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const WhatsNewSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Main CTA */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Novedades Destacadas</h2>
            <p className="text-lg mb-6 opacity-90">
              Descubre los 8 Pasos para Restaurar Datos desde Respaldos Después de una Recuperación de Ransomware
            </p>
            <Button
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
            >
              DESCARGAR GUÍA DE MEJORES PRÁCTICAS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right - Blog Posts */}
          <div className="space-y-4">
            {[
              "A medida que la IA consume la experiencia, la claridad emocional se convierte en la verdadera ventaja competitiva",
              "Cuando las máquinas atacan: Cómo la IA está luchando contra la IA en ciberseguridad",
            ].map((title, index) => (
              <a
                key={index}
                href="#"
                className="block p-6 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
              >
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <span className="text-primary text-sm font-semibold mt-2 inline-block">
                  Leer Blog
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
