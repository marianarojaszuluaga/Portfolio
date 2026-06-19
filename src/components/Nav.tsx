import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,248,240,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '2px solid rgba(26,26,26,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* logo */}
        <a
          href="#hero"
          className="font-display font-bold text-2xl select-none"
          style={{ color: 'var(--pink)', letterSpacing: '-0.01em' }}
        >
          mar.✦
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex gap-2 items-center">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="px-4 py-1.5 rounded-full text-sm font-heading font-semibold transition-all duration-200 hover:bg-pink-50"
                style={{ color: 'var(--dark)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--pink)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--dark)' }}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href="mailto:rojaszuluagamariana@gmail.com" className="pill-btn pill-btn-pink text-sm" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>
              Let's talk!
            </a>
          </li>
        </ul>

        {/* hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-5 transition-all origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--dark)' }} />
          <span className={`block h-0.5 w-5 transition-all ${open ? 'opacity-0 scale-x-0' : ''}`} style={{ backgroundColor: 'var(--dark)' }} />
          <span className={`block h-0.5 w-5 transition-all origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--dark)' }} />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-3"
          style={{ backgroundColor: 'var(--cream)', borderTop: '2px solid var(--dark)' }}
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-display text-xl font-bold py-1"
              style={{ color: 'var(--dark)' }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="mailto:rojaszuluagamariana@gmail.com" className="pill-btn pill-btn-pink mt-2" style={{ alignSelf: 'flex-start' }}>
            Let's talk!
          </a>
        </div>
      )}
    </nav>
  )
}
