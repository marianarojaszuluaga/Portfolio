import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { profile, skills, languages } from '../content'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const paragraphs = profile.bio.split('\n\n').filter(Boolean)

  return (
    <section id="about" className="py-28 relative" style={{ backgroundColor: 'var(--surface)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent-1) 40%, var(--accent-2) 60%, transparent)' }}
      />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}
        >
          01 — About
        </motion.p>
        <motion.h2
          className="font-display font-extrabold mb-16"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="grad-orange">Hi, I'm</span>{' '}
          <span style={{ color: 'var(--text)' }}>Mar.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* bio */}
          <div className="lg:col-span-3 space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="leading-relaxed"
                style={{ fontSize: '1.05rem', color: i === 0 ? 'var(--text)' : 'var(--text-muted)' }}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                {i === 0 ? <strong>{p}</strong> : p}
              </motion.p>
            ))}
          </div>

          {/* skills + languages */}
          <div className="lg:col-span-2 space-y-10">
            {/* skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <p className="section-label mb-4">Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-md text-xs font-heading font-bold"
                    style={{ backgroundColor: 'var(--surface-2)', color: 'var(--accent-3)', border: '1px solid rgba(184,255,87,0.15)' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <p className="section-label mb-4">Languages</p>
              <div className="space-y-3">
                {languages.map(({ lang, flag, level }) => (
                  <div key={lang} className="flex items-center gap-3">
                    <span className="text-2xl">{flag}</span>
                    <div>
                      <span className="font-heading font-bold text-sm" style={{ color: 'var(--text)' }}>{lang}</span>
                      <span className="text-xs ml-2" style={{ color: 'var(--text-muted)' }}>{level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
