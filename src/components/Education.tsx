import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '../content'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-28 relative" style={{ backgroundColor: 'var(--surface)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent-3) 50%, transparent)' }}
      />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}
        >
          04 — Education
        </motion.p>
        <motion.h2
          className="font-display font-extrabold mb-16"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Built on <span className="grad-lime">foundation.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl group hover:brightness-110 transition-all duration-200"
              style={{ backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
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
                {item.title}
              </h3>
              <p className="text-sm font-heading" style={{ color: 'var(--accent-2)' }}>
                {item.institution}
              </p>
              {item.relevance && (
                <p className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.relevance}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
