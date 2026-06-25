import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import type { Project } from '../types'
import { categoryColors, categoryIcons } from '../content'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const { t } = useTranslation()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    if (project) {
      setTimeout(() => closeRef.current?.focus(), 50)
    }
  }, [project])

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
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl p-8 max-h-[85vh] overflow-y-auto md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl md:max-w-2xl md:w-full"
            style={{ backgroundColor: 'var(--surface)' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={t('projects.modal_close_aria')}
              className="absolute top-4 right-4 text-text-muted hover:text-text transition-colors text-xl"
            >
              <span aria-hidden="true">✕</span>
            </button>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-xs font-mono px-2 py-0.5 rounded-full flex items-center gap-1"
                style={{ backgroundColor: `${categoryColors[project.category]}22`, color: categoryColors[project.category] }}
              >
                <span className="material-icons-round" aria-hidden="true" style={{ fontSize: 12, lineHeight: 1 }}>{categoryIcons[project.category] ?? 'folder'}</span>
                {t(`projects.categories.${project.category}`)}
              </span>
              <span className="text-text-muted text-xs">{project.period}</span>
            </div>
            <h2 id="modal-title" className="font-heading font-bold text-2xl text-text mb-6">
              {t(`projects.items.${project.id}.title`, { defaultValue: project.title })}
            </h2>

            {/* images gallery */}
            {project.images && project.images.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2 mb-6 -mx-1 px-1" style={{ scrollSnapType: 'x mandatory' }}>
                {project.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    className="rounded-xl flex-shrink-0 object-cover"
                    style={{
                      width: project.images!.length === 1 ? '100%' : 260,
                      height: 180,
                      scrollSnapAlign: 'start',
                      border: '1.5px solid var(--border)',
                    }}
                  />
                ))}
              </div>
            )}

            <div className="space-y-6">
              {[
                { labelKey: 'projects.modal_problem', field: 'problem' },
                { labelKey: 'projects.modal_built',   field: 'built' },
                { labelKey: 'projects.modal_impact',  field: 'impact' },
              ].map(({ labelKey, field }) => (
                <div key={field}>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">{t(labelKey)}</h3>
                  <p className="text-text leading-relaxed">
                    {t(`projects.items.${project.id}.${field}`, { defaultValue: (project as any)[field] })}
                  </p>
                </div>
              ))}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">{t('projects.modal_stack')}</h3>
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
