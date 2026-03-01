import { motion } from 'framer-motion'
import Button from '../components/Button'
import MagneticButton from '../components/MagneticButton'
import TextReveal from '../components/TextReveal'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const offerings = [
  {
    title: 'Industry Mentorship',
    desc: '1-on-1 guidance from seasoned professionals. Get personalized feedback and career advice from experts who\'ve built real products.',
    icon: '👥',
  },
  {
    title: 'Real-World Projects',
    desc: 'Build portfolio-worthy projects that mirror industry standards. Work on live codebases and deploy to production.',
    icon: '🚀',
  },
  {
    title: 'AI + Full Stack',
    desc: 'Master cutting-edge tech stack: React, .NET Core, SQL, and AI integration. Stay ahead of the curve.',
    icon: '⚡',
  },
]

const stats = [
  { value: '2,500+', label: 'Students Trained' },
  { value: '150+', label: 'Industry Mentors' },
  { value: '95%', label: 'Placement Rate' },
]

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function Home() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: offeringsRef, isVisible: offeringsVisible } = useScrollAnimation()
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-grid"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="hero-content">
          <motion.p
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            Industry-Level AI + Full Stack Mentorship
          </motion.p>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <TextReveal text="Transform Your Career with" />
            <motion.span 
              className="gradient-text"
              data-text=" Real-World Expertise"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {" "}Real-World Expertise
            </motion.span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Learn from industry experts. Build production-grade projects. Get the mentorship
            that bridges the gap between learning and landing your dream role.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <MagneticButton>
              <Button to="/courses" variant="primary" size="lg">
                Explore Courses
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button to="/mentors" variant="outline" size="lg">
                Meet Our Mentors
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className={`section offerings scroll-animate ${offeringsVisible ? 'visible' : ''}`} ref={offeringsRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={offeringsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              <TextReveal text="What We Offer" />
            </h2>
            <p className="section-subtitle">
              Where curiosity meets capability – mentorship that actually sticks.
            </p>
          </motion.div>
          <motion.div 
            className="offerings-grid"
            variants={staggerContainer}
            initial="initial"
            animate={offeringsVisible ? "animate" : "initial"}
          >
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                className="offering-card"
                variants={{
                  initial: { opacity: 0, y: 40 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: i * 0.1, duration: 0.5 }
                  }
                }}
                whileHover={{ 
                  y: -12,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="offering-icon"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className={`section stats-section scroll-animate-left ${statsVisible ? 'visible' : ''}`} ref={statsRef}>
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={staggerContainer}
            initial="initial"
            animate={statsVisible ? "animate" : "initial"}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                variants={{
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: i * 0.1, duration: 0.5 }
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.span 
                  className="stat-value"
                  style={{ '--delay': `${i * 0.2}s` } as any}
                  whileHover={{ scale: 1.2 }}
                  initial={{ scale: 0 }}
                  animate={statsVisible ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section cta-section scroll-animate-scale ${ctaVisible ? 'visible' : ''}`} ref={ctaRef}>
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 40 }}
            animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h2
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <TextReveal text="Ready to Begin Your Journey?" />
            </motion.h2>
            <p>
              Join thousands of students who've transformed their careers with industry-level
              mentorship and real-world project experience.
            </p>
            <div className="cta-actions">
              <MagneticButton>
                <Button to="/courses" variant="primary" size="lg">
                  Enroll Now
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button to="/contact" variant="outline" size="lg">
                  Book a Call
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
