import HeroSection from "./components/HeroSection"
import MainSection from "./components/MainSection"
import MobileMenu from "./components/MobileMenu"

function App() {
  return (
    <main className="font-josefin relative w-screen z-0">
      <HeroSection/>
      <MainSection/>
      <MobileMenu />
    </main>
  )
}

export default App
