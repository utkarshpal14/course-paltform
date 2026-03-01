import { motion } from 'framer-motion'
import Button from '../components/Button'

const testimonials = [
  {
    name: 'Kavya Nair',
    role: 'Software Engineer',
    company: 'Microsoft',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya',
    quote: 'The mentorship program changed my career trajectory. I went from struggling with interviews to landing my dream role at Microsoft. The real-world projects gave me confidence I never had.',
    rating: 5,
  },
  {
    name: 'Aditya Joshi',
    role: 'Full Stack Developer',
    company: 'Google',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya',
    quote: 'As a career switcher, I was skeptical. But the industry mentors understood exactly what I needed. The AI + Full Stack curriculum is perfectly aligned with what companies actually want.',
    rating: 5,
  },
  {
    name: 'Meera Krishnan',
    role: 'Frontend Engineer',
    company: 'Amazon',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
    quote: 'The 1-on-1 sessions were gold. My mentor helped me debug production issues and taught me system design from scratch. Now I\'m building features used by millions.',
    rating: 5,
  },
  {
    name: 'Rohan Gupta',
    role: 'Backend Developer',
    company: 'Flipkart',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
    quote: 'I had the knowledge but not the confidence. CodeCraft\'s mentorship gave me both. The portfolio projects I built here got me multiple offers.',
    rating: 5,
  },
  {
    name: 'Divya Menon',
    role: 'AI Engineer',
    company: 'Adobe',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Divya',
    quote: 'The AI integration module was ahead of its time. My mentor from Google helped me understand LLMs and build my first production AI feature. Incredible experience.',
    rating: 5,
  },
  {
    name: 'Siddharth Rao',
    role: 'Tech Lead',
    company: 'Zomato',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth',
    quote: 'From junior dev to tech lead in 2 years. The mentorship didn\'t just teach me code—it taught me how to think like an engineer and lead teams.',
    rating: 5,
  },
]

export default function Learners() {
  return (
    <div className="page learners-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hear from Our <span className="gradient-text">Learners</span>
          </motion.h1>
          <motion.p
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Real stories from students who transformed their careers with industry-level
            mentorship and hands-on project experience.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="star">★</span>
                  ))}
                </div>
                <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
                <div className="testimonial-author">
                  <img src={t.image} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role} @ {t.company}</span>
                  </div>
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
            <h2>Ready to Write Your Success Story?</h2>
            <p>Join 2,500+ students who've transformed their careers.</p>
            <Button to="/courses" variant="primary" size="lg">
              Enroll Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
