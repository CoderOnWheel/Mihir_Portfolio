import { motion } from "framer-motion";
import { useState } from "react";
import Container from "../components/ui/Container";
import DataParticles from "../components/ui/DataParticles";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMouse({
      x: (clientX - window.innerWidth / 2) / 40,
      y: (clientY - window.innerHeight / 2) / 40,
    });
  };

  return (
    <section id="home"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center pt-24 relative overflow-hidden bg-black"
    >

      {/* ✅ PARTICLES BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <DataParticles />
      </div>

      {/* ✅ Animated Glow */}
      <motion.div
        animate={{
          x: mouse.x,
          y: mouse.y,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        //className="absolute w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl top-[-100px] left-[-100px] z-0"
      />

      {/* ✅ MAIN CONTENT */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="text-center max-w-3xl mx-auto">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-500 mb-4"
            >
              👋 Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                Mihir Shirsath
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl mt-4 text-gray-300"
            >
            <h2 className="text-xl md:text-2xl mt-4 text-gray-300">
              <Typewriter
              words={[
                "Data Engineer",
                "Backend Developer",
                "ETL Pipeline Builder",
                "Cloud & Data Systems"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
              />
              
              </h2>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mt-6 text-lg max-w-xl mx-auto"
            >
              I build scalable ETL pipelines, APIs, and cloud systems using Python, Java, and AWS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center gap-4 mt-10"
            >
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 bg-white text-black rounded-lg font-medium"
              >
                View Projects
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                href="#contact"
                className="px-6 py-3 border border-white/20 rounded-lg"
              >
                Contact Me
              </motion.a>
            </motion.div>

          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;