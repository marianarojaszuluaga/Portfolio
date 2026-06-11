import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../content'

const contactItems = [
  {
    label: 'Email',
    value: 'rojaszuluagamariana@gmail.com',
    href: 'mailto:rojaszuluagamariana@gmail.com',
    icon: '✉️',
    copyable: true,
  },
  {
    label: 'Phone',
    value: '3124821769',
    href: 'tel:+573124821769',
    icon: '📞',
    copyable: false,
  },
  {
    label: 'Location',
    value: 'Colombia — remote worldwide',
    href: undefined,
    icon: '📍',
    copyable: false,
  },
]

const connectItems = [
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: '🔗',
    cta: "Let's connect",
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const copyEmail = async () => {
    await navigator.clipboard.writeText('rojaszuluagamariana@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: 'var(--accent-1)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}
        >
          05 — Contact
        </motion.p>
        <motion.h2
          className="font-display font-extrabold mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.05 }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Building something
          <br />
          that should work <span className="grad-orange">better?</span>
        </motion.h2>

        <motion.p
          className="text-lg mb-16 max-w-xl"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.25 }}
        >
          I'd love to hear about it. Write to me — I respond to every message.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* contact details */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="section-label mb-5">Reach me</p>
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <span className="text-xl">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-heading font-bold text-sm hover:underline truncate block"
                      style={{ color: 'var(--text)' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-heading font-bold text-sm" style={{ color: 'var(--text)' }}>
                      {item.value}
                    </span>
                  )}
                </div>
                {item.copyable && (
                  <button
                    onClick={copyEmail}
                    className="text-xs font-mono px-3 py-1.5 rounded-md transition-all hover:scale-105"
                    style={{ backgroundColor: copied ? 'rgba(184,255,87,0.15)' : 'var(--surface-2)', color: copied ? 'var(--accent-3)' : 'var(--text-muted)' }}
                  >
                    {copied ? '✓ copied' : 'copy'}
                  </button>
                )}
              </div>
            ))}
          </motion.div>

          {/* connect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="section-label mb-5">Connect</p>
            <div className="space-y-4">
              {connectItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl group transition-all duration-200 hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-heading font-bold" style={{ color: 'var(--text)' }}>{item.label}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.cta}</p>
                    </div>
                  </div>
                  <span className="text-lg group-hover:translate-x-1 transition-transform" style={{ color: 'var(--accent-1)' }}>→</span>
                </a>
              ))}

              {/* primary CTA */}
              <a
                href="mailto:rojaszuluagamariana@gmail.com"
                className="flex items-center justify-center gap-2 p-5 rounded-xl font-display font-extrabold text-xl transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, var(--accent-1), #ff9a6c)', color: '#fff' }}
              >
                Write me an email ✉️
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
