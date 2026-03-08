import { motion } from "framer-motion"
import {
  FaHtml5,
  FaBootstrap,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLaravel,
  FaReact,
  FaCloud,
} from "react-icons/fa"
import { SiTailwindcss, SiJavascript } from "react-icons/si"

export default function Skills({ dark, open }) {
  const skills = [
    {
      icon: <FaHtml5 />,
      title: "HTML",
      desc: "Building solid page structures with clean semantic markup.",
    },
    {
      icon: <SiJavascript />,
      title: "JavaScript",
      desc: "Creating dynamic and interactive web experiences.",
    },
    {
      icon: <FaBootstrap />,
      title: "Bootstrap",
      desc: "Designing fast and organized responsive layouts.",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
      desc: "Crafting modern interfaces with utility-first styling.",
    },
    {
      icon: <FaPhp />,
      title: "PHP",
      desc: "Building backend logic and dynamic web functionality.",
    },
    {
      icon: <FaPython />,
      title: "Python",
      desc: "Writing scripts and solving programming logic problems.",
    },
    {
      icon: (
        <div className="flex items-center gap-2">
          <FaGitAlt />
          <FaGithub />
        </div>
      ),
      title: "Git / GitHub",
      desc: "Managing versions, workflows, and project collaboration.",
    },
    {
      icon: <FaLaravel />,
      title: "Laravel",
      desc: "Developing structured applications and backend systems.",
    },
    {
      icon: <FaReact />,
      title: "React",
      desc: "Building reusable, modern, and scalable front-end apps.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Native",
      desc: "Exploring scalable deployment and modern app architecture.",
    },
  ]

  return (
    <section
      id="skills"
      className={`relative min-h-screen overflow-hidden transition-all duration-300 ${
        dark
          ? "bg-[#050816] text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-slate-900"
      } ${open ? "ml-[280px]" : "ml-[106px]"}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[12%] h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[8%] bottom-[10%] h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute left-[45%] top-[40%] h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
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
              Skills • Tools • Technologies
            </div>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <p
              className={`mt-5 max-w-3xl text-lg leading-8 ${
                dark ? "text-white/65" : "text-slate-600"
              }`}
            >
              A selection of the technologies and tools I use to create modern,
              responsive, and professional web applications.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-[28px] border p-6 backdrop-blur-xl transition-all duration-300 ${
                  dark
                    ? "border-white/10 bg-white/5 hover:border-cyan-400/30 hover:bg-white/[0.07]"
                    : "border-slate-200 bg-white/70 hover:border-blue-300 hover:bg-white"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-blue-500/0 to-indigo-500/0 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:from-cyan-400/5 group-hover:via-blue-500/5 group-hover:to-indigo-500/5" />

                <div className="relative">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-500/20 text-3xl text-cyan-300 transition duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>

                    <h3 className="text-xl font-bold">{skill.title}</h3>
                  </div>

                  <p
                    className={`leading-7 ${
                      dark ? "text-white/65" : "text-slate-600"
                    }`}
                  >
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}