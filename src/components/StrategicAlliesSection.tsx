import { ArrowUpRight } from "lucide-react";
//
const allies = [
  {
    name: "KELA",
    description: "Inteligencia de amenazas para monitoreo de riesgos emergentes.",
    website: "https://www.kelacyber.com/",
  },
  {
    name: "ManageEngine",
    description: "Operacion de TI y seguridad con visibilidad centralizada.",
    website: "https://www.manageengine.com/",
  },
  {
    name: "Trend Micro",
    description: "Proteccion avanzada para endpoint, correo, nube y red.",
    website: "https://www.trendmicro.com/",
  },
];

const approach = [
  {
    title: "Evaluamos",
    text: "Diagnostico inicial de postura, brechas y prioridades.",
  },
  {
    title: "Diseñamos",
    text: "Arquitectura y plan de accion por fases y objetivos.",
  },
  {
    title: "Implementamos",
    text: "Ejecucion, mejora continua y acompanamiento operativo.",
  },
];

export const StrategicAlliesSection = () => {
  return (
    <section className="section-shell bg-background" id="aliados-home">
      <div className="container px-4">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Alianzas estrategicas</p>
          <h2 className="text-balance text-3xl font-bold text-secondary md:text-4xl">Tecnologia validada para una ejecucion confiable.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 md:grid-cols-3">
            {allies.map((ally) => (
              <article key={ally.name} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold text-secondary">{ally.name}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{ally.description}</p>
                <a
                  href={ally.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-secondary transition-colors hover:text-primary"
                >
                  Sitio oficial <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-muted/45 p-6 md:p-8">
            <h3 className="mb-6 text-2xl font-semibold text-secondary">Como trabajamos</h3>
            <div className="space-y-5">
              {approach.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-background p-4">
                  <p className="font-semibold text-secondary">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
