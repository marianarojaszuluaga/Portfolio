import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import type { Project } from '../types'
import { categoryColors, categoryLabels } from '../content'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl p-8 max-h-[85vh] overflow-y-auto md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl md:max-w-2xl md:w-full"
            style={{ backgroundColor: 'var(--surface)' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-text-muted hover:text-text transition-colors text-xl">✕</button>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-xs font-mono px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${categoryColors[project.category]}22`, color: categoryColors[project.category] }}
              >
                {categoryLabels[project.category]}
              </span>
              <span className="text-text-muted text-xs">{project.period}</span>
            </div>
            <h2 className="font-heading font-bold text-2xl text-text mb-6">{project.title}</h2>
            <div className="space-y-6">
              {[
                { label: 'El problema', value: project.problem },
                { label: 'Lo que construí', value: project.built },
                { label: 'El impacto', value: project.impact },
              ].map(({ label, value }) => (
                <div key={label}>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">{label}</h3>
                  <p className="text-text leading-relaxed">{value}</p>
                </div>
              ))}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="text-sm font-mono px-3 py-1 rounded" style={{ backgroundColor: 'var(--surface-2)', color: 'var(--text-muted)' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
