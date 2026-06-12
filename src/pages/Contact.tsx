import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-shell">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="max-w-xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Contacto</p>
                <h1 className="text-balance text-4xl font-bold text-secondary md:text-5xl">Hablemos de tus prioridades de ciberseguridad.</h1>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Estamos listos para escucharte. Puedes utilizar el formulario o contactarnos directamente por nuestros canales oficiales.
                </p>
              </div>

              <section className="grid gap-6">
                <a
                  href="mailto:comercial@defentra.io"
                  className="rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Correo electrónico</p>
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

            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl lg:p-10">
              <h3 className="mb-6 text-2xl font-semibold text-secondary">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input 
                      id="name" 
                      placeholder="Tu nombre" 
                      required 
                      className="border-border/60 bg-muted/20 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo corporativo</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="nombre@empresa.com" 
                      required 
                      className="border-border/60 bg-muted/20 focus-visible:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa / Organización</Label>
                  <Input 
                    id="company" 
                    placeholder="Nombre de tu empresa" 
                    required 
                    className="border-border/60 bg-muted/20 focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">¿En qué podemos ayudarte?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Cuéntanos brevemente sobre tu proyecto o necesidad de seguridad..." 
                    className="min-h-[120px] resize-none border-border/60 bg-muted/20 focus-visible:ring-primary"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
                
                <p className="text-center text-[10px] text-muted-foreground uppercase tracking-wider">
                  Protección de datos garantizada bajo estándares de ciberseguridad.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
