import { ServicePageLayout } from "@/components/ServicePageLayout";

const benefits = [
  "Diseño de arquitecturas de seguridad robustas.",
  "Evaluación de infraestructura actual y brechas técnicas.",
  "Plan de implementación por etapas y prioridades.",
  "Selección de tecnologías alineadas a objetivo de negocio.",
  "Integración con sistemas existentes y gobierno TI.",
  "Documentación técnica y lineamientos operativos.",
];

const ArchitectService = () => {
  return (
    <ServicePageLayout
      title="Architect as a Service"
      subtitle="Arquitectura de seguridad para construir una base técnica escalable, gobernable y resiliente."
      intro="Diseño con criterio de riesgo y continuidad"
      benefits={benefits}
      reasons={[
        {
          title: "Enfoque integral",
          description: "Conectamos identidad, red, endpoint, datos y nube en una sola estrategia.",
        },
        {
          title: "Buenas prácticas",
          description: "Aplicamos estándares para mejorar seguridad sin frenar operación.",
        },
        {
          title: "Escalabilidad",
          description: "Arquitecturas preparadas para crecimiento y cambios de negocio.",
        },
      ]}
      whatsappInterest="https://wa.me/528118413274?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20Architect%20as%20a%20Service"
      whatsappConsult="https://wa.me/528118413274?text=Hola%2C%20quiero%20agendar%20una%20consulta%20de%20Architect%20as%20a%20Service"
    />
  );
};

export default ArchitectService;
