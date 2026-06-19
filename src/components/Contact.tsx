import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../content'
import { ContactIcon } from './Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
      style={{ backgroundColor: 'var(--pink)' }}
    >
      {/* checker strip top */}
      <div className="checker-pink w-full h-5 absolute top-0 left-0 opacity-30" />

      {/* blobs */}
      <div className="absolute blob-1 pointer-events-none" style={{ width: 300, height: 280, backgroundColor: 'rgba(255,255,255,0.08)', top: -80, right: -60 }} />
      <div className="absolute blob-2 pointer-events-none" style={{ width: 200, height: 180, backgroundColor: 'rgba(255,255,255,0.06)', bottom: -40, left: -40 }} />

      {/* sparkles */}
      <motion.svg className="absolute top-16 left-10 opacity-40" width="28" height="28" viewBox="0 0 24 24" fill="var(--lime)"
        animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
        <path d="M12 2L13.09 8.26L19 6L14.74 10.74L21 12L14.74 13.26L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.26L3 12L9.26 10.74L5 6L10.91 8.26L12 2Z"/>
      </motion.svg>
      <motion.svg className="absolute bottom-20 right-12 opacity-30" width="36" height="36" viewBox="0 0 24 24" fill="#fff"
        animate={{ rotate: -360 }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}>
        <path d="M12 2L13.09 8.26L19 6L14.74 10.74L21 12L14.74 13.26L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.26L3 12L9.26 10.74L5 6L10.91 8.26L12 2Z"/>
      </motion.svg>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10" ref={ref}>
        <motion.p
          className="section-label mb-5"
          style={{ color: 'rgba(255,255,255,0.7)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          05 — Contact
        </motion.p>

        <motion.h2
          className="font-display font-bold leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', color: '#fff', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's make
          <br />
          something{' '}
          <span style={{ color: 'var(--lime)' }}>great.</span> ✦
        </motion.h2>

        <motion.p
          className="font-heading text-lg mb-12 max-w-lg mx-auto"
          style={{ color: 'rgba(255,255,255,0.85)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm open to new projects, collabs, and conversations.
          Write to me — I respond to everything.
        </motion.p>

        {/* big email CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="pill-btn pill-btn-lime text-lg px-10 py-4"
          >
            Send me an email
          </a>
          <button
            onClick={copyEmail}
            className="pill-btn pill-btn-white text-sm"
          >
            {copied ? '✓ Copied!' : 'Copy email'}
          </button>
        </motion.div>

        {/* contact cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[
            { iconType: 'location', label: 'Location', value: 'Colombia · Remote' },
            { iconType: 'phone', label: 'Phone', value: profile.phone },
            { iconType: 'link', label: 'LinkedIn', value: "Let's connect", href: profile.linkedin },
          ].map(({ iconType, label, value, href }) => (
            <div
              key={label}
              className="sticker-card p-4 text-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
            >
              <div className="flex items-center justify-center mb-1 text-2xl" style={{ color: 'var(--pink)' }}>
                <ContactIcon type={iconType as any} size={22} color="var(--pink)" />
              </div>
              <div className="font-mono text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{label}</div>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="font-heading font-bold text-sm hover:underline" style={{ color: 'var(--pink)' }}>
                  {value}
                </a>
              ) : (
                <span className="font-heading font-bold text-sm" style={{ color: 'var(--dark)' }}>{value}</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* footer note */}
        <motion.p
          className="font-hand text-xl mt-14"
          style={{ color: 'rgba(255,255,255,0.6)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          made with love + coffee in Colombia
        </motion.p>
      </div>

      {/* checker strip bottom */}
      <div className="checker-pink w-full h-5 absolute bottom-0 left-0 opacity-30" />
    </section>
  )
}
