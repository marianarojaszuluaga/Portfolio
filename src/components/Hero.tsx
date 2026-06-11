import { motion } from 'framer-motion'
import { profile, skills } from '../content'

export default function Hero() {
  const ticker = [...skills, ...skills]

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* glow blobs */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: 'var(--accent-1)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: 'var(--accent-2)' }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="section-label mb-6">¡Hola! — I'm</p>

            <h1
              className="font-display font-extrabold leading-none mb-4"
              style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', color: 'var(--text)' }}
            >
              {profile.displayName}
            </h1>

            <p
              className="font-heading font-bold mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', color: 'var(--text-muted)' }}
            >
              Strategic Product &amp; Operations Manager
            </p>

            <p className="text-text leading-relaxed max-w-lg mb-10" style={{ fontSize: '1.05rem' }}>
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-lg font-heading font-bold text-sm transition-all duration-200 hover:scale-105 hover:brightness-110"
                style={{ backgroundColor: 'var(--accent-1)', color: '#fff' }}
              >
                See my work →
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-lg font-heading font-bold text-sm border transition-all duration-200 hover:scale-105"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              >
                Let's talk
              </a>
            </div>

            <div className="flex items-center gap-2 mt-8">
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: 'var(--accent-3)' }}
              />
              <span className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
                {profile.location}
              </span>
            </div>
          </motion.div>

          {/* right — photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="relative">
              {/* decorative ring */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-30"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                  filter: 'blur(16px)',
                }}
              />
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)' }}
              >
                <img
                  src="/hero.png"
                  alt="Mariana Rojas Zuluaga"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.style.background = 'var(--surface-2)'
                      parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:Syne,sans-serif;font-size:5rem;font-weight:800;color:var(--accent-1)">M</div>`
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* skills ticker */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 border-t"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
      >
        <div className="marquee-track">
          {ticker.map((skill, i) => (
            <span key={i} className="px-8 text-sm font-heading font-bold whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
              {skill}
              <span className="mx-4 opacity-30" style={{ color: 'var(--accent-1)' }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
