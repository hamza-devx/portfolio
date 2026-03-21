import { motion } from "framer-motion"
import myImage from "../assets/me.png"

export default function Home({ dark, open }) {
  return (
    <main
      id="home"
      className={`relative min-h-screen overflow-hidden transition-all duration-300 ${
        dark
          ? "bg-[#050816] text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900"
      } ${open ? "ml-0 lg:ml-[292px]" : "ml-0 lg:ml-[118px]"}`}
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[18%] top-[10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute left-[45%] top-[35%] h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* subtle grid */}
      <div
        className={`absolute inset-0 opacity-[0.08] ${
          dark
            ? "bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)]"
        } bg-[size:40px_40px]`}
      />

      <section className="relative flex min-h-screen items-center px-4 pt-24 pb-10 sm:px-6 lg:px-6">
        <div className="grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm ${
                dark
                  ? "border-cyan-400/20 bg-white/5 text-cyan-300"
                  : "border-blue-200 bg-white/70 text-blue-700"
              }`}
            >
              Full Stack Developer • React • Laravel • Node.js
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl text-[38px] font-black leading-tight sm:text-5xl md:text-6xl xl:text-7xl"
            >
              I build{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                modern websites
              </span>{" "}
              that look premium and feel fast.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className={`mt-6 max-w-2xl text-lg leading-8 ${
                dark ? "text-white/70" : "text-slate-600"
              }`}
            >
              I design and develop modern web experiences with smooth
              animations, clean interfaces, responsive layouts, and a
              professional feel that makes clients trust the product from the
              first second.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-7 py-4 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] transition hover:scale-[1.03]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className={`rounded-2xl border px-7 py-4 font-semibold transition hover:scale-[1.03] ${
                  dark
                    ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                    : "border-slate-200 bg-white/70 text-slate-900 hover:bg-slate-100"
                }`}
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.55 }}
              className="mt-12 grid max-w-xl grid-cols-2 gap-4 md:grid-cols-3"
            >
              {[
                ["10+", "Projects Built"],
                ["Fast", "Modern UI"],
                ["100%", "Responsive"],
              ].map(([num, txt]) => (
                <motion.div
                  key={txt}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  className={`rounded-2xl border p-4 backdrop-blur-xl ${
                    dark
                      ? "border-white/10 bg-white/5"
                      : "border-slate-200 bg-white/70"
                  }`}
                >
                  <h3 className="text-2xl font-extrabold">{num}</h3>
                  <p
                    className={`mt-1 text-sm ${
                      dark ? "text-white/60" : "text-slate-500"
                    }`}
                  >
                    {txt}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* right image area */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[560px] w-full max-w-[430px]">
              {/* glow under image */}
              <div className="absolute bottom-2 left-1/2 h-20 w-56 -translate-x-1/2 rounded-full bg-cyan-400/25 blur-3xl" />

              {/* decorative card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 rounded-[36px] border backdrop-blur-xl ${
                  dark
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-slate-200 bg-white/60"
                }`}
              />

              {/* image reveal */}
              <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ amount: 0.2 }}
  transition={{ duration: 0.8 }}
  className="absolute inset-0 overflow-hidden rounded-[36px]"
>
                <motion.img
                  src={myImage}
                  alt="Hamza"
                  initial={{ y: 120, opacity: 0, scale: 0.96 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  className="absolute bottom-0 left-1/2 h-[94%] w-auto -translate-x-1/2 object-contain"
                />
              </motion.div>

              {/* extra glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-1/2 h-20 w-40 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-3xl"
              />

              {/* floating mini cards */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 25 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className={`absolute left-[-20px] top-[70px] hidden rounded-2xl border px-4 py-3 backdrop-blur-xl lg:block ${
                  dark
                    ? "border-white/10 bg-white/10 text-white"
                    : "border-slate-200 bg-white/80 text-slate-900"
                }`}
              >
                <p className="text-sm font-semibold">UI / UX Focus</p>
                <p
                  className={`text-xs ${
                    dark ? "text-white/60" : "text-slate-500"
                  }`}
                >
                  Clean and modern interfaces
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, y: 25 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ delay: 1.05, duration: 0.6 }}
                className={`absolute bottom-[95px] right-[-15px] hidden rounded-2xl border px-4 py-3 backdrop-blur-xl lg:block ${
                  dark
                    ? "border-white/10 bg-white/10 text-white"
                    : "border-slate-200 bg-white/80 text-slate-900"
                }`}
              >
                <p className="text-sm font-semibold">Smooth Animation</p>
                <p
                  className={`text-xs ${
                    dark ? "text-white/60" : "text-slate-500"
                  }`}
                >
                  Premium motion experience
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}