import { Link } from 'react-router-dom'

const footerLinks = {
  courses: [
    { path: '/courses', label: 'AI + Full Stack' },
    { path: '/courses', label: 'Industry Projects' },
    { path: '/courses', label: 'Mentorship Program' },
  ],
  company: [
    { path: '/about', label: 'About Us' },
    { path: '/mentors', label: 'Our Mentors' },
    { path: '/learners', label: 'Success Stories' },
  ],
  support: [
    { path: '/contact', label: 'Contact' },
    { path: '/contact', label: 'FAQ' },
    { path: '/contact', label: 'Careers' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">C</span>
              CodeCraft Academy
            </Link>
            <p className="footer-tagline">
              Industry-level mentorship for AI + Full Stack. Real projects. Real growth.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="GitHub">GitHub</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Courses</h4>
              <ul>
                {footerLinks.courses.map((link, i) => (
                  <li key={i}><Link to={link.path}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, i) => (
                  <li key={i}><Link to={link.path}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, i) => (
                  <li key={i}><Link to={link.path}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 CodeCraft Academy. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/contact">Privacy</Link>
            <Link to="/contact">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
