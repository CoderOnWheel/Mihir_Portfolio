import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">

      {/* grid background */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[linear-gradient(to_right,#00ffcc10_1px,transparent_1px),linear-gradient(to_bottom,#00ffcc10_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl" />

      <Container>

        <SectionTitle
          title="ENTERPRISE DATA SYSTEMS"
          subtitle="Backend • Data Engineering • Analytics • BI"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {projects.map((p, i) => (
            <div key={i} className="relative group h-full">

              {/* glow */}
              <div className="absolute inset-0 bg-cyan-500/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition" />

              {/* card */}
              <div className="relative h-full flex flex-col bg-black/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md overflow-hidden hover:border-cyan-400/30 transition">

                {/* grid overlay */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffcc10_1px,transparent_1px),linear-gradient(to_bottom,#00ffcc10_1px,transparent_1px)] bg-[size:25px_25px]" />

                {/* content */}
                <div className="relative z-10 flex flex-col h-full">

                  {/* HEADER */}
                  <div className="flex justify-between items-center mb-3 text-xs font-mono">
                    <span className="text-green-400">
                      ● {p.type.toUpperCase()}
                    </span>
                    <span className="text-gray-500">
                      SYS_{i + 1}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {p.title}
                  </h3>

                  {/* STACK */}
                  <p className="text-cyan-300 text-xs font-mono mb-3">
                    {p.stack}
                  </p>

                  {/* DESCRIPTION (flex grows to balance height) */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {p.desc}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 border border-white/10 rounded-full text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GITHUB (always bottom aligned) */}
                  <div className="mt-auto">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-white transition text-sm"
                      >
                        <FaGithub />
                        Source Code
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Projects;