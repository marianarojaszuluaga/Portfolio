import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../content'

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
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #1e1b4b 60%, #0f172a 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 60%, var(--accent-3) 0%, transparent 50%)' }}
      />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6">
            Si estás construyendo algo que debería funcionar mejor —
          </h2>
          <p className="text-text-muted text-xl mb-12">escríbeme.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={copyEmail}
              className="px-6 py-3 rounded-lg font-mono text-sm transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}
            >
              {copied ? '¡Copiado! ✓' : profile.email}
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-heading font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: 'var(--accent-2)', color: 'var(--text)' }}
            >
              LinkedIn →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
