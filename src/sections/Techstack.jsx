import Container from "../components/ui/Container";
import { motion } from "framer-motion";

import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaChartBar,
  FaDocker
} from "react-icons/fa";

import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiPostman
} from "react-icons/si";

// DATA
const tech = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "React", icon: <FaReact /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
];

const tools = [
  { name: "GitHub", icon: <FaGitAlt /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Power BI", icon: <FaChartBar /> },
  { name: "Docker", icon: <FaDocker /> }
];

// ANIMATIONS
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }
  }
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const TechStack = () => {
  return (
    <section className="py-28 bg-black relative overflow-hidden">

      {/* 🔥 GRID BACKGROUND (DATA SYSTEM FEEL) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 GLOW ORB */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl" />

      <Container>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          Tech Stack
        </motion.h2>

        {/* ================= TECH ================= */}
        <div className="mb-20">

          <h3 className="text-gray-400 mb-8 text-sm tracking-widest uppercase">
            Core Technologies
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {tech.map((item, i) => (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ scale: 1.08, rotateX: 5, rotateY: 5 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center cursor-pointer overflow-hidden transition-all duration-300"
              >

                {/* 🔥 HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl"></div>

                <div className="relative z-10 flex flex-col items-center gap-4">

                  <div className="text-4xl text-cyan-400 group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <p className="text-sm text-gray-300 group-hover:text-white">
                    {item.name}
                  </p>

                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= TOOLS ================= */}
        <div>

          <h3 className="text-gray-400 mb-8 text-sm tracking-widest uppercase">
            Tools & Platforms
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {tools.map((item, i) => (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ scale: 1.08 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center cursor-pointer transition-all duration-300"
              >

                {/* 🔥 SIDE GLOW BAR */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition"></div>

                <div className="flex flex-col items-center gap-4">

                  <div className="text-4xl text-purple-400 group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <p className="text-sm text-gray-300 group-hover:text-white">
                    {item.name}
                  </p>

                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>

      </Container>
    </section>
  );
};

export default TechStack;