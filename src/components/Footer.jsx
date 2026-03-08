import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer({ dark, open }) {
  return (
    <footer
      className={`relative overflow-hidden transition-all duration-300 ${
        dark
          ? "bg-[#050816] text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-slate-900"
      } ${open ? "ml-[280px]" : "ml-[106px]"}`}
    >
      {/* glow background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[15%] top-[20%] h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[20%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          
          {/* brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-black">
              Hamza<span className="text-cyan-400">.dev</span>
            </h3>

            <p
              className={`mt-4 leading-7 ${
                dark ? "text-white/60" : "text-slate-600"
              }`}
            >
              Full Stack Developer passionate about building modern, fast,
              and visually strong web experiences.
            </p>
          </motion.div>

          {/* navigation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold">Navigation</h4>

            <ul
              className={`mt-4 space-y-2 ${
                dark ? "text-white/60" : "text-slate-600"
              }`}
            >
              <li>
                <a href="#home" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* social */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold">Connect</h4>

            <div className="mt-4 flex gap-4 text-xl">
              <a
                href="#"
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition hover:scale-110 ${
                  dark
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-slate-200 bg-white hover:bg-slate-100"
                }`}
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition hover:scale-110 ${
                  dark
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-slate-200 bg-white hover:bg-slate-100"
                }`}
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:your@email.com"
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition hover:scale-110 ${
                  dark
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-slate-200 bg-white hover:bg-slate-100"
                }`}
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>

        {/* bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className={`mt-12 border-t pt-6 text-center text-sm ${
            dark
              ? "border-white/10 text-white/50"
              : "border-slate-200 text-slate-500"
          }`}
        >
          © {new Date().getFullYear()} Hamza.dev — All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}