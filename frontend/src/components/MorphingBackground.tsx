export default function MorphingBackground() {
  return (
    <div className="morphing-bg">
      <div className="morph-shape" style={{ top: '10%', left: '10%' }} />
      <div className="morph-shape" style={{ top: '60%', right: '15%' }} />
      <div className="morph-shape" style={{ bottom: '20%', left: '20%' }} />
    </div>
  )
}
