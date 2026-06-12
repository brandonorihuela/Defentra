import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-shell">
        <div className="container px-4">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Contacto</p>
            <h1 className="text-balance text-4xl font-bold text-secondary md:text-5xl">Hablemos de tus prioridades de ciberseguridad.</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Puedes escribirnos por correo o por WhatsApp para revisar tu caso y proponerte una ruta clara de trabajo.
            </p>
          </div>

          <section className="grid gap-6 md:grid-cols-2">
            <a
              href="mailto:comercial@defentra.io"
              className="rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Correo</p>
              <h2 className="mt-3 text-2xl font-semibold text-secondary">comercial@defentra.io</h2>
              <p className="mt-3 text-sm text-muted-foreground">Respuesta durante horario laboral.</p>
            </a>

            <a
              href="https://wa.me/528118413274?text=Hola%2C%20quiero%20información%20sobre%20sus%20servicios"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">WhatsApp</p>
              <h2 className="mt-3 text-2xl font-semibold text-secondary">+52 81 1841 3274</h2>
              <p className="mt-3 text-sm text-muted-foreground">Canal directo para atención inicial.</p>
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
