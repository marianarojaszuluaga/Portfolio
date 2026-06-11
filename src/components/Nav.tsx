import { useState, useEffect } from 'react'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Cómo pienso', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Formación', href: '#education' },
  { label: 'Hablemos', href: '#contact' },
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
        scrolled ? 'backdrop-blur-md bg-bg/80 border-b border-surface-2' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-heading font-bold text-accent-1 text-lg">MRZ</span>
        <ul className="hidden md:flex gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="text-text-muted hover:text-text transition-colors text-sm font-medium">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-text-muted" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>
      {open && (
        <ul className="md:hidden bg-surface px-6 pb-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="text-text-muted hover:text-text transition-colors text-sm font-medium block py-1" onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
