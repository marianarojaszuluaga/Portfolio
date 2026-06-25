import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { projects, categoryColors, categoryIcons } from '../content'
import type { ProjectCategory, Project } from '../types'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const categories = Object.keys(categoryColors) as ProjectCategory[]

export default function Projects() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('imagine-apps')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const filtered = projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative overflow-hidden py-24" style={{ backgroundColor: 'var(--purple)' }}>
      {/* scattered sparkles */}
      <svg className="absolute top-10 right-16 opacity-30" width="32" height="32" viewBox="0 0 24 24" fill="var(--lime)">
        <path d="M12 2L13.09 8.26L19 6L14.74 10.74L21 12L14.74 13.26L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.26L3 12L9.26 10.74L5 6L10.91 8.26L12 2Z"/>
      </svg>
      <svg className="absolute bottom-20 left-8 opacity-20" width="24" height="24" viewBox="0 0 24 24" fill="var(--pink)">
        <path d="M12 2L13.09 8.26L19 6L14.74 10.74L21 12L14.74 13.26L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.26L3 12L9.26 10.74L5 6L10.91 8.26L12 2Z"/>
      </svg>

      {/* wavy top */}
      <div className="wave-divider absolute top-0 left-0 right-0" style={{ transform: 'rotate(180deg)', marginTop: -2 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="var(--cream)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8" ref={ref}>
        <motion.p
          className="section-label mb-4"
          style={{ color: 'rgba(255,255,255,0.6)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          {t('projects.section_label')}
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
          <motion.h2
            className="font-display font-bold leading-none"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: '#fff', letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {t('projects.heading')}{' '}
            <span style={{ color: 'var(--lime)' }}>{t('projects.heading_accent')}</span> ✦
          </motion.h2>

          {/* category filter — pill buttons */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {categories.map((cat) => {
              const isActive = cat === activeCategory
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-1.5 rounded-full text-xs font-heading font-bold border-2 transition-all duration-200 flex items-center gap-1.5"
                  style={{
                    backgroundColor: isActive ? 'var(--mustard)' : 'transparent',
                    color: isActive ? 'var(--navy)' : 'rgba(255,255,255,0.85)',
                    borderColor: isActive ? 'var(--navy)' : 'rgba(255,255,255,0.25)',
                    boxShadow: isActive ? '2px 2px 0 rgba(0,0,0,0.35)' : 'none',
                    transform: isActive ? 'translate(-1px,-1px)' : 'none',
                  }}
                >
                  <span className="material-icons-round" style={{ fontSize: 15, lineHeight: 1 }}>
                    {categoryIcons[cat] ?? 'folder'}
                  </span>
                  {t(`projects.categories.${cat}`)}
                </button>
              )
            })}
          </motion.div>
        </div>

        {/* subtitle */}
        <motion.p
          className="font-heading text-sm leading-relaxed mb-10 max-w-2xl"
          style={{ color: 'rgba(255,255,255,0.65)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {t('projects.subtitle')}
        </motion.p>

        {/* grid */}
        {filtered.length === 0 ? (
          <p className="text-center py-16 font-hand text-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {t('projects.empty')}
          </p>
        ) : (
          <div className="space-y-4">
            {/* featured */}
            <ProjectCard
              project={filtered[0]}
              onClick={setSelectedProject}
              index={0}
              featured
            />
            {/* rest — horizontal scroll */}
            {filtered.length > 1 && (
              <div
                className="-mx-6 px-6"
                style={{ overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
              >
                <div className="flex gap-4 pb-3" style={{ width: 'max-content' }}>
                  {filtered.slice(1).map((p, i) => (
                    <div key={p.id} style={{ width: 300, flexShrink: 0, scrollSnapAlign: 'start' }}>
                      <ProjectCard project={p} onClick={setSelectedProject} index={i + 1} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* wavy bottom */}
      <div className="wave-divider absolute bottom-0 left-0 right-0" style={{ marginBottom: -2 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="var(--cream)" />
        </svg>
      </div>
      <div className="pb-16" />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
