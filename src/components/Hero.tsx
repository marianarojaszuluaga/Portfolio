import { motion } from 'framer-motion'
import { profile } from '../content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #1e1b4b 50%, #0f172a 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, var(--accent-1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--accent-2) 0%, transparent 40%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-text-muted font-mono text-sm mb-4 tracking-widest uppercase">Hola, soy</p>
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-text mb-6 leading-tight">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-2xl mb-10 leading-relaxed">
            {profile.tagline}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg font-heading font-bold text-text transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: 'var(--accent-3)' }}
          >
            Hablemos →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
