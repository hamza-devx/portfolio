import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

export default function App() {
  const [dark, setDark] = useState(true)
  const [open, setOpen] = useState(true)

  return (
    <div className={dark ? "dark" : ""}>
      <Sidebar
        dark={dark}
        setDark={setDark}
        open={open}
        setOpen={setOpen}
      />

      <Home dark={dark} open={open} />
      <About dark={dark} open={open} />
      <Skills dark={dark} open={open} />
      <Projects dark={dark} open={open} />
      <Contact dark={dark} open={open} />
      <Footer dark={dark} open={open} />
    </div>
  )
}