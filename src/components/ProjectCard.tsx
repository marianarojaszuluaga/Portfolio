import { motion } from 'framer-motion'
import type { Project } from '../types'
import { categoryLabels, categoryColors } from '../content'

interface Props {
  project: Project
  onClick: (project: Project) => void
  index: number
}

export default function ProjectCard({ project, onClick, index }: Props) {
  const color = categoryColors[project.category]
  return (
    <motion.button
      className="text-left w-full rounded-xl p-6 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
      style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ backgroundColor: `${color}22`, color }}>
          {categoryLabels[project.category]}
        </span>
        <span className="text-text-muted text-xs">{project.period}</span>
      </div>
      <h3 className="font-heading font-bold text-text text-lg mb-2">{project.title}</h3>
      <p className="text-text-muted text-sm line-clamp-2">{project.problem}</p>
      <div className="flex flex-wrap gap-1 mt-4">
        {project.stack.slice(0, 3).map((s) => (
          <span key={s} className="text-xs font-mono px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--surface-2)', color: 'var(--text-muted)' }}>
            {s}
          </span>
        ))}
        {project.stack.length > 3 && <span className="text-xs text-text-muted px-1">+{project.stack.length - 3}</span>}
      </div>
    </motion.button>
  )
}
