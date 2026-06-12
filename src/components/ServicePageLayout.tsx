import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

type ServiceReason = {
  title: string;
  description: string;
};

type ServicePageLayoutProps = {
  title: string;
  subtitle: string;
  intro: string;
  benefits: string[];
  reasons: ServiceReason[];
  whatsappInterest: string;
  whatsappConsult: string;
};

export const ServicePageLayout = ({
  title,
  subtitle,
  intro,
  benefits,
  reasons,
  whatsappInterest,
  whatsappConsult,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="section-shell border-b border-border bg-[var(--gradient-hero)]">
          <div className="container px-4">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Servicio especializado</div>
              <h1 className="text-balance text-4xl font-bold text-secondary md:text-5xl">{title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
              <a href={whatsappInterest} target="_blank" rel="noreferrer" className="mt-8 inline-flex">
                <Button size="lg" className="rounded-full px-8">Solicitar información</Button>
              </a>
            </div>
          </div>
        </section>

        <section className="section-shell bg-background">
          <div className="container px-4">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-3xl font-bold text-secondary">Qué incluye</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {benefits.map((benefit) => (
                    <article key={benefit} className="rounded-2xl border border-border bg-card p-5">
                      <p className="border-l-2 border-primary pl-3 text-sm leading-relaxed text-muted-foreground">{benefit}</p>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="rounded-3xl border border-border bg-muted/35 p-7">
                <h3 className="text-2xl font-semibold text-secondary">{intro}</h3>
                <div className="mt-6 space-y-5">
                  {reasons.map((reason) => (
                    <div key={reason.title} className="rounded-2xl border border-border bg-background p-4">
                      <p className="font-semibold text-secondary">{reason.title}</p>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </div>
                  ))}
                </div>
                <a href={whatsappConsult} target="_blank" rel="noreferrer" className="mt-8 block">
                  <Button size="lg" className="w-full rounded-full">Agendar consulta</Button>
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
