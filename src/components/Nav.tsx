import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Nav() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { label: t('nav.about'),    href: '#about' },
    { label: t('nav.work'),     href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.gallery'),  href: '#gallery' },
    { label: t('nav.contact'),  href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')

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
          aria-label="Mariana Rojas — go to top"
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
          {/* language toggle */}
          <li>
            <button
              onClick={toggleLang}
              aria-label={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-bold border-2 transition-all duration-200"
              style={{ borderColor: 'var(--dark)', color: 'var(--dark)', boxShadow: '2px 2px 0 var(--dark)' }}
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
          </li>
          <li className="ml-2">
            <a href="mailto:rojaszuluagamariana@gmail.com" className="pill-btn pill-btn-pink text-sm" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>
              {t('nav.cta')}
            </a>
          </li>
        </ul>

        {/* hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`block h-0.5 w-5 transition-all origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--dark)' }} />
          <span className={`block h-0.5 w-5 transition-all ${open ? 'opacity-0 scale-x-0' : ''}`} style={{ backgroundColor: 'var(--dark)' }} />
          <span className={`block h-0.5 w-5 transition-all origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--dark)' }} />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          id="mobile-menu"
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
          <button
            onClick={toggleLang}
            className="font-mono text-sm font-bold py-1 text-left"
            style={{ color: 'var(--text-muted)' }}
          >
            {i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
          <a href="mailto:rojaszuluagamariana@gmail.com" className="pill-btn pill-btn-pink mt-2" style={{ alignSelf: 'flex-start' }}>
            {t('nav.cta')}
          </a>
        </div>
      )}
    </nav>
  )
}
