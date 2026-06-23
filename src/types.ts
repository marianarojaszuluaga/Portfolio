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
  images?: string[]   // paths relative to /public, e.g. "/projects/my-project/hero.png"
}

export interface Education {
  title: string
  institution: string
  period: string
  relevance?: string
}

export interface Certification {
  title: string
  issuer: string
  icon: string
}

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  description: string
  highlight?: boolean
}

export interface Profile {
  name: string
  displayName: string
  tagline: string
  bio: string
  about: string
  email: string
  phone: string
  location: string
  linkedin: string
  calendar?: string
  blog?: string
}
