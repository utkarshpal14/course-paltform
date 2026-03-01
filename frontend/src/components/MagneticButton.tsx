import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      const distance = Math.sqrt(x * x + y * y)
      const maxDistance = 100
      
      if (distance < maxDistance) {
        const strength = (maxDistance - distance) / maxDistance
        const moveX = (x / maxDistance) * strength * 20
        const moveY = (y / maxDistance) * strength * 20
        
        button.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + strength * 0.05})`
      }
    }

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px) scale(1)'
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.button
      ref={buttonRef}
      className={`magnetic-btn ${className}`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
}
