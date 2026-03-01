import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import MorphingBackground from './components/MorphingBackground'
import CursorTrail from './components/CursorTrail'
import Home from './pages/Home'
import About from './pages/About'
import Mentors from './pages/Mentors'
import Learners from './pages/Learners'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Contact from './pages/Contact'
import './App.css'
import './pages/pages.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ParticleBackground />
        <MorphingBackground />
        <CursorTrail />
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/learners" element={<Learners />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
