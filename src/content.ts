import type { Profile, Project, Education, Experience } from './types'

export const profile: Profile = {
  name: 'Mariana Rojas Zuluaga',
  displayName: 'Mar',
  tagline: 'I solve human problems with tech through an ethical approach.',
  bio: `¡Hola! They call me Mar.

Political Science graduate, passionate about technology and the human problems hiding inside everyday operations. I have two girl dogs who are the best part of my life.

I'm an operator who thinks strategically. For 5+ years I've owned product and operational initiatives end-to-end — from the first conversation to the system running in production. My job is reducing ambiguity, creating alignment, and turning ideas into something teams can actually run on.

I care about people, and I show that through structure and clarity, not slogans.`,
  about: `Hay una pregunta que no puedo apagar: ¿por qué esto funciona así si podría funcionar mejor?

No es inquietud por la inquietud. Es que la mayoría de los sistemas —los procesos, los flujos, las herramientas— se construyeron para un problema que ya no existe, y nadie se detuvo a cuestionarlo. Yo sí me detengo.

Mi forma de trabajar mezcla tres cosas que rara vez están juntas en la misma persona: entiendo la operación (dónde duele, dónde se pierde tiempo, dónde la gente toma decisiones con información incompleta), pienso en producto (qué se construye, para quién, con qué lógica), y uso IA no como hype sino como herramienta real para quitar trabajo repetitivo y devolverle a la gente tiempo para pensar.

Itero rápido. Prototipo antes de escribir el spec perfecto. Prefiero tener algo funcionando en la operación real que una propuesta impecable que nunca llega a producción.`,
  email: 'rojaszuluagamariana@gmail.com',
  phone: '3124821769',
  location: 'Colombia — working anywhere remote',
  linkedin: 'https://www.linkedin.com/in/mariana-rojas-zuluaga/',
}

export const skills: string[] = [
  'Strategic Leadership',
  'Product Management',
  'Operations Design',
  'AI Tools & Automation',
  'Stakeholder Alignment',
  'Roadmap Planning',
  'Cross-functional Teams',
  'Sprint Planning',
  'Process Improvement',
  'Digital Transformation',
]

export const languages = [
  { lang: 'English', code: 'gb', level: 'C2 Advanced / Native' },
  { lang: 'Spanish', code: 'co', level: 'Native (mother tongue)' },
  { lang: 'French', code: 'fr', level: 'Intermediate' },
]

export const experience: Experience[] = [
  {
    role: 'Strategic Product & Operations Lead',
    company: 'Imagine Apps',
    period: 'Feb 2025 → Present',
    location: 'Remote',
    description:
      'Take leadership objectives and turn them into roadmaps teams can actually run. Own incident response end-to-end — when a client-facing backend incident hit, I ran discovery, defined the fix, and presented the methodology change directly to the client as their single point of contact. Built and lead Agent Hub (10+ AI agents), authored the Imagine Apps Ecosystem internal reference, and built the Learning Hub for company onboarding.',
    highlight: true,
  },
  {
    role: 'Full-Time Lecturer',
    company: 'Universidad Nacional Abierta y a Distancia (UNAD)',
    period: 'Oct 2024 → Present',
    location: 'Colombia',
    description:
      'Manage academic programs and guide large student groups through structured learning processes and project-based activities.',
  },
  {
    role: 'Product Owner & Business Development Lead',
    company: 'Elentari Venture',
    period: 'Aug 2023 → Oct 2024',
    location: 'Remote',
    description:
      'Owned the product roadmap for a distributed international team. Led the daily negotiation between what the business needed and what engineering could realistically ship. Ran requirements conversations directly with stakeholders — no relay, no telephone game.',
  },
  {
    role: 'Chief of Operations (Volunteer)',
    company: 'La Oficina — Nonprofit',
    period: 'Jan 2023 → Jan 2025',
    location: 'Colombia',
    description:
      "This organization didn't have a project management framework — I built one, along with the KPI tracking to know if it was actually working.",
  },
  {
    role: 'IT Project Manager',
    company: 'Imagine Apps',
    period: 'Nov 2022 → Sep 2023',
    location: 'Remote',
    description:
      'Managed distributed teams delivering web and mobile products across time zones. Owned sprint planning, backlog, risk and dependency tracking. When something was about to break, I wanted to know before the client did.',
  },
  {
    role: 'Operations & Business Development Lead',
    company: 'Miami Image LLC',
    period: 'Mar 2021 → Nov 2021',
    location: 'Remote',
    description: 'Supported operational scaling and internal process improvements for a remote-first organization.',
  },
]

export const additionalExperience: string[] = [
  'Teleperformance — Global Impact Back-Office Advisor',
  'Buho Media — Information Analyst',
  'Talent for the Future — National Director Colombia',
  'Congress of Colombia — Research & Communications Assistant',
]

