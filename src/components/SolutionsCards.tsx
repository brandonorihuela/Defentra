import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "CISO as a Service",
    description: "Dirección estratégica en seguridad para fortalecer gobierno, cumplimiento y continuidad.",
    href: "/servicios/ciso",
  },
  {
    title: "Architect as a Service",
    description: "Diseño de arquitecturas robustas para proteger infraestructura, datos y procesos críticos.",
    href: "/servicios/architect",
  },
  {
    title: "Awareness as a Service",
    description: "Programas de capacitación para reducir riesgos humanos y elevar la madurez del equipo.",
    href: "/servicios/awareness",
  },
];

export const SolutionsCards = () => {
  return (
    <section className="section-shell bg-background" id="servicios-home">
      <div className="container px-4">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Servicios principales</p>
            <h2 className="text-balance text-3xl font-bold text-secondary md:text-4xl">Soluciones con enfoque ejecutivo y técnico.</h2>
          </div>
          <Link to="/contact" className="text-sm font-semibold text-secondary transition-colors hover:text-primary">
            Agenda una reunión <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              to={solution.href}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl"
            >
              <h3 className="mb-2 text-xl font-semibold text-secondary">{solution.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-secondary transition-colors group-hover:text-primary">
                Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
