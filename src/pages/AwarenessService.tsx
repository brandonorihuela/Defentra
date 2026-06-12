import { ServicePageLayout } from "@/components/ServicePageLayout";

const benefits = [
  "Programas de capacitación adaptados al perfil de riesgo.",
  "Simulacros de phishing y escenarios de ingeniería social.",
  "Campañas de concientización continuas por rol.",
  "Materiales de aprendizaje actualizados y accionables.",
  "Evaluaciones periódicas de conocimiento.",
  "Métricas de progreso para liderazgo y compliance.",
];

const AwarenessService = () => {
  return (
    <ServicePageLayout
      title="Awareness as a Service"
      subtitle="Desarrolla una cultura de seguridad activa para reducir errores humanos y reforzar la primera línea de defensa."
      intro="Formación constante para un equipo más preparado"
      benefits={benefits}
      reasons={[
        {
          title: "Cobertura para toda la organización",
          description: "Contenido para usuarios, mandos medios y liderazgo ejecutivo.",
        },
        {
          title: "Reducción de riesgo humano",
          description: "Entrenamiento práctico para detectar, reportar y responder mejor.",
        },
        {
          title: "Aprendizaje útil",
          description: "Metodología clara con seguimiento continuo y mejoras iterativas.",
        },
      ]}
      whatsappInterest="https://wa.me/528118413274?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20Awareness%20as%20a%20Service"
      whatsappConsult="https://wa.me/528118413274?text=Hola%2C%20quiero%20agendar%20una%20consulta%20de%20Awareness%20as%20a%20Service"
    />
  );
};

export default AwarenessService;
