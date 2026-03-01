import { motion } from 'framer-motion'
import Button from '../components/Button'

const values = [
  {
    title: 'Industry-First',
    desc: 'Every curriculum is designed with input from hiring managers and tech leads at top companies.',
  },
  {
    title: 'Mentorship Over Lectures',
    desc: 'We believe in personalized guidance. Small cohorts ensure every student gets the attention they deserve.',
  },
  {
    title: 'Real Projects, Real Impact',
    desc: 'Build production-grade applications. Deploy to cloud. Contribute to open source. Your portfolio speaks.',
  },
]

const milestones = [
  { year: '2022', event: 'Founded with a vision to bridge the industry-academia gap' },
  { year: '2023', event: 'Launched AI + Full Stack program with 50 industry mentors' },
  { year: '2024', event: '2,500+ students trained, 95% placement rate achieved' },
  { year: '2025', event: 'Expanding to corporate training and bootcamp partnerships' },
]

export default function About() {
  return (
    <div className="page about-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="gradient-text">CodeCraft Academy</span>
          </motion.h1>
          <motion.p
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We're on a mission to democratize industry-level tech education through
            mentorship, real projects, and unwavering support.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                CodeCraft Academy was born from a simple observation: students were
                graduating with theoretical knowledge but struggling to land roles
                because they lacked real-world experience and industry connections.
              </p>
              <p>
                We built a platform where industry experts mentor aspiring developers
                through hands-on projects. Our AI + Full Stack program combines
                cutting-edge technology with the human touch of 1-on-1 guidance.
              </p>
              <Button to="/courses" variant="primary">
                Explore Our Courses
              </Button>
            </motion.div>
            <motion.div
              className="about-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="about-card-stack">
                <div className="stack-card card-1">React</div>
                <div className="stack-card card-2">.NET Core</div>
                <div className="stack-card card-3">SQL</div>
                <div className="stack-card card-4">AI</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <div className="timeline">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="timeline-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-content">
                  <p>{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Community</h2>
            <p>Be part of a network of learners and industry professionals.</p>
            <Button to="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
