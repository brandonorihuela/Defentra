import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Shield, Lock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";

const MarketingLP = () => {
  const { token } = useParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simple validation to ensure the token exists (can be expanded with specific valid tokens)
  if (!token) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registro exitoso",
        description: "Un consultor senior se pondrá en contacto contigo en breve.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      {/* Mini Header - No Nav to keep focus on conversion */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-center">
          <img src="/defentra-logo-completo.png" alt="Defentra" className="h-9 w-auto" />
        </div>
      </header>

      <main>
        {/* Hero Section for LP */}
        <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-16 lg:py-24">
          <div className="surface-grid absolute inset-0 opacity-40" />
          <div className="container relative z-10 px-4">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                  OFERTA EXCLUSIVA DE CONSULTORÍA
                </div>
                <h1 className="text-balance text-4xl font-extrabold leading-tight text-secondary md:text-5xl lg:text-6xl">
                  Fortalece tu infraestructura con un enfoque <span className="text-primary">Zero Trust</span>.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Ayudamos a organizaciones a mitigar riesgos críticos mediante arquitecturas de seguridad modernas y acompañamiento estratégico de alto nivel.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Evaluación de brechas de seguridad gratuita.",
                    "Roadmap de cumplimiento normativo.",
                    "Optimización de costos en herramientas de TI."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-secondary font-medium">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* High Conversion Form */}
              <div className="rounded-3xl border border-border/50 bg-card p-8 shadow-2xl lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-secondary">Solicita una sesión estratégica</h3>
                  <p className="text-sm text-muted-foreground mt-2">Completa tus datos y un especialista te contactará.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="lp-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nombre completo</Label>
                    <Input id="lp-name" placeholder="Ej. Juan Pérez" required className="bg-muted/30 border-border/40" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lp-email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Correo Corporativo</Label>
                    <Input id="lp-email" type="email" placeholder="juan@empresa.com" required className="bg-muted/30 border-border/40" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lp-phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Teléfono / WhatsApp</Label>
                    <Input id="lp-phone" type="tel" placeholder="+52 ..." required className="bg-muted/30 border-border/40" />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-14 rounded-xl bg-primary text-secondary font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "PROCESANDO..." : "QUIERO MI EVALUACIÓN"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                  
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                    Privacidad garantizada • Sin compromisos
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Value Pillars */}
        <section className="py-20 bg-white">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary md:text-4xl">¿Por qué confiar en Defentra?</h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-8 rounded-3xl border border-border/40 bg-muted/10 text-center hover:bg-white hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">Estrategia Senior</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Acompañamiento directo por especialistas con más de 15 años de experiencia en el sector.</p>
              </div>

              <div className="p-8 rounded-3xl border border-border/40 bg-muted/10 text-center hover:bg-white hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">Modelo Zero Trust</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">No asumimos confianza. Verificamos cada acceso para proteger tus activos más críticos.</p>
              </div>

              <div className="p-8 rounded-3xl border border-border/40 bg-muted/10 text-center hover:bg-white hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">Enfoque Ejecutivo</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Traducimos riesgos técnicos en impacto de negocio para facilitar la toma de decisiones.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MarketingLP;
