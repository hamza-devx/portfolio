import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"

export default function Contact({ dark, open }) {
  const contactItems = [
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/yourprofile",
      href: "#",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "#",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "your@email.com",
      href: "mailto:your@email.com",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+212 000000000",
      href: "#",
    },
  ]

  return (
    <section
      id="contact"
      className={`relative min-h-screen overflow-hidden transition-all duration-300 ${
        dark
          ? "bg-[#050816] text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-slate-900"
      } ${open ? "ml-[280px]" : "ml-[106px]"}`}
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[10%] top-[20%] h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-[8%] left-[40%] h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
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
              Contact • Let’s Connect • Collaboration
            </div>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Let’s{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Work Together
              </span>
            </h2>

            <p
              className={`mt-5 max-w-3xl text-lg leading-8 ${
                dark ? "text-white/65" : "text-slate-600"
              }`}
            >
              If you have a project idea, want a modern website, or just want to
              connect, feel free to send me a message.
            </p>
          </motion.div>

          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            {/* form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`rounded-[30px] border p-6 backdrop-blur-xl md:p-8 ${
                dark
                  ? "border-white/10 bg-white/5"
                  : "border-slate-200 bg-white/70"
              }`}
            >
              <h3 className="text-2xl font-black">Send a Message</h3>

              <form className="mt-8 space-y-5">
                <div>
                  <label
                    className={`mb-2 block text-sm font-medium ${
                      dark ? "text-white/70" : "text-slate-600"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className={`w-full rounded-2xl border px-4 py-4 outline-none transition ${
                      dark
                        ? "border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-cyan-400/30"
                        : "border-slate-200 bg-white/80 text-slate-900 placeholder:text-slate-400 focus:border-blue-300"
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`mb-2 block text-sm font-medium ${
                      dark ? "text-white/70" : "text-slate-600"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full rounded-2xl border px-4 py-4 outline-none transition ${
                      dark
                        ? "border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-cyan-400/30"
                        : "border-slate-200 bg-white/80 text-slate-900 placeholder:text-slate-400 focus:border-blue-300"
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`mb-2 block text-sm font-medium ${
                      dark ? "text-white/70" : "text-slate-600"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Write your message here..."
                    className={`w-full resize-none rounded-2xl border px-4 py-4 outline-none transition ${
                      dark
                        ? "border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-cyan-400/30"
                        : "border-slate-200 bg-white/80 text-slate-900 placeholder:text-slate-400 focus:border-blue-300"
                    }`}
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] transition hover:scale-[1.03]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* contact info */}
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`group block rounded-[28px] border p-6 backdrop-blur-xl transition-all duration-300 ${
                    dark
                      ? "border-white/10 bg-white/5 hover:border-cyan-400/25 hover:bg-white/[0.07]"
                      : "border-slate-200 bg-white/70 hover:border-blue-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-500/20 text-2xl text-cyan-300 transition duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p
                        className={`mt-1 text-sm ${
                          dark ? "text-white/60" : "text-slate-600"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className={`rounded-[28px] border p-6 backdrop-blur-xl ${
                  dark
                    ? "border-white/10 bg-white/5"
                    : "border-slate-200 bg-white/70"
                }`}
              >
                <h4 className="text-xl font-black">Available for Projects</h4>
                <p
                  className={`mt-3 leading-8 ${
                    dark ? "text-white/65" : "text-slate-600"
                  }`}
                >
                  I’m currently open to learning opportunities, collaborations,
                  and modern web development projects.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}