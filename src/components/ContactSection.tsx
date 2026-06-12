import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating an API call
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
    <section id="contacto-home" className="section-shell bg-secondary text-secondary-foreground">
      <div className="container px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Contacto</p>
              <h2 className="mt-3 text-balance text-3xl font-bold md:text-4xl">Conversemos sobre tu siguiente prioridad de seguridad.</h2>
              <p className="mt-5 leading-relaxed text-secondary-foreground/80">
                Escríbenos directamente o utiliza el formulario para detallar tu requerimiento. Te respondemos con una ruta clara para tu caso.
              </p>
            </div>

            <div className="grid gap-5">
              <a
                href="mailto:comercial@defentra.io"
                className="rounded-2xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-6 transition-colors hover:border-primary/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Correo</p>
                <p className="mt-2 text-xl font-semibold">comercial@defentra.io</p>
              </a>

              <a
                href="https://wa.me/528118413274?text=Hola%2C%20quiero%20una%20evaluación%20de%20ciberseguridad"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-6 transition-colors hover:border-primary/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">WhatsApp</p>
                <p className="mt-2 text-xl font-semibold">+52 81 1841 3274</p>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-secondary-foreground/15 bg-card p-8 text-foreground shadow-2xl lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input 
                    id="name" 
                    placeholder="Tu nombre" 
                    required 
                    className="border-border/60 bg-muted/30 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo corporativo</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="nombre@empresa.com" 
                    required 
                    className="border-border/60 bg-muted/30 focus-visible:ring-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Empresa / Organización</Label>
                <Input 
                  id="company" 
                  placeholder="Nombre de tu empresa" 
                  required 
                  className="border-border/60 bg-muted/30 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">¿En qué podemos ayudarte?</Label>
                <Textarea 
                  id="message" 
                  placeholder="Cuéntanos brevemente sobre tu proyecto o necesidad de seguridad..." 
                  className="min-h-[120px] resize-none border-border/60 bg-muted/30 focus-visible:ring-primary"
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
    </section>
  );
};
