import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function Projects({ dark, open }) {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern online store with product listing, shopping cart, category filters, and a smooth checkout experience.",
      tech: ["React", "Tailwind", "Laravel", "MySQL"],
      demo: "#",
      github: "#",
      accent: "from-cyan-400/30 via-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Admin Dashboard",
      description:
        "Responsive admin dashboard for managing users, analytics, and application data with a clean modern interface.",
      tech: ["React", "Tailwind", "Charts", "Laravel API"],
      demo: "#",
      github: "#",
      accent: "from-blue-400/30 via-indigo-500/20 to-cyan-500/20",
    },
    {
      title: "Business Landing Page",
      description:
        "High-converting landing page for a modern business with smooth animations, premium sections, and strong visual hierarchy.",
      tech: ["React", "Tailwind", "Framer Motion"],
      demo: "#",
      github: "#",
      accent: "from-cyan-400/30 via-sky-500/20 to-blue-500/20",
    },
    {
      title: "Blog Platform",
      description:
        "Clean content platform with articles, categories, and a modern reading experience built with structured backend logic.",
      tech: ["Laravel", "MySQL", "Blade / React"],
      demo: "#",
      github: "#",
      accent: "from-indigo-400/30 via-blue-500/20 to-cyan-500/20",
    },
  ]

  return (
    <section
      id="projects"
      className={`relative min-h-screen overflow-hidden transition-all duration-300 ${
        dark
          ? "bg-[#060b1a] text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900"
      } ${open ? "ml-0 lg:ml-[280px]" : "ml-0 lg:ml-[106px]"}`}
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[12%] h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[8%] top-[18%] h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-[8%] left-[38%] h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* grid bg */}
      <div
        className={`absolute inset-0 opacity-[0.06] ${
          dark
            ? "bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)]"
        } bg-[size:40px_40px]`}
      />

      <div className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div
              className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm ${
                dark
                  ? "border-cyan-400/20 bg-white/5 text-cyan-300"
                  : "border-blue-200 bg-white/70 text-blue-700"
              }`}
            >
              Portfolio • Selected Work • Case Studies
            </div>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p
              className={`mt-5 max-w-3xl text-lg leading-8 ${
                dark ? "text-white/65" : "text-slate-600"
              }`}
            >
              A curated selection of projects that reflect the type of modern,
              responsive, and professional web experiences I aim to build.
            </p>
          </motion.div>

          {/* cards */}
          <div className="grid gap-8 xl:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className={`group overflow-hidden rounded-[30px] border backdrop-blur-xl transition-all duration-300 ${
                  dark
                    ? "border-white/10 bg-white/5 hover:border-cyan-400/25 hover:bg-white/[0.07]"
                    : "border-slate-200 bg-white/70 hover:border-blue-300 hover:bg-white"
                }`}
              >
                {/* top visual */}
                <div className="relative p-5">
                  <div
                    className={`relative h-[250px] overflow-hidden rounded-[24px] border ${
                      dark
                        ? "border-white/10 bg-[#0b1225]"
                        : "border-slate-200 bg-slate-100"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
                    />

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 p-6"
                    >
                      <div
                        className={`flex h-full w-full flex-col rounded-[20px] border p-5 ${
                          dark
                            ? "border-white/10 bg-white/[0.05]"
                            : "border-slate-200 bg-white/70"
                        }`}
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex gap-2">
                            <span className="h-3 w-3 rounded-full bg-cyan-400" />
                            <span className="h-3 w-3 rounded-full bg-blue-500" />
                            <span className="h-3 w-3 rounded-full bg-indigo-500" />
                          </div>

                          <span
                            className={`rounded-full px-3 py-1 text-xs ${
                              dark
                                ? "bg-white/10 text-white/70"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            Project Preview
                          </span>
                        </div>

                        <div className="grid flex-1 grid-cols-12 gap-4">
                          <div
                            className={`col-span-4 rounded-2xl border ${
                              dark
                                ? "border-white/10 bg-white/[0.04]"
                                : "border-slate-200 bg-white/80"
                            }`}
                          />
                          <div className="col-span-8 flex flex-col gap-4">
                            <div
                              className={`h-16 rounded-2xl border ${
                                dark
                                  ? "border-white/10 bg-white/[0.04]"
                                  : "border-slate-200 bg-white/80"
                              }`}
                            />
                            <div className="grid flex-1 grid-cols-2 gap-4">
                              <div
                                className={`rounded-2xl border ${
                                  dark
                                    ? "border-white/10 bg-white/[0.04]"
                                    : "border-slate-200 bg-white/80"
                                }`}
                              />
                              <div
                                className={`rounded-2xl border ${
                                  dark
                                    ? "border-white/10 bg-white/[0.04]"
                                    : "border-slate-200 bg-white/80"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* content */}
                <div className="px-6 pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black">{project.title}</h3>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                        dark
                          ? "bg-cyan-400/10 text-cyan-300"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      Placeholder
                    </span>
                  </div>

                  <p
                    className={`mt-4 leading-8 ${
                      dark ? "text-white/65" : "text-slate-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* tech badges */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full border px-3 py-1.5 text-sm ${
                          dark
                            ? "border-white/10 bg-white/5 text-white/75"
                            : "border-slate-200 bg-white/80 text-slate-700"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* buttons */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-5 py-3 font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.25)] transition hover:scale-[1.03]"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3 font-semibold transition hover:scale-[1.03] ${
                        dark
                          ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                          : "border-slate-200 bg-white/80 text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}