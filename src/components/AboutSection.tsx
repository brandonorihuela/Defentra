import { Link } from "react-router-dom";

const milestones = [
  "Consultoría estratégica para dirección y comités de riesgo.",
  "Arquitecturas de seguridad enfocadas en escalabilidad y control.",
  "Acompañamiento continuo para operaciones y respuesta.",
];

export const AboutSection = () => {
  return (
    <section className="section-shell bg-background" id="nosotros-home">
      <div className="container px-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Quiénes somos</p>
            <h2 className="text-balance text-3xl font-bold text-secondary md:text-4xl">Defentra es un socio especializado en ciberseguridad empresarial.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Integramos estrategia, arquitectura y operación para ayudar a organizaciones que necesitan resultados sólidos, gobernables y sostenibles en seguridad digital.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex rounded-full border border-secondary/20 px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Conocer Defentra
            </Link>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 md:p-8">
            <h3 className="mb-5 text-xl font-semibold text-secondary">Enfoque de trabajo</h3>
            <ul className="space-y-4">
              {milestones.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
