import { motion } from "framer-motion"
import faceImage from "../assets/me-face.png"

export default function About({ dark, open }) {
  const timeline = [
    "2024 — Started my development journey",
    "2024 — Built simple projects with HTML and CSS",
    "2025 — Built a project using HTML, CSS, JavaScript, and PHP",
    "2025 — Built React applications",
    "2025 — Built Laravel applications",
    "2026 — Building my professional portfolio",
  ]

  return (
    <section
      id="about"
      className={`relative min-h-screen overflow-hidden transition-all duration-300 ${
        dark
          ? "bg-[#060b1a] text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900"
      } ${open ? "ml-[280px]" : "ml-[106px]"}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[10%] top-[25%] h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-[8%] left-[35%] h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div
        className={`absolute inset-0 opacity-[0.06] ${
          dark
            ? "bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)]"
        } bg-[size:40px_40px]`}
      />

      <div className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[360px_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -40, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-[340px]"
            >
              <div className="absolute inset-0 rounded-[32px] bg-cyan-400/10 blur-3xl" />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`relative overflow-hidden rounded-[30px] border p-4 backdrop-blur-xl ${
                  dark
                    ? "border-white/10 bg-white/5"
                    : "border-slate-200 bg-white/70"
                }`}
              >
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={faceImage}
                    alt="Hamza"
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-4 left-1/2 h-16 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
              </motion.div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm ${
                  dark
                    ? "border-cyan-400/20 bg-white/5 text-cyan-300"
                    : "border-blue-200 bg-white/70 text-blue-700"
                }`}
              >
                Passionate • Consistent • Growth Mindset
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.05 }}
                className="text-4xl font-black leading-tight md:text-5xl"
              >
                About{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.15 }}
                className={`mt-6 max-w-3xl text-lg leading-8 ${
                  dark ? "text-white/70" : "text-slate-600"
                }`}
              >
                I’m a Full Stack Development student who enjoys building clean,
                modern, and responsive web applications. I started with the
                fundamentals of web development, then gradually moved into
                advanced technologies like React and Laravel.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.25 }}
                className={`mt-4 max-w-3xl text-lg leading-8 ${
                  dark ? "text-white/70" : "text-slate-600"
                }`}
              >
                My goal is to create digital experiences that are not only
                functional, but also visually strong, smooth, and professional.
                I’m constantly learning, building projects, and improving the
                way I turn ideas into real applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10"
              >
                <h3 className="mb-6 text-2xl font-bold">My Journey</h3>

                <div className="relative space-y-5 border-l border-cyan-400/20 pl-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="relative"
                    >
                      <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                      <div
                        className={`rounded-2xl border p-4 backdrop-blur-xl ${
                          dark
                            ? "border-white/10 bg-white/5"
                            : "border-slate-200 bg-white/70"
                        }`}
                      >
                        <p className={dark ? "text-white/80" : "text-slate-700"}>
                          {item}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >
            <div
              className={`relative overflow-hidden rounded-[32px] border p-8 text-center backdrop-blur-xl md:p-12 ${
                dark
                  ? "border-white/10 bg-white/5"
                  : "border-slate-200 bg-white/70"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-indigo-500/5" />

              <div className="relative">
                <h3 className="text-3xl font-black md:text-4xl">
                  Let’s build something amazing together
                </h3>

                <p
                  className={`mx-auto mt-4 max-w-2xl text-lg ${
                    dark ? "text-white/65" : "text-slate-600"
                  }`}
                >
                  I’m always ready to learn, improve, and work on projects that
                  turn ideas into professional digital experiences.
                </p>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] transition hover:scale-[1.03]"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}