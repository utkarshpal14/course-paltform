import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const courseData: Record<string, {
  title: string
  description: string
  duration: string
  level: string
  price: string
  modules: { week: number; title: string; topics: string[] }[]
  outcomes: string[]
  techStack: string[]
}> = {
  'ai-fullstack': {
    title: 'AI + Full Stack Mastery',
    description: 'A comprehensive 12-week program that takes you from fundamentals to building production-grade AI-powered full stack applications. Learn React, .NET Core, SQL, and AI integration with industry mentors.',
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    price: '₹49,999',
    modules: [
      { week: 1, title: 'Foundations', topics: ['HTML/CSS/JS', 'React Basics', 'TypeScript'] },
      { week: 2, title: 'Frontend Deep Dive', topics: ['React Hooks', 'State Management', 'API Integration'] },
      { week: 3, title: 'Backend with .NET', topics: ['C# Basics', 'ASP.NET Core', 'REST APIs'] },
      { week: 4, title: 'Database & ORM', topics: ['SQL Fundamentals', 'Entity Framework', 'Migrations'] },
      { week: 5, title: 'Full Stack Integration', topics: ['Auth & Security', 'Deployment', 'CI/CD'] },
      { week: 6, title: 'AI Integration', topics: ['LLM APIs', 'Prompt Engineering', 'AI-Powered Features'] },
    ],
    outcomes: [
      'Build and deploy full stack applications',
      'Integrate AI capabilities into your apps',
      'Work with industry-standard tech stack',
      'Get 1-on-1 mentorship from experts',
    ],
    techStack: ['React', 'TypeScript', '.NET Core', 'SQL Server', 'OpenAI API', 'Azure'],
  },
  'industry-projects': {
    title: 'Industry Project Bootcamp',
    description: '8 weeks of hands-on experience with real-world projects. Work on live codebases, deploy to cloud, and build a portfolio that impresses recruiters.',
    duration: '8 weeks',
    level: 'Intermediate',
    price: '₹34,999',
    modules: [
      { week: 1, title: 'Project Setup', topics: ['Git Workflow', 'Codebase Navigation', 'Agile Practices'] },
      { week: 2, title: 'Feature Development', topics: ['Sprint Planning', 'Code Reviews', 'Testing'] },
      { week: 3, title: 'Cloud & DevOps', topics: ['AWS/Azure', 'Docker', 'Kubernetes Basics'] },
      { week: 4, title: 'Capstone Project', topics: ['End-to-End Build', 'Deployment', 'Documentation'] },
    ],
    outcomes: [
      'Portfolio of production-grade projects',
      'Experience with team collaboration',
      'Cloud deployment skills',
      'Code review and best practices',
    ],
    techStack: ['React', '.NET Core', 'SQL', 'Docker', 'Azure/AWS'],
  },
  'mentorship-intensive': {
    title: 'Mentorship Intensive',
    description: '6 weeks of focused 1-on-1 mentorship. Perfect for career switchers or professionals looking to level up. Personalized learning path and interview preparation.',
    duration: '6 weeks',
    level: 'All Levels',
    price: '₹24,999',
    modules: [
      { week: 1, title: 'Assessment & Planning', topics: ['Skill Audit', 'Goal Setting', 'Learning Path'] },
      { week: 2, title: 'Technical Deep Dives', topics: ['System Design', 'Algorithms', 'Architecture'] },
      { week: 3, title: 'Interview Prep', topics: ['Mock Interviews', 'Resume Review', 'Behavioral'] },
      { week: 4, title: 'Ongoing Support', topics: ['Weekly 1:1s', 'Q&A', 'Career Guidance'] },
    ],
    outcomes: [
      'Personalized learning roadmap',
      'Interview-ready preparation',
      'Resume and portfolio polish',
      'Ongoing career support',
    ],
    techStack: ['Customized to your goals'],
  },
}

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>()
  const course = id ? courseData[id] : null

  if (!course) {
    return (
      <div className="page">
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h1>Course Not Found</h1>
          <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page course-details-page">
      <section className="course-details-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/courses" className="back-link">← Back to Courses</Link>
            <h1>{course.title}</h1>
            <div className="course-details-meta">
              <span>{course.duration}</span>
              <span>•</span>
              <span>{course.level}</span>
            </div>
            <p className="course-details-desc">{course.description}</p>
            <div className="course-details-actions">
              <Button to="/contact" variant="primary" size="lg">
                Enroll Now — {course.price}
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Book a Free Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="course-details-grid">
            <motion.div
              className="course-modules"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Curriculum</h2>
              {course.modules.map((mod, i) => (
                <div key={mod.week} className="module-card">
                  <div className="module-week">Week {mod.week}</div>
                  <h3>{mod.title}</h3>
                  <ul>
                    {mod.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="course-sidebar"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="sidebar-card">
                <h3>What You'll Achieve</h3>
                <ul>
                  {course.outcomes.map((o) => (
                    <li key={o}>✓ {o}</li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-card">
                <h3>Tech Stack</h3>
                <div className="tech-tags">
                  {course.techStack.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="sidebar-card price-card">
                <span className="price">{course.price}</span>
                <Button to="/contact" variant="primary" size="lg">
                  Enroll Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
