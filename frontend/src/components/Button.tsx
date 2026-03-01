import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  external?: boolean
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  external = false,
}: ButtonProps) {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`.trim()

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  )

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {content}
    </button>
  )
}
