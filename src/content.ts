import type { Profile, Project, Education, Experience } from './types'

export const profile: Profile = {
  name: 'Mariana Rojas Zuluaga',
  displayName: 'Mar.',
  tagline: 'I solve human problems with tech through an ethical approach.',
  bio: `¡Hola! They call me Mar.

Political Science graduate, passionate about technology and the humans behind everyday operations. I have two girl dogs who are the best part of my life.

I'm an impact-oriented Manager with 5+ years of experience leading cross-functional teams and delivering digital products and operational initiatives from concept to execution. Strong ability to translate business goals into structured roadmaps, align stakeholders, and drive delivery in fast-paced environments.

Known for combining strategic thinking with hands-on execution to improve product adoption, operational efficiency, and team performance. Experienced working at the intersection of product, operations, and strategy — helping organizations move from ideas to scalable solutions.`,
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
  { lang: 'English', flag: '🇬🇧', level: 'C2 Advanced / Native' },
  { lang: 'Spanish', flag: '🇨🇴', level: 'Native (mother tongue)' },
  { lang: 'French', flag: '🇫🇷', level: 'Intermediate' },
]

export const experience: Experience[] = [
  {
    role: 'Strategic Product & Operations Manager',
    company: 'Imagine Apps',
    period: 'Dec 2025 → Present',
    location: 'Remote',
    description:
      'Lead product execution and operational coordination for digital initiatives, aligning business objectives with product development and delivery teams.',
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
    role: 'Strategic Product & Operations Manager',
    company: 'Imagine Apps',
    period: 'Feb 2025 → Dec 2025',
    location: 'Remote',
    description:
      'Lead product execution and operational coordination for digital initiatives, aligning business objectives with product development and delivery teams.',
  },
  {
    role: 'Product Owner & Business Development Lead',
    company: 'Elentari Venture',
    period: 'Aug 2023 → Oct 2024',
    location: 'Remote',
    description:
      'Owned product roadmap and coordinated product development teams across international environments.',
  },
  {
    role: 'Chief of Operations (Volunteer)',
    company: 'La Oficina — Nonprofit',
    period: 'Jan 2023 → Jan 2025',
    location: 'Colombia',
    description:
      'Led operational initiatives and implemented project management frameworks to improve organizational efficiency.',
  },
  {
    role: 'IT Project Manager',
    company: 'Imagine Apps',
    period: 'Nov 2022 → Sep 2023',
    location: 'Remote',
    description:
      'Managed distributed development teams delivering web and mobile solutions and coordinated sprint planning and delivery cycles.',
  },
  {
    role: 'Operations & Business Development Lead',
    company: 'Miami Image LLC',
    period: 'Mar 2021 → Nov 2021',
    location: 'Remote',
    description: 'Supported operational scaling initiatives and internal process improvements.',
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
  emprendimiento: '#d946ef',
  intentos: '#64748b',
}
