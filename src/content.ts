import type { Profile, Project, Education } from './types'

export const profile: Profile = {
  name: 'Mariana Rojas Zuluaga',
  tagline: 'Encuentro lo que está roto. Lo diseño mejor. Y lo pongo a funcionar.',
  about: `Hay una pregunta que no puedo apagar: ¿por qué esto funciona así si podría funcionar mejor?

No es inquietud por la inquietud. Es que la mayoría de los sistemas —los procesos, los flujos, las herramientas— se construyeron para un problema que ya no existe, y nadie se detuvo a cuestionarlo. Yo sí me detengo.

Mi forma de trabajar mezcla tres cosas que rara vez están juntas en la misma persona: entiendo la operación (dónde duele, dónde se pierde tiempo, dónde la gente toma decisiones con información incompleta), pienso en producto (qué se construye, para quién, con qué lógica), y uso IA no como hype sino como herramienta real para quitar trabajo repetitivo y devolverle a la gente tiempo para pensar.

Itero rápido. Prototipo antes de escribir el spec perfecto. Prefiero tener algo funcionando en la operación real que una propuesta impecable que nunca llega a producción.

Trabajo mejor con equipos que también tienen esa obsesión — los que construyen porque quieren que las cosas funcionen de verdad, no porque hay un roadmap que cumplir.`,
  email: 'mariana.rojas@imagineapps.co',
  linkedin: 'https://www.linkedin.com/in/mariana-rojas-zuluaga/',
}

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

export const education: Education[] = []

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
