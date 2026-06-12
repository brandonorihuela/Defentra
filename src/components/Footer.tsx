import { Link } from "react-router-dom";

const services = [
  { label: "CISO as a Service", href: "/servicios/ciso" },
  { label: "Architect as a Service", href: "/servicios/architect" },
  { label: "Awareness as a Service", href: "/servicios/awareness" },
];

const company = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <img src="/defentra-logo-completo.png" alt="Defentra" className="h-12 w-auto" />
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Consultoría y servicios especializados en ciberseguridad para organizaciones que requieren control, cumplimiento y crecimiento seguro.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-secondary">Servicios</h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-secondary">Empresa</h4>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-1 text-sm text-muted-foreground">
              <a href="mailto:comercial@defentra.io" className="block hover:text-primary">
                comercial@defentra.io
              </a>
              <a href="tel:+528118413274" className="block hover:text-primary">
                +52 81 1841 3274
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Defentra. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
