import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '../content'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-24" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl mb-12"
          style={{ color: 'var(--accent-3)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Formación
        </motion.h2>
        {education.length > 0 ? (
          <div className="grid gap-4">
            {education.map((item, i) => (
              <motion.div
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: 'var(--surface-2)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="font-heading font-bold text-text">{item.title}</h3>
                    <p className="text-text-muted text-sm mt-1">{item.institution}</p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--surface)', color: 'var(--text-muted)' }}>
                    {item.period}
                  </span>
                </div>
                {item.relevance && <p className="text-text-muted text-sm mt-3 leading-relaxed">{item.relevance}</p>}
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-text-muted">Formación próximamente.</p>
        )}
      </div>
    </section>
  )
}
