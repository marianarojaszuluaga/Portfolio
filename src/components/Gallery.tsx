import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

interface GalleryEvent {
  title: string
  brief: string
  date: string
  category?: string
  Category?: string
}

const categoryColors: Record<string, { bg: string; text: string; icon: string }> = {
  'Género':      { bg: 'var(--coral)',    text: '#fff',          icon: 'diversity_3' },
  'Gender':      { bg: 'var(--coral)',    text: '#fff',          icon: 'diversity_3' },
  'Innovación':  { bg: 'var(--teal)',     text: '#fff',          icon: 'lightbulb' },
  'Innovation':  { bg: 'var(--teal)',     text: '#fff',          icon: 'lightbulb' },
  'Tech':        { bg: 'var(--accent-2)', text: 'var(--dark)',   icon: 'terminal' },
  'IA':          { bg: 'var(--accent-2)', text: 'var(--dark)',   icon: 'smart_toy' },
  'AI':          { bg: 'var(--accent-2)', text: 'var(--dark)',   icon: 'smart_toy' },
  'Liderazgo':   { bg: 'var(--eggplant)', text: '#fff',          icon: 'workspace_premium' },
  'Leadership':  { bg: 'var(--eggplant)', text: '#fff',          icon: 'workspace_premium' },
}

const defaultCat = { bg: 'var(--mustard)', text: 'var(--dark)', icon: 'event' }

function parseDate(dateStr: string): { month: string; rest: string } {
  const parts = dateStr.trim().split(' ')
  if (parts.length >= 2) {
    const last = parts[parts.length - 1]
    const isYear = /^\d{4}$/.test(last)
    if (isYear) {
      return { month: parts.slice(0, -1).join(' '), rest: last }
    }
  }
  return { month: dateStr, rest: '' }
}

export default function Gallery() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const events = t('gallery.calendar.items', { returnObjects: true }) as GalleryEvent[]
  const safeEvents = Array.isArray(events) ? events : []

  return (
    <section id="gallery" className="py-24 relative" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="w-full h-px absolute top-0 left-0" style={{ background: 'var(--border)' }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        >
          {t('gallery.section_label')}
        </motion.p>

        <motion.h2
          className="font-display font-bold leading-none mb-4"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: 'var(--dark)', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {t('gallery.heading_1')}{' '}
          <span style={{ color: 'var(--pink)' }}>{t('gallery.heading_accent')}</span>
        </motion.h2>

        <motion.p
          className="font-heading text-base leading-relaxed max-w-xl mb-14"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {t('gallery.body')}
        </motion.p>

        {/* Calendar subsection */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--accent-1)' }}>calendar_month</span>
          <span className="section-label" style={{ letterSpacing: '0.15em' }}>{t('gallery.calendar.title')}</span>
        </motion.div>

        <motion.p
          className="font-heading text-sm mb-10"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {t('gallery.calendar.body')}
        </motion.p>

        {/* Events grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {safeEvents.map((event, i) => {
            const cat = event.category ?? event.Category ?? ''
            const style = categoryColors[cat] ?? defaultCat
            const { month, rest } = parseDate(event.date ?? '')

            return (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ border: '2px solid var(--dark)', boxShadow: '4px 4px 0 var(--dark)', backgroundColor: 'var(--cream)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                whileHover={{ y: -3, boxShadow: '4px 7px 0 var(--dark)' }}
              >
                {/* Color top bar with date */}
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ backgroundColor: style.bg }}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons-round" style={{ fontSize: 18, color: style.text }}>{style.icon}</span>
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: 'rgba(0,0,0,0.15)', color: style.text }}
                    >
                      {cat}
                    </span>
                  </div>
                  {/* Date badge */}
                  <div className="text-right">
                    <div className="font-display font-bold leading-none" style={{ fontSize: '1rem', color: style.text }}>
                      {month}
                    </div>
                    {rest && (
                      <div className="font-mono text-xs opacity-80" style={{ color: style.text }}>{rest}</div>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="px-5 py-4">
                  <h3 className="font-heading font-bold text-base leading-snug mb-2" style={{ color: 'var(--dark)' }}>
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {event.brief}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {safeEvents.length === 0 && (
          <p className="text-center py-16 font-hand text-2xl" style={{ color: 'var(--text-muted)' }}>
            Próximamente... ✦
          </p>
        )}
      </div>

      <div className="w-full h-px absolute bottom-0 left-0" style={{ background: 'var(--border)' }} />
    </section>
  )
}
