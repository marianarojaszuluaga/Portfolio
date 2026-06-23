import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { education, certifications } from '../content'

export default function Education() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const eduTranslations = t('education.items', { returnObjects: true }) as Array<{ title: string; relevance?: string }>

  return (
    <section id="education" className="py-28 relative" style={{ backgroundColor: 'var(--surface)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'var(--border)' }}
      />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}
        >
          {t('education.section_label')}
        </motion.p>
        <motion.h2
          className="font-display font-extrabold mb-16"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t('education.heading_pre')}{' '}
          <span className="grad-lime">{t('education.heading_accent')}</span>
        </motion.h2>

        {/* ── Educación formal ── */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--accent-1)' }}>school</span>
          <span className="section-label" style={{ letterSpacing: '0.15em' }}>{t('education.formal_label')}</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {education.map((item, i) => {
            const tr = eduTranslations[i]
            const title = tr?.title ?? item.title
            const relevance = tr?.relevance ?? item.relevance
            return (
              <motion.div
                key={i}
                className="p-6 rounded-xl group hover:brightness-[1.03] transition-all duration-200"
                style={{ backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <span
                    className="font-mono text-xs px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--surface)', color: 'var(--accent-3)' }}
                  >
                    {item.period}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base leading-snug mb-1" style={{ color: 'var(--text)' }}>
                  {title}
                </h3>
                <p className="text-sm font-heading" style={{ color: 'var(--accent-2)' }}>
                  {item.institution}
                </p>
                {relevance && (
                  <p className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {relevance}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* ── Certificados ── */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.5 }}
        >
          <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--accent-1)' }}>workspace_premium</span>
          <span className="section-label" style={{ letterSpacing: '0.15em' }}>{t('education.certs_label')}</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.55 + i * 0.06 }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-lg"
                style={{ width: 40, height: 40, backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--accent-1)' }}>{cert.icon}</span>
              </div>
              <div className="min-w-0">
                <p className="font-heading font-semibold text-sm leading-snug" style={{ color: 'var(--text)' }}>
                  {cert.title}
                </p>
                <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
