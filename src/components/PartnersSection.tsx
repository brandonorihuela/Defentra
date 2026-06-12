import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const partnerLogos = [
  "Picus", "Rapid7", "Rubrik", "Torii", "Unit42", "Zscaler",
  "Abnormal", "Arctic Wolf", "Ativion", "AM", "Bitdefender", "Black Fog",
  "Cohesity", "Cortex", "CriticalStart", "CrowdStrike", "Cymulate", "Darktrace",
  "DIR", "FileWave", "Fortra", "GoGuardian", "HackerOne", "Keeper",
  "Mimecast", "Minerva", "MITRE", "NIST", "Okta", "Palo Alto Networks",
];

export const PartnersSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* CTA with Phone */}
        <div className="flex justify-center mb-12">
          <a
            href="tel:2109464686"
            className="flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Phone className="w-6 h-6 text-primary" />
            <span className="font-bold text-foreground">210.946.4686</span>
          </a>
        </div>

        {/* Partner CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aumenta tus Ingresos y Alcance
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Conviértete en un Socio Aprobado de Defentra
          </p>

          {/* Partner Badge */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-4xl font-bold">DF</span>
            </div>
            <div className="max-w-xl text-left">
              <p className="text-muted-foreground leading-relaxed">
                Aumenta tu alcance con un Revendedor de Ciberseguridad experimentado con más de 100 clientes
                en contratos activos en todo el país. Defentra está en cooperativas de compras para
                facilitar la adquisición en el mercado SLED mientras también actúa como asesor de confianza con
                múltiples productos en varios clientes.
              </p>
            </div>
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            APLICAR HOY
          </Button>
        </div>

        {/* Partner Logos Marquee */}
        <div className="overflow-hidden py-8">
          <div className="flex animate-marquee">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 py-4 px-6 bg-card rounded-lg shadow min-w-[150px] h-16 flex items-center justify-center"
              >
                <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
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