export const projects: Project[] = [
  {
    id: 'agent-hub',
    title: 'Agent Hub — Friction Reduction AI Agent Interface',
    category: 'imagine-apps',
    period: '2025',
    problem:
      'El cuello de botella no era construir agentes de IA — era que las personas no técnicas no podían acceder a ellos sin fricción. La tecnología existía; la interfaz humana, no.',
    built:
      'Definí la visión del producto, construí y curé más de 10 agentes, y diseñé una interfaz que elimina la fricción de acceso para usuarios no técnicos. Lideré el backlog completo y llevé el proyecto a pitch externo.',
    impact:
      'De herramienta interna a propuesta con potencial comercial. Agent Hub cambió la conversación de "tenemos agentes" a "cualquiera puede usarlos".',
    stack: ['IA Generativa', 'Product Management', 'UX', 'Automatización'],
  },
  {
    id: 'imagine-apps-ecosystem',
    title: 'Imagine Apps Ecosystem — Internal Knowledge System',
    category: 'imagine-apps',
    period: '2025',
    problem:
      'Las organizaciones se rompen cuando el conocimiento vive en la cabeza de las personas en lugar de en sistemas. Cada salida es una pérdida de memoria institucional.',
    built:
      'Sistema integral que centraliza todo el conocimiento operativo de Imagine Apps: Agents Hub, Ops Hub y Learning Hub. Incluye metodología, suite de agentes de IA, formatos operacionales, guías, políticas y sistema de diseño UI. Una sola fuente de verdad construida para sobrevivir a cualquier individuo.',
    impact:
      'La empresa dejó de depender de personas específicas para funcionar. El conocimiento se volvió transferible, escalable y auditable.',
    stack: ['Knowledge Management', 'IA', 'Diseño de Sistemas', 'Documentación'],
  },
  {
    id: 'finanz-butik-helpdesk',
    title: 'Finanz Butik Helpdesk',
    category: 'imagine-apps',
    period: 'ene 2026 – feb 2026',
    problem:
      'El equipo gestionaba solicitudes dispersas sin trazabilidad, lo que generaba tickets perdidos, prioridades confusas y comunicación fragmentada.',
    built:
      'Hub centralizado con formulario guiado de 6 pasos, clasificación automática de tickets (Bug, Feature, Error) con scoring de confianza y nomenclatura única (HU-001-Auth-login). Integración directa con Basecamp como cards con resúmenes ejecutivos. Kanban completo de Draft a Producción con RBAC. Stack: React + Supabase + Supabase Edge Functions + Basecamp API.',
    impact:
      'Sistema desplegado en producción con beta users procesando tickets reales. Eliminó la dispersión de solicitudes y creó trazabilidad completa del ciclo de vida.',
    stack: ['React', 'Supabase', 'Supabase Edge Functions', 'Basecamp API', 'TypeScript'],
  },
  {
    id: 'gimena-user-story-writer',
    title: 'Gimena — Agentic User Story Writer',
    category: 'ia',
    period: '2025',
    problem:
      'El proceso de convertir diseños de Figma y requerimientos de negocio en User Stories para desarrollo era manual, lento y propenso a inconsistencias.',
    built:
      'Agente de IA que transforma flujos de Figma y requerimientos de negocio en User Stories listas para desarrollo. Identifica edge cases automáticamente para prevenir rework. Elimina el cuello de botella manual del backlog.',
    impact:
      'Aceleró el ciclo de entrega de Imagine Apps. Los PMs pueden enfocarse en estrategia mientras Gimena maneja el desglose técnico.',
    stack: ['IA Generativa', 'Automatización', 'Product Management'],
  },
  {
    id: 'lia-productivity-hub',
    title: 'Lía — The Productivity & Visibility Hub',
    category: 'imagine-apps',
    period: 'sept 2025 – oct 2025',
    problem:
      'Los equipos gestionaban calendarios, tareas y sesiones en herramientas separadas, perdiendo visibilidad y contexto entre ellas.',
    built:
      'Planificador unificado que integra calendarios, tareas y sesiones en una sola interfaz de visibilidad. Validado como solución de uso diario en ImagineApps.',
    impact:
      'Validado como POC exitoso. Evolucionó a activo escalable con potencial de convertirse en producto modular para equipos externos.',
    stack: ['Producto', 'UX', 'Planificación'],
  },
  {
    id: 'operations-evolution-dashboard',
    title: 'Operations Evolution Dashboard',
    category: 'operaciones',
    period: 'oct 2025 – dic 2025',
    problem:
      'La gestión de proyectos dependía de actualizaciones verbales. Sin métricas, las decisiones de priorización eran subjetivas y la visibilidad de stakeholders era casi nula.',
    built:
      'Dashboard operacional que transforma reportes verbales en métricas medibles: probabilidad de completitud, solicitudes por área (Tech, QA, DevOps), mínimos de reporte por proyecto y persona.',
    impact:
      'Nueva fuente única de verdad para estados globales. Habilitó alineación de prioridades transparente con stakeholders basada en datos históricos.',
    stack: ['Dashboards', 'Métricas', 'Gestión de Operaciones'],
  },
  {
    id: 'ai-wiki-for-builders',
    title: 'AI Wiki for Builders',
    category: 'ia',
    period: '2025',
    problem:
      'Las personas que empiezan a usar IA para construir productos no necesitan otro tutorial — necesitan herramientas listas para resolver problemas reales, ahora.',
    built:
      'Colección curada de skills, agentes y estructuras agénticas diseñadas para resolver problemas en tiempo real. Cada recurso fue probado antes de incluirse.',
    impact:
      'Recurso independiente para builders que prefieren aprender haciendo. Reduce la curva de entrada de semanas a horas.',
    stack: ['IA Generativa', 'Automatización', 'Curaduría'],
  },
  {
    id: 'mujeres-builders',
    title: 'Mujeres Builders — Women-in-Tech Community',
    category: 'emprendimiento',
    period: '2025',
    problem:
      'La comunidad tenía volumen de contenido pero no identidad. El problema real no era la cantidad de publicaciones — era que las mujeres no estaban co-creando, solo consumiendo.',
    built:
      'Base de datos de 28 herramientas de IA organizada para la comunidad. Marco estratégico de contenido y engagement centrado en identidad compartida y co-creación, no en métricas de visibilidad.',
    impact:
      'Red activa de 100+ mujeres que colaboran y construyen. La comunidad pasó de audiencia a equipo.',
    stack: ['Community Building', 'Estrategia de Contenido', 'IA'],
  },
  {
    id: 'speaker-ai-summit',
    title: 'Speaker — AI Summit',
    category: 'imagine-apps',
    period: '2025',
    problem:
      'Las empresas querían implementar IA pero confundían la herramienta con la estrategia. El problema no era acceso a tecnología — era saber qué construir con ella.',
    built:
      'Master Class de implementación de IA para organizaciones de distintas industrias, en conjunto con Imagine Apps y 30X. Diseñada para ejecutivos y líderes, no para equipos técnicos.',
    impact:
      'Audiencia de empresas con casos de uso concretos y un framework para evaluar dónde tiene sentido implementar IA en sus operaciones.',
    stack: ['Comunicación Estratégica', 'IA', 'Formación Ejecutiva'],
  },
  {
    id: 'finanz-butik-release-notes',
    title: 'Finanz Butik — Release Notes & Product Communication',
    category: 'imagine-apps',
    period: '2025 – 2026',
    problem:
      'El cliente llegaba a las ceremonias Scrum con preguntas, no con criterio. Los cambios técnicos eran opacos para una audiencia no técnica, lo que convertía el sprint review en un interrogatorio en lugar de una revisión.',
    built:
      'Decks de release notes que traducen cambios técnicos al lenguaje del negocio — sin simplificar, sin omitir. Cada entrega está diseñada para que el cliente entienda el incremento y llegue a la ceremonia con una postura crítica.',
    impact:
      'El cliente pasó de hacer preguntas a hacer observaciones. Las ceremonias se volvieron conversaciones estratégicas, no sesiones de explicación.',
    stack: ['Comunicación de Producto', 'Product Writing', 'Scrum'],
  },
  {
    id: 'growth-plan',
    title: 'Growth Plan — Structured Professional Development',
    category: 'intentos',
    period: '2022 – 2025',
    problem:
      'El crecimiento profesional sin estructura se convierte en reactividad — se aprende lo urgente, no lo estratégico. Sin una ruta, se avanza en círculos.',
    built:
      'Plan de desarrollo personal y profesional con prioridades de upskilling y trayectoria de carrera, construido con mentoría profesional durante los años en Imagine Apps. Incluye mapa de habilidades, objetivos por ciclo y métricas de avance.',
    impact:
      'Trayectoria de PM a Strategic Lead con base en decisiones deliberadas, no en oportunidades accidentales. Un sistema propio de crecimiento que sigue activo.',
    stack: ['Desarrollo Profesional', 'Mentoría', 'Planificación Estratégica'],
  },
  {
    id: 'pizza-day',
    title: 'PIZZA DAY — Experiencia de pizza artesanal',
    category: 'emprendimiento',
    period: '2022 – 2023',
    problem:
      'A la gente le encanta una noche de pizza y organizarla puede ser una de las mejores experiencias. Un grupo de amigos, una empresa o una pareja puede planear esta cita y solo pensar en los ingredientes que quieren en su pizza, lo demás ya está listo y llega a su puerta.',
    built:
      'Desarrollé una pizza de fermentación baja y larga con un buen sabor y una textura fuerte que soporta incluso la piña. También cuenta con un buen queso y una salsa superior que combina con cualquier sabor; los clientes tendrán todo esto con un horno de pizza profesional.',
    impact:
      'Transforma la experiencia de una noche de pizza de una llamada de 30 minutos a Domino\'s a una espera inolvidable de 2 minutos mientras el queso se derrite y la masa se pone crujiente.',
    stack: ['Food Design', 'Emprendimiento', 'Experiencia de Cliente'],
    images: [
      '/pizza-day-1.jpg',
      '/pizza-day-2.jpg',
      '/pizza-day-3.jpg',
      '/pizza-day-4.jpg',
    ],
  },
]

