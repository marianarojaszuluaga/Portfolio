import { motion } from 'framer-motion'
import { profile, skills } from '../content'
import { BadgeIcon } from './Icons'

const ticker = [...skills, ...skills]

const Sparkle = ({ size = 24, color = 'var(--pink)', style = {} }: { size?: number; color?: string; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style}>
    <path d="M12 2L13.09 8.26L19 6L14.74 10.74L21 12L14.74 13.26L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.26L3 12L9.26 10.74L5 6L10.91 8.26L12 2Z"/>
  </svg>
)

const stickers = [
  { icon: 'years', text: '5+ years', sub: 'building things', color: 'var(--lime)', textColor: 'var(--dark)', rotate: '-6deg', pos: { top: '8%', left: '2%' } },
  { icon: 'remote', text: 'Remote', sub: 'Colombia', color: 'var(--pink)', textColor: '#fff', rotate: '4deg', pos: { top: '18%', right: '2%' } },
  { icon: 'pets', text: 'Pets', sub: 'dog mom', color: '#fff', textColor: 'var(--dark)', rotate: '-3deg', pos: { bottom: '32%', right: '3%' } },
  { icon: 'ride', text: 'Ride', sub: 'love biking', color: 'var(--cyan)', textColor: 'var(--dark)', rotate: '5deg', pos: { bottom: '38%', left: '1%' } },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--cream)' }}
    >
      {/* scattered sparkles */}
      <motion.div className="absolute" style={{ top: '12%', left: '8%' }} animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
        <Sparkle size={28} color="var(--pink)" />
      </motion.div>
      <motion.div className="absolute" style={{ top: '30%', right: '10%' }} animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}>
        <Sparkle size={20} color="var(--orange)" />
      </motion.div>
      <motion.div className="absolute" style={{ bottom: '28%', left: '15%' }} animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
        <Sparkle size={16} color="var(--purple)" />
      </motion.div>
      <motion.div className="absolute" style={{ top: '60%', right: '6%' }} animate={{ rotate: -360 }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}>
        <Sparkle size={22} color="var(--lime)" />
      </motion.div>

      {/* pink blob bg */}
      <div
        className="absolute blob-1 pointer-events-none"
        style={{ width: 420, height: 380, backgroundColor: 'var(--pink-lt)', top: '-60px', right: '-80px', opacity: 0.7 }}
      />
      <div
        className="absolute blob-2 pointer-events-none"
        style={{ width: 220, height: 200, backgroundColor: 'var(--lime)', bottom: '120px', left: '-40px', opacity: 0.5 }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center pt-28 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT — text */}
          <div>
            <motion.p
              className="font-mono text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--pink)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              ¡Hola! — I'm
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                className="font-display font-bold leading-none mb-2"
                style={{ fontSize: 'clamp(5rem, 15vw, 11rem)', color: 'var(--dark)', letterSpacing: '-0.02em' }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, ease: [0.77, 0, 0.175, 1] }}
              >
                {profile.displayName}
              </motion.h1>
            </div>

            <motion.p
              className="font-hand text-2xl mb-4"
              style={{ color: 'var(--pink)' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Strategic Product &amp; Ops Lead ✦
            </motion.p>

            <motion.p
              className="font-heading text-base leading-relaxed max-w-md mb-8"
              style={{ color: 'var(--text-muted)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55 }}
            >
              <a href="#projects" className="pill-btn pill-btn-pink">
                See my work
              </a>
              <a href="#contact" className="pill-btn pill-btn-white">
                Let's talk →
              </a>
            </motion.div>
          </div>

          {/* RIGHT — photo collage */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <div className="relative" style={{ width: 340, height: 400 }}>
              {/* orange color block behind */}
              <div
                className="absolute blob-3"
                style={{ width: 290, height: 350, backgroundColor: 'var(--orange)', top: 20, left: 20, opacity: 0.18 }}
              />

              {/* photo blob */}
              <div
                className="blob-photo absolute"
                style={{ width: 280, height: 340, top: 0, left: 0, border: '3px solid var(--dark)', boxShadow: '6px 6px 0 var(--dark)' }}
              >
                <img
                  src="/hero.png"
                  alt="Mariana Rojas Zuluaga"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement
                    t.style.display = 'none'
                    const p = t.parentElement
                    if (p) {
                      p.style.background = 'linear-gradient(135deg,var(--pink-lt),var(--cream))'
                      p.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Fredoka',sans-serif;font-size:7rem;font-weight:700;color:var(--pink)">M</div>`
                    }
                  }}
                />
              </div>

              {/* floating sticker cards */}
              {stickers.map((s, i) => (
                <motion.div
                  key={i}
                  className="absolute px-3 py-2 rounded-xl border-2"
                  style={{
                    ...s.pos,
                    backgroundColor: s.color,
                    borderColor: 'var(--dark)',
                    boxShadow: '3px 3px 0 var(--dark)',
                    rotate: s.rotate,
                    minWidth: 80,
                    textAlign: 'center',
                    zIndex: 10,
                  }}
                  initial={{ scale: 0, rotate: s.rotate }}
                  animate={{ scale: 1, rotate: s.rotate }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.12, type: 'spring', stiffness: 260 }}
                  whileHover={{ scale: 1.12, zIndex: 20 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <BadgeIcon type={s.icon as any} size={18} color={s.textColor} className="shrink-0" />
                    <div className="font-display font-bold text-sm leading-tight" style={{ color: s.textColor }}>{s.text}</div>
                  </div>
                  <div className="font-mono text-xs opacity-80" style={{ color: s.textColor }}>{s.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ticker strip */}
      <div
        className="overflow-hidden border-y-2 py-3"
        style={{ borderColor: 'var(--dark)', backgroundColor: 'var(--pink)' }}
      >
        <div className="marquee-track">
          {ticker.map((skill, i) => (
            <span
              key={i}
              className="px-6 text-xs font-heading font-bold uppercase tracking-widest whitespace-nowrap text-white"
            >
              {skill}
              <span className="mx-4 opacity-60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
