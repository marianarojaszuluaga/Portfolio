interface IconProps {
  size?: number
  color?: string
  className?: string
}

export function BadgeIcon({ type, size = 20, color = 'currentColor', className = '' }: IconProps & { type: 'years' | 'remote' | 'pets' | 'ride' }) {
  const common = { width: size, height: size, fill: color, className }

  switch (type) {
    case 'years':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M7 4h2V2h2v2h4V2h2v2h2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 4v14h10V8H7zm2 2h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h6v2H9v-2z" />
        </svg>
      )
    case 'remote':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M12 20c1.66 0 3-1.34 3-3h-6c0 1.66 1.34 3 3 3zm0-12c-2.76 0-5 1.12-6.71 2.93l1.42 1.42A7.964 7.964 0 0112 10c1.93 0 3.68.75 4.99 1.96l1.42-1.42C17 9.12 14.76 8 12 8zm0-4c-4.42 0-8.3 1.79-11.16 4.68l1.41 1.41A11.933 11.933 0 0112 6c3.14 0 6.01 1.21 8.25 3.19l1.41-1.41C20.3 3.79 16.42 4 12 4z" />
        </svg>
      )
    case 'pets':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M12 8.5c-1.1 0-2 .9-2 2 0 1.65 2 4.5 2 4.5s2-2.85 2-4.5c0-1.1-.9-2-2-2zm4-2.5c-.83 0-1.5.67-1.5 1.5S15.17 8 16 8.5 17.5 7.83 17.5 7 16.83 6 16 6zm-8 0C7.17 6 6.5 6.67 6.5 7.5S7.17 9 8 9s1.5-.67 1.5-1.5S8.83 6 8 6zm0 5.5c-1.1 0-2 .9-2 2 0 1.65 2 4.5 2 4.5s2-2.85 2-4.5c0-1.1-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2 0 1.65 2 4.5 2 4.5s2-2.85 2-4.5c0-1.1-.9-2-2-2z" />
        </svg>
      )
    case 'ride':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M5 16c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm11 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-1.12-3.5l1.5-4H18v-2h-4.38l-1.2 3.2-1.66-1.08A1.5 1.5 0 009.5 8h-1C7.22 8 6 9.22 6 10.5v.5H4v2h2v.5c0 .83.67 1.5 1.5 1.5h1.91l1.6-4.27 1.68 1.1zm-4.7 4.7a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
        </svg>
      )
    default:
      return null
  }
}

export function ContactIcon({ type, size = 24, color = 'currentColor', className = '' }: IconProps & { type: 'location' | 'phone' | 'link' }) {
  const common = { width: size, height: size, fill: color, className }

  switch (type) {
    case 'location':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>
      )
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M6.62 10.79a15.466 15.466 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.24 2.13z" />
        </svg>
      )
    case 'link':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M3.9 12c0-1.65 1.35-3 3-3h4v2H6.9a1 1 0 000 2H10v2H6.9a3 3 0 01-3-3zm5.3-1h6.6a1 1 0 010 2H9.2V11zm0 6h4v-2H9.2a1 1 0 010-2H13v-2H9.2a3 3 0 000 6zm8.6-8h-4v2h4a1 1 0 010 2h-4v2h4a3 3 0 000-6z" />
        </svg>
      )
    default:
      return null
  }
}

export function FlagIcon({ code, size = 24, className = '' }: { code: 'gb' | 'co' | 'fr'; size?: number; className?: string }) {
  const common = { width: size, height: size, className }

  switch (code) {
    case 'gb':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true" role="img">
          <rect width="24" height="24" fill="#012169" />
          <path d="M0 9.6h24v4.8H0Z" fill="#fff" />
          <path d="M0 10.8h24v2.4H0Z" fill="#C8102E" />
          <path d="M9.6 0h4.8v24h-4.8Z" fill="#fff" />
          <path d="M10.8 0h2.4v24h-2.4Z" fill="#C8102E" />
          <path d="M0 0l24 24" stroke="#fff" strokeWidth="4" />
          <path d="M24 0L0 24" stroke="#fff" strokeWidth="4" />
          <path d="M0 0l24 24" stroke="#C8102E" strokeWidth="2" />
          <path d="M24 0L0 24" stroke="#C8102E" strokeWidth="2" />
        </svg>
      )
    case 'co':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true" role="img">
          <rect width="24" height="8" fill="#FCD116" />
          <rect y="8" width="24" height="8" fill="#0033A0" />
          <rect y="16" width="24" height="8" fill="#CE1126" />
        </svg>
      )
    case 'fr':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true" role="img">
          <rect width="8" height="24" fill="#0055A4" />
          <rect x="8" width="8" height="24" fill="#FFFFFF" />
          <rect x="16" width="8" height="24" fill="#EF4135" />
        </svg>
      )
    default:
      return null
  }
}

export function CategoryIcon({ category, size = 16, color = 'currentColor', className = '' }: IconProps & { category: string }) {
  const common = { width: size, height: size, fill: color, className }

  switch (category) {
    case 'imagine-apps':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M4 5h16v4H4V5zm0 6h10v4H4v-4zm0 6h6v4H4v-4z" />
        </svg>
      )
    case 'ia':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M12 2a7 7 0 00-7 7c0 2.8 1.6 5.2 4 6.4V19a1 1 0 002 0v-3.6c2.4-1.2 4-3.6 4-6.4a7 7 0 00-7-7zm0 2a5 5 0 015 5c0 1.8-1 3.3-2.5 4.2L12 15l-2.5-1.8A5 5 0 017 9a5 5 0 015-5z" />
        </svg>
      )
    case 'operaciones':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M19.14 12.94a7.49 7.49 0 000-1.88l2.03-1.58a.5.5 0 00.12-.65l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.8 7.8 0 00-1.62-.94l-.36-2.54A.5.5 0 0014.48 2h-3a.5.5 0 00-.49.42l-.36 2.54a7.8 7.8 0 00-1.62.94l-2.39-.96a.5.5 0 00-.6.22L2.7 8.83a.5.5 0 00.12.65l2.03 1.58a7.49 7.49 0 000 1.88L2.82 14.5a.5.5 0 00-.12.65l1.92 3.32a.5.5 0 00.6.22l2.39-.96c.5.4 1.04.73 1.62.94l.36 2.54a.5.5 0 00.49.42h3a.5.5 0 00.49-.42l.36-2.54c.58-.21 1.12-.54 1.62-.94l2.39.96a.5.5 0 00.6-.22l1.92-3.32a.5.5 0 00-.12-.65l-2.03-1.58zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
        </svg>
      )
    case 'emprendimiento':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M12 2l1.45 4.7h4.94L14.6 9.1l1.53 4.7L12 11.6 7.87 13.8 9.4 9.1 6.61 6.7h4.94z" />
        </svg>
      )
    case 'intentos':
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M6 2h12v2H6V2zm1 4h10v2H7V6zm2 4h6v9H9V10zm1 2v5h4v-5H10z" />
        </svg>
      )
    default:
      return null
  }
}
