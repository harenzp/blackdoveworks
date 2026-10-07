import About from "./components/About"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Process from "./components/Process"
import SelectedWork from "./components/SelectedWork"
import SmoothScroll from "./components/SmoothScroll"

const App = () => {
  return (
    <main>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <About />
      <SelectedWork />
      <Process />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App