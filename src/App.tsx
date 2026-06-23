import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cream)', color: 'var(--dark)' }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Gallery />
        <Contact />
      </main>
    </div>
  )
}
