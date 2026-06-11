import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience, additionalExperience } from '../content'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-28 relative" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}
        >
          02 — Experience
        </motion.p>
        <motion.h2
          className="font-display font-extrabold mb-16"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Where I've <span className="grad-cyan">worked.</span>
        </motion.h2>

        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, var(--accent-1), var(--accent-2), transparent)' }}
          />

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="md:pl-10 relative group"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
              >
                {/* dot */}
                <div
                  className="absolute left-0 top-6 w-2.5 h-2.5 rounded-full -translate-x-[5px] hidden md:block transition-transform group-hover:scale-150"
                  style={{ backgroundColor: exp.highlight ? 'var(--accent-1)' : 'var(--surface-2)', border: '2px solid var(--accent-1)' }}
                />

                <div
                  className="py-7 border-b transition-colors duration-200"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3
                        className="font-display font-bold text-xl"
                        style={{ color: exp.highlight ? 'var(--accent-1)' : 'var(--text)' }}
                      >
                        {exp.role}
                      </h3>
                      <p className="font-heading font-bold text-sm mt-0.5" style={{ color: 'var(--accent-2)' }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <span
                        className="font-mono text-xs px-3 py-1 rounded-full"
                        style={{ backgroundColor: 'var(--surface-2)', color: 'var(--text-muted)' }}
                      >
                        {exp.period}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        📍 {exp.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-muted)' }}>
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* additional */}
        <motion.div
          className="mt-12 p-6 rounded-xl"
          style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="section-label mb-4">Additional Experience</p>
          <div className="flex flex-wrap gap-3">
            {additionalExperience.map((item) => (
              <span
                key={item}
                className="text-sm px-3 py-1.5 rounded-md font-heading"
                style={{ backgroundColor: 'var(--surface-2)', color: 'var(--text-muted)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
