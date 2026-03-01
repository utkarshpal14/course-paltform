import { useEffect, useState } from 'react'

export default function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      setTimeout(() => {
        setTrailPosition({ x: e.clientX, y: e.clientY })
      }, 100)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div
        className="cursor-trail"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}
