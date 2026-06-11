export type ProjectCategory =
  | 'imagine-apps'
  | 'ia'
  | 'operaciones'
  | 'emprendimiento'
  | 'intentos'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  period: string
  collaborators?: string
  problem: string
  built: string
  impact: string
  stack: string[]
}

export interface Education {
  title: string
  institution: string
  period: string
  relevance?: string
}

export interface Profile {
  name: string
  tagline: string
  about: string
  email: string
  linkedin: string
}
