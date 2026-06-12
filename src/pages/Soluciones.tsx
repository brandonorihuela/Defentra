import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { solutions } from "@/data/solutions";

const Soluciones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="section-shell border-b border-border bg-[var(--gradient-hero)]">
          <div className="container px-4">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Soluciones
              </p>
              <h1 className="text-balance text-4xl font-bold text-secondary md:text-5xl">
                Tecnología validada de nuestros aliados estratégicos.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Integramos plataformas líderes de ciberseguridad para acompañar cada etapa de tu estrategia: inteligencia, operación y defensa.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell bg-background">
          <div className="container px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((sol) => (
                <Link
                  key={sol.slug}
                  to={`/soluciones/${sol.slug}`}
                  className="group block [perspective:1200px]"
                  aria-label={`Ver ${sol.name}`}
                >
                  <div className="relative h-64 w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card p-8 [backface-visibility:hidden]">
                      <div className="flex h-20 items-center justify-center">
                        <img
                          src={sol.logo}
                          alt={sol.name}
                          className="max-h-16 w-auto object-contain"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const fb = target.nextElementSibling as HTMLElement | null;
                            if (fb) fb.style.display = "block";
                          }}
                        />
                        <span
                          className="hidden text-3xl font-bold text-secondary"
                          aria-hidden
                        >
                          {sol.name}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-secondary">{sol.name}</h3>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl border border-primary/40 bg-secondary p-7 text-center text-secondary-foreground [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <h3 className="text-xl font-semibold">{sol.name}</h3>
                      <p className="text-sm leading-relaxed text-secondary-foreground/85">
                        {sol.shortDescription}
                      </p>
                      <span className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        Ver más →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Soluciones;
