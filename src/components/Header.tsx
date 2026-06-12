import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "INICIO", href: "/" },
  { label: "NOSOTROS", href: "/about" },
  { label: "SOLUCIONES", href: "/soluciones" },
  { label: "CONTACTO", href: "/contact" },
];

const servicesItems = [
  { label: "CISO as a Service", href: "/servicios/ciso" },
  { label: "Architect as a Service", href: "/servicios/architect" },
  { label: "Awareness as a Service", href: "/servicios/awareness" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="container px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Ir al inicio de Defentra">
            <img src="/defentra-logo-completo.png" alt="Defentra" className="h-11 w-auto md:h-12" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  isActive(link.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-semibold tracking-wide text-muted-foreground transition-colors hover:text-foreground">
                  SERVICIOS
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 border-border/70 bg-card">
                {servicesItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.href} className="cursor-pointer text-[0.92rem]">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <button
            className="rounded-md p-2 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="space-y-1 border-t border-border/70 py-5 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block rounded-lg px-3 py-3 text-sm font-semibold tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="py-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                SERVICIOS
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-1 border-l border-border pl-4">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
