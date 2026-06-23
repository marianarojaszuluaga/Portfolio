import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FlagIcon } from './Icons'

const Sparkle = ({ size = 20, color = '#fff' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2L13.09 8.26L19 6L14.74 10.74L21 12L14.74 13.26L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.26L3 12L9.26 10.74L5 6L10.91 8.26L12 2Z"/>
  </svg>
)

const skillColors = [
  { bg: 'var(--pink)',   text: '#fff'           },
  { bg: 'var(--lime)',   text: 'var(--dark)'    },
  { bg: 'var(--orange)', text: '#fff'           },
  { bg: 'var(--cyan)',   text: 'var(--dark)'    },
  { bg: 'var(--purple)', text: '#fff'           },
]

export default function About() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const bioParagraphs = ['about.bio_p1', 'about.bio_p2', 'about.bio_p3', 'about.bio_p4']
  const skills = t('skills', { returnObjects: true }) as string[]
  const languages = t('languages_list', { returnObjects: true }) as Array<{ lang: string; code: string; level: string }>

  const stats = [
    { n: t('about.stat_years_value'),    label: t('about.stat_years_label') },
    { n: t('about.stat_agents_value'),   label: t('about.stat_agents_label') },
    { n: t('about.stat_languages_value'),label: t('about.stat_languages_label') },
  ]

  return (
    <section id="about" className="relative overflow-hidden" style={{ backgroundColor: 'var(--teal)' }}>
      {/* sparkle decorations */}
      <div className="absolute top-8 right-12 opacity-60"><Sparkle size={32} color="#fff" /></div>
      <div className="absolute bottom-16 left-10 opacity-40"><Sparkle size={24} color="var(--lime)" /></div>
      <div className="absolute top-1/2 right-8 opacity-30"><Sparkle size={18} color="var(--cream)" /></div>

      {/* blob accent */}
      <div
        className="absolute blob-1 pointer-events-none"
        style={{ width: 300, height: 280, backgroundColor: 'rgba(0,0,0,0.06)', top: -60, left: -60 }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24" ref={ref}>
        <motion.p
          className="section-label mb-4"
          style={{ color: 'rgba(255,255,255,0.7)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          {t('about.section_label')}
        </motion.p>

        <motion.h2
          className="font-display font-bold leading-none mb-14"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)', color: '#fff', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('about.heading')}
          <span className="font-hand ml-4" style={{ fontSize: '0.55em', color: 'rgba(255,255,255,0.9)' }}>
            {t('about.subtitle')}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* bio col */}
          <div className="lg:col-span-7 space-y-5">
            {bioParagraphs.map((key, i) => (
              <motion.p
                key={key}
                className="leading-relaxed"
                style={{
                  fontSize: i === 0 ? '1.25rem' : '1rem',
                  fontWeight: i === 0 ? 600 : 400,
                  color: i === 0 ? '#fff' : 'rgba(255,255,255,0.82)',
                  fontFamily: i === 0 ? "'Space Grotesk',sans-serif" : undefined,
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                {t(key)}
              </motion.p>
            ))}

            {/* stat strip */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              {stats.map(({ n, label }) => (
                <div
                  key={label}
                  className="sticker-card text-center p-4"
                  style={{ backgroundColor: 'var(--cream)' }}
                >
                  <div className="font-display font-bold" style={{ fontSize: '2.2rem', color: 'var(--pink)' }}>{n}</div>
                  <div className="font-mono text-xs uppercase tracking-wide mt-1" style={{ color: 'var(--dark)' }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="sticker-card p-6" style={{ backgroundColor: 'var(--cream)' }}>
                <p className="section-label mb-5" style={{ color: 'var(--text-muted)' }}>{t('about.languages_title')}</p>
                <div className="space-y-4">
                  {languages.map(({ lang, code, level }) => (
                    <div key={lang} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FlagIcon code={code} size={24} className="rounded-sm" />
                        <span className="font-heading font-bold" style={{ color: 'var(--dark)' }}>{lang}</span>
                      </div>
                      <span
                        className="tag-pill text-xs"
                        style={{ borderColor: 'var(--pink)', color: 'var(--pink)', backgroundColor: 'var(--pink-lt)' }}
                      >
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.48 }}
            >
              <p className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('about.skills_title')}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => {
                  const c = skillColors[i % skillColors.length]
                  return (
                    <motion.span
                      key={s}
                      className="px-3 py-1.5 rounded-full text-xs font-heading font-bold border-2"
                      style={{ backgroundColor: c.bg, color: c.text, borderColor: 'var(--dark)', boxShadow: '2px 2px 0 var(--dark)' }}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.04, type: 'spring' }}
                      whileHover={{ scale: 1.1, rotate: -2 }}
                    >
                      {s}
                    </motion.span>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* wavy bottom */}
      <div className="wave-divider" style={{ marginBottom: -2 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="var(--cream)" />
        </svg>
      </div>
    </section>
  )
}
