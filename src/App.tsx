import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-text-muted">Contact — próximo paso</p>
        </section>
      </main>
    </div>
  )
}