export const education: Education[] = [
  {
    title: 'Post Graduate — Internal Communication & Strategic Management',
    institution: 'Pontificia Universidad Javeriana',
    period: 'Jun 2014 → May 2019',
    relevance: 'Strategic communication, organizational culture, leadership communication frameworks.',
  },
  {
    title: 'Post Graduate — Professional Project Manager',
    institution: 'AMG',
    period: 'May 2026 → Jun 2026',
    relevance: 'Advanced project management methodologies and professional certification.',
  },
  {
    title: 'Master in Marketing and Political Communication',
    institution: 'Universidad de Alcalá de Henares',
    period: 'Sep 2019 → Jun 2020',
    relevance: 'Political communication strategies, marketing frameworks, and stakeholder engagement.',
  },
  {
    title: 'Postgraduate in Political Marketing and Communication',
    institution: 'Universidad del Rosario',
    period: 'May 2018 → Jun 2018',
    relevance: 'Specialized training in political marketing and communication strategy.',
  },
  {
    title: "Bachelor's in Political Science",
    institution: 'Pontificia Universidad Javeriana',
    period: 'Jun 2014 → May 2019',
    relevance: 'Foundation in political theory, public policy, governance, and social systems.',
  },
]

export const certifications = [
  // Liderazgo & gestión
  { title: 'Programa de Liderazgo de Alto Desempeño', issuer: 'Blum',           icon: 'emoji_events'  },
  { title: 'Google Project Management',               issuer: 'Coursera',        icon: 'work_history'  },
  { title: 'Professional IT Project Manager',         issuer: 'IBM',             icon: 'business_center' },
  { title: 'Scrum Master',                            issuer: 'Platzi',          icon: 'group_work'    },
  { title: 'Gestión de Equipos con Notion',           issuer: 'Platzi',          icon: 'groups'        },
  // Notion
  { title: 'Notion Advanced',                         issuer: 'Notion Academy',  icon: 'layers'        },
  { title: 'Notion Essentials',                       issuer: 'Notion Academy',  icon: 'note_alt'      },
  { title: 'Notion Workflows',                        issuer: 'Notion Academy',  icon: 'account_tree'  },
  { title: 'Notion',                                  issuer: 'Platzi',          icon: 'edit_note'     },
  // Automatización
  { title: 'Workflows Profesionales con n8n',         issuer: 'Platzi',          icon: 'account_tree'  },
  { title: 'n8n Self-Hosted para Empresas',           issuer: 'Platzi',          icon: 'dns'           },
  { title: 'Automatizaciones con n8n',                issuer: 'Platzi',          icon: 'bolt'          },
  // IA & tecnología
  { title: 'Prompt Engineering',                      issuer: 'Platzi',          icon: 'auto_awesome'  },
  { title: 'Gemini',                                  issuer: 'Platzi',          icon: 'stars'         },
  { title: 'Fundamentos de Ingeniería de Software',   issuer: 'Platzi',          icon: 'code'          },
  { title: 'Introducción a la Web',                   issuer: 'Platzi',          icon: 'language'      },
  { title: 'Computación Básica',                      issuer: 'Platzi',          icon: 'computer'      },
]

export const categoryLabels: Record<string, string> = {
  'imagine-apps': 'Imagine Apps',
  ia: 'IA',
  operaciones: 'Operaciones',
  emprendimiento: 'Emprendimiento',
  intentos: 'Galería de intentos',
}

export const categoryColors: Record<string, string> = {
  'imagine-apps': 'var(--accent-1)',
  ia: 'var(--accent-2)',
  operaciones: 'var(--accent-3)',
  emprendimiento: 'var(--coral)',
  intentos: 'var(--eggplant)',
}

export const categoryIcons: Record<string, string> = {
  'imagine-apps': 'devices',
  ia:             'smart_toy',
  operaciones:    'tune',
  emprendimiento: 'rocket_launch',
  intentos:       'palette',
}
