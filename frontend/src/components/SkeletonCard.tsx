import { motion } from 'framer-motion'

interface SkeletonCardProps {
  className?: string
}

export default function SkeletonCard({ className = '' }: SkeletonCardProps) {
  return (
    <motion.div
      className={`offering-card ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skeleton-wrapper">
        <motion.div
          className="skeleton offering-icon"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(90deg, var(--color-bg-elevated) 25%, var(--color-border) 50%, var(--color-bg-elevated) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
        <motion.div
          className="skeleton skeleton-title"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          style={{
            height: '24px',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '0.75rem',
            background: 'linear-gradient(90deg, var(--color-bg-elevated) 25%, var(--color-border) 50%, var(--color-bg-elevated) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite 0.2s'
          }}
        />
        <motion.div
          className="skeleton skeleton-text"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          style={{
            height: '16px',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '0.5rem',
            background: 'linear-gradient(90deg, var(--color-bg-elevated) 25%, var(--color-border) 50%, var(--color-bg-elevated) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite 0.4s'
          }}
        />
        <motion.div
          className="skeleton skeleton-text"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          style={{
            height: '16px',
            borderRadius: 'var(--radius-sm)',
            width: '80%',
            background: 'linear-gradient(90deg, var(--color-bg-elevated) 25%, var(--color-border) 50%, var(--color-bg-elevated) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite 0.6s'
          }}
        />
      </div>
    </motion.div>
  )
}
