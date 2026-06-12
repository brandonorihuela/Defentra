import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const pillars = [
  {
    title: "Visión estratégica",
    text: "Traducimos riesgos técnicos en decisiones de negocio claras y medibles.",
  },
  {
    title: "Diseño y ejecución",
    text: "Construimos hojas de ruta realistas y acompañamos su implementación.",
  },
  {
    title: "Acompañamiento continuo",
    text: "No entregamos un documento y nos vamos: operamos junto a tu equipo.",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="section-shell border-b border-border bg-[var(--gradient-hero)]">
          <div className="container px-4">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Nosotros</p>
              <h1 className="text-balance text-4xl font-bold text-secondary md:text-5xl">Ayudamos a organizaciones a operar con seguridad, control y confianza.</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Defentra es una firma especializada en ciberseguridad empresarial. Integramos consultoría, arquitectura y operación para reducir exposición, acelerar cumplimiento y fortalecer la continuidad de negocio.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell bg-background">
          <div className="container px-4">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-3xl border border-border bg-card p-8 md:p-10">
                <h2 className="text-2xl font-semibold text-secondary">Nuestro enfoque</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Desde 2025, trabajamos con equipos directivos, líderes de TI y responsables operativos para construir capacidades de ciberseguridad sólidas, gobernables y sostenibles.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Nuestra prioridad es crear relaciones de largo plazo: propuestas útiles, implementaciones bien ejecutadas y seguimiento constante en cada etapa.
                </p>
              </article>

              <div className="space-y-4">
                {pillars.map((pillar) => (
                  <article key={pillar.title} className="rounded-2xl border border-border bg-muted/40 p-6">
                    <h3 className="text-lg font-semibold text-secondary">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
