import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Process from "./components/Process"
import SelectedWork from "./components/SelectedWork"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <SelectedWork />
      <Process />
    </main>
  )
}

export default App