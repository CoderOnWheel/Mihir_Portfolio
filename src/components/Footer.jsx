import Container from "./ui/Container";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/40">
      
      {/* glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent blur-3xl" />

      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* 1. Brand / About */}
          <div>
            <h2 className="text-white text-lg font-semibold">
              Mihir Shirsath
            </h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Full-stack developer focused on building clean UI, scalable systems,
              and performance-driven web apps.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white text-sm font-medium mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>

                <li>
                  <a href="#projects" className="hover:text-white transition">
                    Projects
                  </a>
                </li>

                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

          {/* 3. CTA + Social */}
          <div>
            <h3 className="text-white text-sm font-medium mb-3">
              Let’s Connect
            </h3>

            <a
              href="mailto:mihirshirsath2308@gmail.com"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              mihirshirsath2308@gmail.com
            </a>

            <div className="flex gap-4 mt-5 text-gray-400">
              <a
                href="https://github.com/CoderOnWheel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="www.linkedin.com/in/mihir-shirsath"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 hover:scale-110 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://instagram.com/mihir__179"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 hover:scale-110 transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 Mihir Shirsath. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with React ⚡ Tailwind
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;