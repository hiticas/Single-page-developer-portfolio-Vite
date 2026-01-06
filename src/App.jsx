import './App.scss'
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
    </div>
  )
}

export default App