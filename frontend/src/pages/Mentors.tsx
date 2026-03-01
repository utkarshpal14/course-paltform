import { motion } from 'framer-motion'
import Button from '../components/Button'

const mentors = [
  {
    name: 'Priya Sharma',
    role: 'Senior Full Stack Engineer',
    company: 'Microsoft',
    expertise: ['React', '.NET Core', 'Azure'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    bio: '10+ years building scalable web applications. Passionate about mentoring the next generation of developers.',
  },
  {
    name: 'Rahul Verma',
    role: 'AI/ML Lead',
    company: 'Google',
    expertise: ['Machine Learning', 'TensorFlow', 'Python'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
    bio: 'Former research scientist. Now helping students bridge the gap between AI theory and production systems.',
  },
  {
    name: 'Ananya Patel',
    role: 'Tech Architect',
    company: 'Amazon',
    expertise: ['System Design', 'AWS', 'Microservices'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya',
    bio: 'Architecting systems that serve millions. Believes in learning by building real-world solutions.',
  },
  {
    name: 'Vikram Singh',
    role: 'Staff Engineer',
    company: 'Meta',
    expertise: ['React', 'Node.js', 'GraphQL'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
    bio: 'Building products used by billions. Dedicated to making tech education accessible and practical.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Principal Engineer',
    company: 'Netflix',
    expertise: ['Distributed Systems', 'Kubernetes', 'Go'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
    bio: 'Scaling infrastructure for global streaming. Mentors with a focus on system thinking.',
  },
  {
    name: 'Arjun Mehta',
    role: 'VP Engineering',
    company: 'Flipkart',
    expertise: ['Leadership', 'Full Stack', 'E-commerce'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    bio: 'From startup to unicorn. Shares real-world lessons from building and scaling teams.',
  },
]

export default function Mentors() {
  return (
    <div className="page mentors-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Industry Expert <span className="gradient-text">Mentors</span>
          </motion.h1>
          <motion.p
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Learn from professionals at Microsoft, Google, Amazon, Meta, and more.
            Real industry experience. Real guidance.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mentors-grid">
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                className="mentor-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="mentor-image">
                  <img src={mentor.image} alt={mentor.name} />
                  <div className="mentor-company-badge">{mentor.company}</div>
                </div>
                <div className="mentor-info">
                  <h3>{mentor.name}</h3>
                  <p className="mentor-role">{mentor.role}</p>
                  <p className="mentor-bio">{mentor.bio}</p>
                  <div className="mentor-expertise">
                    {mentor.expertise.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
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
            <h2>Want to Learn from These Experts?</h2>
            <p>Enroll in our AI + Full Stack program and get 1-on-1 mentorship.</p>
            <Button to="/courses" variant="primary" size="lg">
              View Courses
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
