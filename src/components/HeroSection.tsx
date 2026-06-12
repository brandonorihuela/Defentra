import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-[var(--gradient-hero)]">
      <div className="surface-grid absolute inset-0 opacity-50" />
      <div className="container relative z-10 px-4 py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
              Consultoría y arquitectura de ciberseguridad
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight text-secondary md:text-5xl lg:text-6xl">
              Protección integral para decisiones tecnológicas más seguras.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Defentra combina estrategia, implementación y acompañamiento continuo para reducir riesgos reales, elevar el cumplimiento y fortalecer la resiliencia operativa.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link to="/servicios/ciso">Explorar servicios</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full px-8">
                <a
                  href="https://wa.me/528118413274?text=Hola%2C%20quiero%20información%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hablar por WhatsApp
                </a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/80 bg-card/95 p-4">
                <p className="text-2xl font-bold text-secondary">+20</p>
                <p className="text-sm text-muted-foreground">Proyectos en ejecución</p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-card/95 p-4">
                <p className="text-2xl font-bold text-secondary">Zero Trust</p>
                <p className="text-sm text-muted-foreground">Modelo de referencia</p>
              </div>
            </div>
          </div>

          <div className="soft-shadow rounded-3xl border border-border/70 bg-secondary p-8 text-secondary-foreground lg:p-9">
            <h2 className="text-2xl font-semibold">Presencia ejecutiva, ejecución técnica</h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/80">
              Trabajamos con liderazgo de negocio, equipos de TI y operaciones para construir una postura de seguridad coherente en todo el ciclo operativo.
            </p>

            <div className="mt-8 space-y-4">
              <article className="rounded-2xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-4">
                <p className="font-semibold">Gobierno y cumplimiento</p>
                <p className="text-sm text-secondary-foreground/75">Roadmaps de seguridad alineados a negocio y normativas.</p>
              </article>
              <article className="rounded-2xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-4">
                <p className="font-semibold">Visibilidad de amenazas</p>
                <p className="text-sm text-secondary-foreground/75">Detección temprana y priorización por impacto operativo.</p>
              </article>
              <article className="rounded-2xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-4">
                <p className="font-semibold">Cultura de seguridad</p>
                <p className="text-sm text-secondary-foreground/75">Capacitación práctica para convertir personas en defensa activa.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
