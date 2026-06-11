import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../content'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const paragraphs = profile.about.split('\n\n').filter(Boolean)

  return (
    <section id="about" className="py-24" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12" style={{ color: 'var(--accent-1)' }}>
            Cómo pienso
          </h2>
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-text leading-relaxed text-lg"
                style={{ maxWidth: '65ch' }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
