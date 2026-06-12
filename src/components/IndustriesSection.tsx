const industries = [
  {
    title: "Educación",
    subtitle: "Controles para entornos híbridos, aulas conectadas y usuarios distribuidos.",
  },
  {
    title: "Gobierno y sector público",
    subtitle: "Estrategias de cumplimiento y protección de información sensible ciudadana.",
  },
  {
    title: "Empresas y PyMEs",
    subtitle: "Seguridad proporcional al crecimiento, sin complejidad innecesaria.",
  },
  {
    title: "Industria y operaciones",
    subtitle: "Defensa para infraestructura crítica, continuidad y trazabilidad operativa.",
  },
];

export const IndustriesSection = () => {
  return (
    <section className="section-shell bg-muted/40" id="industrias-home">
      <div className="container px-4">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Sectores</p>
          <h2 className="text-balance text-3xl font-bold text-secondary md:text-4xl">Alineamos seguridad con la realidad de cada operación.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <article key={industry.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-2 border-l-2 border-primary pl-3 text-lg font-semibold text-secondary">{industry.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{industry.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
