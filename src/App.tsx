import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <p className="text-text-muted">Projects — próximo paso</p>
        </section>
        <section id="education" className="min-h-screen flex items-center justify-center">
          <p className="text-text-muted">Education — próximo paso</p>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-text-muted">Contact — próximo paso</p>
        </section>
      </main>
    </div>
  )
}
