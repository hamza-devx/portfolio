import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/logo.png"
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
} from "react-icons/fa"

export default function Sidebar({ dark, setDark, open, setOpen }) {
  const [active, setActive] = useState("Home")

  const items = [
    { icon: <FaHome />, label: "Home", href: "#home" },
    { icon: <FaUser />, label: "About", href: "#about" },
    { icon: <FaCode />, label: "Skills", href: "#skills" },
    { icon: <FaProjectDiagram />, label: "Projects", href: "#projects" },
    { icon: <FaEnvelope />, label: "Contact", href: "#contact" },
  ]

  const handleTheme = () => {
    setDark(!dark)
  }

  const sidebarClasses = dark
    ? "bg-white/10 border-white/10 text-white shadow-[0_0_40px_rgba(59,130,246,0.15)]"
    : "bg-white/70 border-slate-200 text-slate-900 shadow-[0_0_40px_rgba(15,23,42,0.08)]"

  const itemHover = dark
    ? "hover:bg-white/10 hover:text-cyan-300"
    : "hover:bg-slate-100 hover:text-blue-600"

  const activeItem = dark
    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300"
    : "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700"

  return (
    <motion.aside
      animate={{ width: open ? 260 : 86 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed left-4 top-4 bottom-4 z-50 flex flex-col justify-between overflow-hidden rounded-3xl border backdrop-blur-xl ${sidebarClasses}`}
    >
      <div>
        <div className="px-3 pt-4">
          <div className={`flex items-center ${open ? "gap-3 px-1" : "justify-center"}`}>
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl">
                <img src={logo} alt="Hamza Logo" className="h-full w-full object-cover" />
            </div>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="min-w-0"
                >
                  <h2 className="text-lg font-bold leading-none">Hamza.dev</h2>
                  <p className={`mt-1 text-xs ${dark ? "text-white/60" : "text-slate-500"}`}>
                    Full Stack Developer
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="px-3 pt-5">
          <button
            onClick={() => setOpen(!open)}
            className={`mb-4 flex h-12 w-full items-center rounded-2xl border px-4 transition ${
              dark
                ? "border-white/10 bg-white/5 hover:bg-white/10"
                : "border-slate-200 bg-white/60 hover:bg-slate-100"
            } ${open ? "justify-start gap-3" : "justify-center"}`}
          >
            <FaBars />
            <AnimatePresence>
              {open && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-medium"
                >
                  Menu
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <nav className="px-3">
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  title={!open ? item.label : ""}
                  className={`group relative flex items-center rounded-2xl px-4 py-3 transition-all duration-300 ${itemHover} ${
                    active === item.label ? activeItem : ""
                  } ${open ? "gap-3" : "justify-center"}`}
                >
                  {active === item.label && (
                    <motion.span
                      layoutId="active-pill"
                      className={`absolute left-1 top-1 bottom-1 w-1 rounded-full ${
                        dark ? "bg-cyan-400" : "bg-blue-600"
                      }`}
                    />
                  )}

                  <span className="relative z-10 text-lg">{item.icon}</span>

                  <AnimatePresence>
                    {open && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.25, delay: i * 0.06 }}
                        className="relative z-10 whitespace-nowrap text-sm font-medium"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {!open && (
                    <span
                      className={`pointer-events-none absolute left-[78px] rounded-xl px-3 py-2 text-xs opacity-0 shadow-lg transition group-hover:opacity-100 ${
                        dark
                          ? "bg-slate-900 text-white"
                          : "border border-slate-200 bg-white text-slate-900"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="px-3 pb-4">
        <button
          onClick={handleTheme}
          className={`flex h-12 w-full items-center rounded-2xl border px-4 transition ${
            dark
              ? "border-white/10 bg-white/5 hover:bg-white/10"
              : "border-slate-200 bg-white/60 hover:bg-slate-100"
          } ${open ? "justify-start gap-3" : "justify-center"}`}
        >
          <span className="text-lg">{dark ? <FaSun /> : <FaMoon />}</span>

          <AnimatePresence>
            {open && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-medium"
              >
                {dark ? "Light Mode" : "Dark Mode"}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  )
}