import './App.scss'
import Contact from './sections/Contact/Contact'
import Header from './sections/Header/Header'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App