const valueProps = [
  {
    title: "Cobertura integral",
    description: "Unimos tecnología, procesos y personas para construir una defensa consistente en toda la operación.",
  },
  {
    title: "Ejecución orientada a riesgo",
    description: "Priorizamos controles y acciones con base en impacto real para acelerar resultados medibles.",
  },
  {
    title: "Nivel profesional certificado",
    description: "Equipo senior con experiencia en normativas, arquitecturas empresariales y respuesta a incidentes.",
  },
  {
    title: "Relación de largo plazo",
    description: "Trabajamos como partner estratégico, con acompañamiento cercano y mejora continua.",
  },
];

export const ValuePropositionSection = () => {
  return (
    <section className="section-shell bg-secondary text-secondary-foreground" id="valor-home">
      <div className="container px-4">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Propuesta de valor</p>
          <h2 className="text-balance text-3xl font-bold md:text-4xl">Un modelo de seguridad serio, claro y accionable.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {valueProps.map((prop, index) => (
            <article key={index} className="rounded-2xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-6 md:p-7">
              <h3 className="mb-2 border-l-2 border-primary pl-4 text-xl font-semibold">{prop.title}</h3>
              <p className="text-sm leading-relaxed text-secondary-foreground/78">{prop.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
