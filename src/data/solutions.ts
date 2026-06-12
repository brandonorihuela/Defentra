export type Solution = {
  slug: string;
  name: string;
  logo: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  website: string;
};

export const solutions: Solution[] = [
  {
    slug: "sophos",
    name: "Sophos",
    logo: "/logos/sophos.png",
    shortDescription:
      "Ciberseguridad sincronizada con protección de endpoint, red y respuesta gestionada.",
    fullDescription:
      "Sophos ofrece una plataforma integrada de ciberseguridad con protección avanzada para endpoint, firewall, correo y nube. Su enfoque Synchronized Security permite a los productos compartir información en tiempo real para detectar y responder a amenazas de forma coordinada, con el respaldo del servicio MDR 24/7.",
    features: [
      "Protección de endpoint con IA (Intercept X).",
      "Firewall y seguridad de red de siguiente generación.",
      "MDR 24/7 con hunting y respuesta experta.",
      "Protección de correo, nube y Zero Trust.",
    ],
    website: "https://www.sophos.com/",
  },
  {
    slug: "beyondtrust",
    name: "BeyondTrust",
    logo: "/logos/beyondtrust.png",
    shortDescription:
      "Gestión de accesos privilegiados (PAM) para proteger identidades críticas.",
    fullDescription:
      "BeyondTrust es líder en Privileged Access Management (PAM) y seguridad de identidades. Ayuda a controlar, auditar y asegurar accesos privilegiados en endpoints, servidores y entornos de nube, reduciendo la superficie de ataque y cumpliendo con marcos regulatorios.",
    features: [
      "Gestión de credenciales y secretos privilegiados.",
      "Remote Support y Privileged Remote Access seguros.",
      "Control de privilegios en endpoints (EPM).",
      "Auditoría y grabación de sesiones privilegiadas.",
    ],
    website: "https://www.beyondtrust.com/",
  },
  {
    slug: "veeam",
    name: "Veeam",
    logo: "/logos/veeam.png",
    shortDescription:
      "Respaldo, recuperación y resiliencia de datos para entornos híbridos.",
    fullDescription:
      "Veeam es el referente global en protección de datos y recuperación ante desastres. Su plataforma ofrece respaldos inmutables, recuperación rápida y resiliencia ante ransomware para entornos físicos, virtuales, nube y SaaS.",
    features: [
      "Respaldo inmutable contra ransomware.",
      "Recuperación rápida de VMs, aplicaciones y SaaS.",
      "Soporte para Microsoft 365, Salesforce y Kubernetes.",
      "Orquestación de Disaster Recovery.",
    ],
    website: "https://www.veeam.com/",
  },
  {
    slug: "tenable",
    name: "Tenable",
    logo: "/logos/tenable.png",
    shortDescription:
      "Gestión de exposición y vulnerabilidades para reducir riesgo cibernético.",
    fullDescription:
      "Tenable es pionero en gestión de vulnerabilidades y exposure management. Permite descubrir, priorizar y remediar debilidades en toda la superficie de ataque: TI, nube, OT, identidades y aplicaciones web, con métricas claras de riesgo para la dirección.",
    features: [
      "Escaneo y gestión de vulnerabilidades (Nessus, Tenable.io).",
      "Seguridad de identidades y Active Directory.",
      "Seguridad en nube (CNAPP) y contenedores.",
      "Priorización basada en riesgo real.",
    ],
    website: "https://www.tenable.com/",
  },
  {
    slug: "blancco",
    name: "Blancco",
    logo: "/logos/blancco.png",
    shortDescription:
      "Borrado seguro certificado y gestión del ciclo de vida de datos.",
    fullDescription:
      "Blancco es el estándar global en borrado seguro de datos certificado. Su tecnología garantiza la eliminación irreversible de información en dispositivos, servidores y entornos cloud, cumpliendo con regulaciones de privacidad y permitiendo la reutilización segura de activos.",
    features: [
      "Borrado certificado para endpoints, móviles y servidores.",
      "Eliminación de datos en entornos cloud.",
      "Cumplimiento con GDPR, HIPAA, NIST e ISO 27001.",
      "Reportes auditables y tamper-proof.",
    ],
    website: "https://www.blancco.com/",
  },
  {
    slug: "forescout",
    name: "Forescout",
    logo: "/logos/forescout.png",
    shortDescription:
      "Visibilidad y control de dispositivos en redes IT, OT e IoT.",
    fullDescription:
      "Forescout es líder en visibilidad y control de dispositivos conectados. Descubre y clasifica en tiempo real cada dispositivo en la red —incluidos IoT, OT y médicos— y aplica controles de segmentación y cumplimiento para reducir riesgos operativos.",
    features: [
      "Descubrimiento y clasificación sin agentes.",
      "Segmentación de red dinámica y Zero Trust.",
      "Seguridad para entornos OT e IoT.",
      "Respuesta automatizada ante incumplimientos.",
    ],
    website: "https://www.forescout.com/",
  },
  {
    slug: "manageengine",
    name: "ManageEngine",
    logo: "/logos/manageengine.png",
    shortDescription:
      "Operación de TI y seguridad con visibilidad centralizada y automatización.",
    fullDescription:
      "ManageEngine ofrece un ecosistema integral de herramientas para gestión de TI, identidad, endpoints, redes y cumplimiento. Permite a las organizaciones operar de forma eficiente con visibilidad centralizada, automatización y controles de seguridad alineados a buenas prácticas.",
    features: [
      "Gestión de identidad, accesos y privilegios.",
      "Monitoreo y administración de endpoints y redes.",
      "SIEM y analítica de seguridad integrada.",
      "Cumplimiento, auditoría y reportes ejecutivos.",
    ],
    website: "https://www.manageengine.com/",
  },
  {
    slug: "crowdstrike",
    name: "CrowdStrike",
    logo: "/logos/crowdstrike.png",
    shortDescription:
      "Plataforma cloud-native de protección de endpoint y XDR con threat intelligence.",
    fullDescription:
      "CrowdStrike Falcon es la plataforma líder de ciberseguridad cloud-native. Combina EDR/XDR, threat intelligence, identity protection y hunting gestionado (OverWatch) para detener brechas modernas con una única arquitectura ligera y escalable.",
    features: [
      "EDR/XDR con IA y telemetría en tiempo real.",
      "Threat hunting 24/7 (Falcon OverWatch).",
      "Protección de identidades y nube.",
      "Threat intelligence accionable.",
    ],
    website: "https://www.crowdstrike.com/",
  },
  {
    slug: "okta",
    name: "Okta",
    logo: "/logos/okta.png",
    shortDescription:
      "Plataforma de identidad para acceso seguro de empleados y clientes.",
    fullDescription:
      "Okta es el estándar independiente en gestión de identidades. Su plataforma ofrece SSO, MFA, gobierno de identidades y acceso Zero Trust para empleados, socios y clientes, integrándose con miles de aplicaciones empresariales y SaaS.",
    features: [
      "Single Sign-On (SSO) y MFA adaptativo.",
      "Gobierno y ciclo de vida de identidades.",
      "Customer Identity (CIAM).",
      "Zero Trust y acceso condicional.",
    ],
    website: "https://www.okta.com/",
  },
  {
    slug: "hornetsecurity",
    name: "Hornetsecurity",
    logo: "/logos/hornetsecurity.png",
    shortDescription:
      "Seguridad de correo, protección y respaldo para Microsoft 365.",
    fullDescription:
      "Hornetsecurity (por Proofpoint) es un proveedor europeo líder en seguridad de correo electrónico y protección integral para Microsoft 365. Entrega defensa ante phishing, ransomware y fugas de información, junto con respaldo, archivado y concientización del usuario.",
    features: [
      "Protección avanzada de correo (ATP).",
      "Respaldo y archivado para Microsoft 365.",
      "Security Awareness Training.",
      "Cumplimiento y e-discovery.",
    ],
    website: "https://www.hornetsecurity.com/",
  },
  {
    slug: "eset",
    name: "ESET",
    logo: "/logos/eset.png",
    shortDescription:
      "Protección de endpoint ligera y de alto rendimiento para toda la organización.",
    fullDescription:
      "ESET ofrece soluciones de ciberseguridad reconocidas por su bajo impacto en el rendimiento y alta tasa de detección. Su portafolio cubre protección de endpoint, EDR, cifrado, MFA y servicios gestionados para organizaciones de cualquier tamaño.",
    features: [
      "Protección de endpoint multicapa.",
      "EDR e Inspect para detección avanzada.",
      "Cifrado completo de disco y MFA.",
      "Consola en la nube (ESET PROTECT).",
    ],
    website: "https://www.eset.com/",
  },
  {
    slug: "fracttal",
    name: "Fracttal",
    logo: "/logos/fracttal.png",
    shortDescription:
      "Gestión inteligente de activos y mantenimiento (CMMS/EAM) en la nube.",
    fullDescription:
      "Fracttal es una plataforma cloud de gestión de mantenimiento de activos (CMMS/EAM) con IoT e inteligencia artificial. Permite planear, ejecutar y analizar el mantenimiento de equipos e infraestructura crítica para mejorar disponibilidad y reducir costos operativos.",
    features: [
      "CMMS/EAM en la nube con app móvil.",
      "Mantenimiento predictivo con IoT e IA.",
      "Gestión de órdenes de trabajo e inventarios.",
      "Indicadores y reportes operativos.",
    ],
    website: "https://www.fracttal.com/",
  },
  {
    slug: "darktrace",
    name: "Darktrace",
    logo: "/logos/darktrace.png",
    shortDescription:
      "Defensa autónoma basada en IA para detectar y responder a amenazas novedosas.",
    fullDescription:
      "Darktrace utiliza inteligencia artificial Self-Learning para modelar el comportamiento normal de cada usuario, dispositivo y sistema. Detecta y responde autónomamente a amenazas nunca antes vistas, incluyendo ataques internos, ransomware y amenazas dirigidas.",
    features: [
      "Self-Learning AI que detecta anomalías en tiempo real.",
      "Respuesta autónoma (Antigena) ante amenazas activas.",
      "Cobertura para red, correo, nube y OT.",
      "Investigación automatizada (Cyber AI Analyst).",
    ],
    website: "https://darktrace.com/",
  },
  {
    slug: "imperva",
    name: "Imperva",
    logo: "/logos/imperva.png",
    shortDescription:
      "Protección de aplicaciones, APIs y datos para entornos web y nube.",
    fullDescription:
      "Imperva (una empresa de Thales) protege aplicaciones, APIs y datos críticos con WAF, anti-DDoS, bot management y seguridad de datos. Su plataforma reduce el riesgo en entornos híbridos y multi-cloud manteniendo disponibilidad y rendimiento.",
    features: [
      "WAF y protección de APIs de siguiente generación.",
      "Mitigación de DDoS y bot management.",
      "Seguridad y cumplimiento de bases de datos.",
      "Protección ante ataques OWASP Top 10.",
    ],
    website: "https://www.imperva.com/",
  },
  {
    slug: "acronis",
    name: "Acronis",
    logo: "/logos/acronis.png",
    shortDescription:
      "Ciber protección integrada: respaldo, anti-ransomware y gestión unificada.",
    fullDescription:
      "Acronis Cyber Protect integra respaldo, anti-malware, gestión de endpoint y ciberseguridad en una sola consola. Ofrece protección unificada contra ransomware, recuperación rápida y automatización para reducir complejidad operativa.",
    features: [
      "Respaldo y recuperación para cualquier carga de trabajo.",
      "Anti-ransomware y anti-malware con IA.",
      "Gestión de parches y endpoints.",
      "Protección de Microsoft 365 y Google Workspace.",
    ],
    website: "https://www.acronis.com/",
  },
  {
    slug: "cyberark",
    name: "CyberArk",
    logo: "/logos/cyberark.png",
    shortDescription:
      "Seguridad de identidades y accesos privilegiados para la empresa moderna.",
    fullDescription:
      "CyberArk (parte de Palo Alto Networks) es el referente global en seguridad de identidades. Protege accesos privilegiados de humanos, máquinas y aplicaciones en entornos on-premise, nube e híbridos, aplicando Zero Trust e inteligencia contextual.",
    features: [
      "Privileged Access Management (PAM) empresarial.",
      "Gestión de secretos para DevOps y workloads.",
      "Endpoint Privilege Manager.",
      "Identity Security Platform con Zero Trust.",
    ],
    website: "https://www.cyberark.com/",
  },
];

export const getSolutionBySlug = (slug?: string) =>
  solutions.find((s) => s.slug === slug);
