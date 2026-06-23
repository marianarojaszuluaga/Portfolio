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
