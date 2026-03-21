import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer({ dark, open }) {
  return (
    <footer
      className={`relative border-t transition-all duration-300 ${
        dark
          ? "bg-[#050816] border-white/10 text-white"
          : "bg-white border-slate-200 text-slate-900"
      } ${open ? "ml-0 lg:ml-[292px]" : "ml-0 lg:ml-[118px]"}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* top */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* brand */}
          <div>
            <h3 className="text-xl font-bold">Hamza.dev</h3>
            <p className={`mt-3 text-sm leading-7 ${
              dark ? "text-white/60" : "text-slate-600"
            }`}>
              Full Stack Developer building modern, responsive,
              and high-performance web applications.
            </p>
          </div>

          {/* navigation */}
          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>

            <div className="flex flex-col gap-2 text-sm">
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </div>
          </div>

          {/* socials */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>

            <div className="flex gap-4 text-xl">

              <a
                href="https://github.com/hamza-devx"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:you@email.com"
                className="hover:text-cyan-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* bottom */}
        <div className={`mt-10 border-t pt-6 text-center text-sm ${
          dark ? "border-white/10 text-white/60" : "border-slate-200 text-slate-600"
        }`}>
          © {new Date().getFullYear()} Hamza.dev — All rights reserved.
        </div>

      </div>
    </footer>
  )
}