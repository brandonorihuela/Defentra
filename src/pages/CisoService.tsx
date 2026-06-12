import { ServicePageLayout } from "@/components/ServicePageLayout";

const benefits = [
  "Asesoría estratégica en seguridad de la información.",
  "Cumplimiento normativo.",
  "Gestión de riesgos y vulnerabilidades por criticidad.",
  "Definición de políticas y controles de seguridad.",
  "Reportes ejecutivos y métricas para dirección.",
];

const CisoService = () => {
  return (
    <ServicePageLayout
      title="CISO as a Service"
      subtitle="Dirección de seguridad bajo demanda para establecer gobierno, control y alineación con el negocio."
      intro="Un liderazgo senior sin sobredimensionar estructura"
      benefits={benefits}
      reasons={[
        {
          title: "Disponibilidad inmediata",
          description: "Capacidad ejecutiva y técnica desde el inicio del programa.",
        },
        {
          title: "Equipo multidisciplinario",
          description: "No dependes de una sola persona: integras especialidades clave.",
        },
        {
          title: "Visibilidad para dirección",
          description: "Indicadores claros para priorizar inversión y reducir exposición.",
        },
      ]}
      whatsappInterest="https://wa.me/528118413274?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20CISO%20as%20a%20Service"
      whatsappConsult="https://wa.me/528118413274?text=Hola%2C%20quiero%20agendar%20una%20consulta%20de%20CISO%20as%20a%20Service"
    />
  );
};

export default CisoService;
