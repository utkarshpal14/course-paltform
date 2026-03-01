import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const courses = [
  {
    id: 'ai-fullstack',
    title: 'AI + Full Stack Mastery',
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    description: 'Comprehensive program covering React, .NET Core, SQL, and AI integration. Build production-grade applications with industry mentorship.',
    features: ['1-on-1 Mentorship', 'Real-World Projects', 'Placement Support', 'Lifetime Access'],
    price: '₹49,999',
    badge: 'Most Popular',
  },
  {
    id: 'industry-projects',
    title: 'Industry Project Bootcamp',
    duration: '8 weeks',
    level: 'Intermediate',
    description: 'Work on live projects that mirror real company workflows. Deploy to cloud, contribute to codebases, and build your portfolio.',
    features: ['Live Codebases', 'Cloud Deployment', 'Code Reviews', 'Team Collaboration'],
    price: '₹34,999',
    badge: 'Hands-On',
  },
  {
    id: 'mentorship-intensive',
    title: 'Mentorship Intensive',
    duration: '6 weeks',
    level: 'All Levels',
    description: 'Focused 1-on-1 mentorship for career growth. System design, interview prep, and personalized learning path.',
    features: ['Weekly 1:1 Sessions', 'Interview Prep', 'Resume Review', 'Career Guidance'],
    price: '₹24,999',
    badge: 'Flexible',
  },
]

export default function Courses() {
  return (
    <div className="page courses-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="gradient-text">Courses</span>
          </motion.h1>
          <motion.p
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Industry-designed programs with real mentorship. Choose the path that fits your goals.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="courses-grid">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                className={`course-card ${course.badge === 'Most Popular' ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                {course.badge && (
                  <span className="course-badge">{course.badge}</span>
                )}
                <h3>{course.title}</h3>
                <div className="course-meta">
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span>{course.level}</span>
                </div>
                <p className="course-desc">{course.description}</p>
                <ul className="course-features">
                  {course.features.map((f) => (
                    <li key={f}>✓ {f}</li>
                  ))}
                </ul>
                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                  <Link to={`/courses/${course.id}`} className="btn btn-primary">
                    Learn More
                  </Link>
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
            <h2>Not Sure Which Course to Choose?</h2>
            <p>Book a free consultation call with our team.</p>
            <Button to="/contact" variant="primary" size="lg">
              Book a Call
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
