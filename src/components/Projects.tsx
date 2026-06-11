import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects, categoryLabels, categoryColors } from '../content'
import type { ProjectCategory, Project } from '../types'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const categories = Object.keys(categoryLabels) as ProjectCategory[]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('imagine-apps')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const filtered = projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl mb-12"
          style={{ color: 'var(--accent-2)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Lo que he construido
        </motion.h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = cat === activeCategory
            const color = categoryColors[cat]
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-lg text-sm font-heading font-bold transition-all duration-200"
                style={{
                  backgroundColor: isActive ? `${color}33` : 'var(--surface)',
                  color: isActive ? color : 'var(--text-muted)',
                  borderWidth: 1,
                  borderColor: isActive ? color : 'transparent',
                }}
              >
                {categoryLabels[cat]}
              </button>
            )
          })}
        </div>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} index={i} />
            ))}
          </div>
        ) : (
          <p className="text-text-muted text-center py-16">Proyectos en camino — próximamente.</p>
        )}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
