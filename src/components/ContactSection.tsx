export const ContactSection = () => {
  return (
    <section id="contacto-home" className="section-shell bg-secondary text-secondary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Contacto</p>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-4xl">Conversemos sobre tu siguiente prioridad de seguridad.</h2>
          <p className="mt-5 leading-relaxed text-secondary-foreground/80">
            Escríbenos por correo o por WhatsApp y te respondemos con una ruta clara para tu caso.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <a
            href="mailto:comercial@defentra.io"
            className="rounded-3xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-7 transition-colors hover:border-primary/40"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Correo</p>
            <p className="mt-3 text-2xl font-semibold">comercial@defentra.io</p>
          </a>

          <a
            href="https://wa.me/528118413274?text=Hola%2C%20quiero%20una%20evaluación%20de%20ciberseguridad"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-7 transition-colors hover:border-primary/40"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">WhatsApp</p>
            <p className="mt-3 text-2xl font-semibold">+52 81 1841 3274</p>
          </a>
        </div>
      </div>
    </section>
  );
};
