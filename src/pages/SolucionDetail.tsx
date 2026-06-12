import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { getSolutionBySlug } from "@/data/solutions";

const SolucionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="section-shell">
          <div className="container px-4 text-center">
            <h1 className="text-3xl font-bold text-secondary">Solución no encontrada</h1>
            <p className="mt-4 text-muted-foreground">
              La solución que buscas no está disponible.
            </p>
            <Link
              to="/soluciones"
              className="mt-6 inline-flex rounded-full border border-secondary/20 px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Ver todas las soluciones
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const waText = `Hola, quiero información sobre ${solution.name}`;
  const waUrl = `https://wa.me/528118413274?text=${encodeURIComponent(waText)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="section-shell border-b border-border bg-[var(--gradient-hero)]">
          <div className="container px-4">
            <div className="max-w-3xl">
              <Link
                to="/soluciones"
                className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:underline"
              >
                ← Soluciones
              </Link>
              <div className="mb-6 flex h-24 items-center">
                <img
                  src={solution.logo}
                  alt={solution.name}
                  className="max-h-20 w-auto object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fb = target.nextElementSibling as HTMLElement | null;
                    if (fb) fb.style.display = "block";
                  }}
                />
                <span
                  className="hidden text-4xl font-bold text-secondary"
                  aria-hidden
                >
                  {solution.name}
                </span>
              </div>
              <h1 className="text-balance text-4xl font-bold text-secondary md:text-5xl">
                {solution.name}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {solution.fullDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={waUrl} target="_blank" rel="noreferrer">
                  <Button size="lg" className="rounded-full px-8">
                    Contactar por WhatsApp
                  </Button>
                </a>
                <a href={solution.website} target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    Sitio oficial <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell bg-background">
          <div className="container px-4">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-3xl font-bold text-secondary">Capacidades principales</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {solution.features.map((feature) => (
                    <article
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {feature}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="rounded-3xl border border-border bg-muted/35 p-7">
                <h3 className="text-2xl font-semibold text-secondary">
                  ¿Listo para implementar {solution.name}?
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Te acompañamos desde la evaluación hasta la puesta en marcha, con asesoría especializada y seguimiento continuo.
                </p>
                <a href={waUrl} target="_blank" rel="noreferrer" className="mt-6 block">
                  <Button size="lg" className="w-full rounded-full">
                    Contáctanos por WhatsApp
                  </Button>
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolucionDetail;
