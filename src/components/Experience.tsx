import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { experience, additionalExperience } from '../content'

const companyColors: Record<string, string> = {
  'Imagine Apps': 'var(--pink)',
  'Universidad Nacional Abierta y a Distancia (UNAD)': 'var(--purple)',
  'Elentari Venture': 'var(--orange)',
  'La Oficina — Nonprofit': 'var(--cyan)',
  'Miami Image LLC': 'var(--lime)',
}

export default function Experience() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const expTranslations = t('experience.items', { returnObjects: true }) as Array<{ role: string; description: string }>

  return (
    <section id="experience" className="py-24 relative" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="w-full h-px absolute top-0 left-0" style={{ background: 'var(--border)' }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.p
          className="section-label mb-4 mt-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          {t('experience.section_label')}
        </motion.p>

        <motion.h2
          className="font-display font-bold leading-none mb-14"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: 'var(--dark)', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {t('experience.heading')}{' '}
          <span style={{ color: 'var(--pink)' }}>{t('experience.heading_accent')}</span>
          <span className="font-hand ml-3" style={{ fontSize: '0.55em', color: 'var(--teal)' }}>{t('experience.heading_sub')}</span>
        </motion.h2>

        <div className="space-y-4">
          {experience.map((exp, i) => {
            const accent = companyColors[exp.company] ?? 'var(--pink)'
            const tr = expTranslations[i]
            const role = tr?.role ?? exp.role
            const description = tr?.description ?? exp.description
            return (
              <motion.div
                key={i}
                className="sticker-card overflow-hidden group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              >
                {/* color accent left bar */}
                <div className="flex">
                  <div className="w-2 shrink-0" style={{ backgroundColor: accent }} />

                  <div className="flex-1 p-5 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3
                            className="font-display font-bold text-xl leading-tight"
                            style={{ color: 'var(--dark)' }}
                          >
                            {role}
                          </h3>
                          {exp.highlight && (
                            <span
                              className="px-2 py-0.5 rounded-full text-xs font-bold border-2"
                              style={{ backgroundColor: accent, color: '#fff', borderColor: 'var(--dark)', boxShadow: '1px 1px 0 var(--dark)' }}
                            >
                              Current ✦
                            </span>
                          )}
                        </div>
                        <p className="font-heading font-semibold text-sm" style={{ color: accent }}>
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                        <span
                          className="font-mono text-xs px-3 py-1 rounded-full border-2"
                          style={{ borderColor: 'var(--dark)', color: 'var(--dark)', boxShadow: '2px 2px 0 var(--dark)' }}
                        >
                          {exp.period}
                        </span>
                        <span className="font-mono text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                          <span style={{ display: 'inline-flex', width: 16, height: 16, color: 'var(--pink)' }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                            </svg>
                          </span>
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p
                      className="text-sm leading-relaxed mt-3"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* additional */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <p className="section-label mb-5">{t('experience.additional_title')}</p>
          <div className="flex flex-wrap gap-3">
            {additionalExperience.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-sm font-heading border-2"
                style={{ borderColor: 'var(--dark)', color: 'var(--dark)', boxShadow: '2px 2px 0 var(--dark)', backgroundColor: 'var(--cream)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="w-full h-px absolute bottom-0 left-0" style={{ background: 'var(--border)' }} />
    </section>
  )
}
