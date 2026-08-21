import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SelectedWork from "./components/SelectedWork"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <SelectedWork />
    </main>
  )
}

export default App