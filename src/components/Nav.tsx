import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg' : ''
      }`}
      style={scrolled ? { backgroundColor: 'rgba(7,7,15,0.85)', borderBottom: '1px solid var(--border)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display font-extrabold text-xl" style={{ color: 'var(--accent-1)' }}>
          MRZ
        </a>
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-heading font-bold transition-colors duration-200 hover:text-text"
                style={{ color: 'var(--text-muted)' }}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-sm font-heading font-bold transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: 'var(--accent-1)', color: '#fff' }}
            >
              Let's talk →
            </a>
          </li>
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="block w-5 h-0.5 mb-1 transition-all" style={{ backgroundColor: 'var(--text)' }} />
          <span className="block w-5 h-0.5 mb-1" style={{ backgroundColor: 'var(--text)' }} />
          <span className="block w-5 h-0.5" style={{ backgroundColor: 'var(--text)' }} />
        </button>
      </div>
      {open && (
        <ul
          className="md:hidden px-6 pb-5 flex flex-col gap-4 border-t"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-heading font-bold block py-1"
                style={{ color: 'var(--text-muted)' }}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
