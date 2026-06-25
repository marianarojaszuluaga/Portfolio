import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { Project } from '../types'
import { categoryColors, categoryIcons } from '../content'

interface Props {
  project: Project
  onClick: (project: Project) => void
  index: number
  featured?: boolean
}

export default function ProjectCard({ project, onClick, index, featured }: Props) {
  const { t } = useTranslation()
  const color = categoryColors[project.category]
  const icon = categoryIcons[project.category] ?? 'folder'
  const lightBgs = ['var(--accent-2)', 'var(--accent-3)', 'var(--sky)', 'var(--mustard)', 'var(--blush)', 'var(--lime)', 'var(--cyan)']
  const badgeTextColor = lightBgs.includes(color) ? 'var(--dark)' : '#fff'

  const title = t(`projects.items.${project.id}.title`, { defaultValue: project.title })
  const problem = t(`projects.items.${project.id}.problem`, { defaultValue: project.problem })

  return (
    <motion.button
      className="sticker-card text-left w-full overflow-hidden cursor-pointer relative group"
      style={{ padding: 0 }}
      onClick={() => onClick(project)}
      aria-label={t('projects.card_open_aria', { title })}
      initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ rotate: index % 2 === 0 ? -1 : 1 }}
    >
      {/* color header block */}
      <div
        className="p-4 flex items-center justify-between"
        style={{ backgroundColor: color + '22', borderBottom: '2px solid var(--dark)' }}
      >
        <span
          className="font-mono text-xs font-bold px-2 py-1 rounded-full border-2 flex items-center gap-1"
          style={{ backgroundColor: color, color: badgeTextColor, borderColor: 'var(--dark)', boxShadow: '1px 1px 0 var(--dark)' }}
        >
          <span className="material-icons-round" aria-hidden="true" style={{ fontSize: 13, lineHeight: 1 }}>{icon}</span>
          {t(`projects.categories.${project.category}`)}
        </span>
        <span
          className="font-display font-bold opacity-25 group-hover:opacity-60 transition-opacity"
          style={{ fontSize: featured ? '3rem' : '2rem', lineHeight: 1, color }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* body */}
      <div style={{ padding: featured ? '1.5rem' : '1.25rem' }}>
        <h3
          className="font-display font-bold leading-tight mb-2"
          style={{ fontSize: featured ? '1.5rem' : '1.15rem', color: 'var(--dark)' }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-4"
          style={{
            color: 'var(--text-muted)',
            display: '-webkit-box',
            WebkitLineClamp: featured ? 3 : 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {problem}
        </p>

        {/* stack tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, featured ? 5 : 3).map((s) => (
            <span
              key={s}
              className="font-mono text-xs px-2 py-0.5 rounded-full border"
              style={{ borderColor: 'rgba(26,26,26,0.2)', color: 'var(--text-muted)' }}
            >
              {s}
            </span>
          ))}
          {project.stack.length > (featured ? 5 : 3) && (
            <span className="font-mono text-xs px-1" style={{ color: 'var(--text-muted)' }}>
              +{project.stack.length - (featured ? 5 : 3)}
            </span>
          )}
        </div>

        {/* open cta */}
        <div className="mt-4 pt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0 duration-200"
          style={{ borderTop: '1px solid rgba(26,26,26,0.1)' }}
        >
          <span className="text-xs font-bold font-heading uppercase tracking-widest" aria-hidden="true" style={{ color }}>{t('projects.card_open')} →</span>
        </div>
      </div>
    </motion.button>
  )
}
