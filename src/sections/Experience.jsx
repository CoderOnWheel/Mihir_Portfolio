import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import FadeIn2 from "../components/ui/Fadein2";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Freelancer Data Engineer and Developer",
    company: "Kamchukarrr",
    time: "Oct 2023 - Present",
    desc: "Designed AWS-based data infrastructure, built ETL pipelines, reduced manual effort by 40%, and improved performance by 30%+.",
  },
  {
    role: "Data Analyst Intern",
    company: "Kamchukarrr",
    time: "Jan 2023 - Sept 2023",
    desc: "Analyzed datasets using SQL & Python, built Power BI dashboards, and optimized data workflows.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black relative z-10">
      <Container>

        {/* Title */}
        <FadeIn2>
          <SectionTitle 
            title="Experience"
            subtitle="My professional journey"
          />
        </FadeIn2>

        <div className="relative max-w-3xl mx-auto mt-12">

          {/* 🔥 Animated Vertical Line */}
          <div className="absolute left-2 top-0 w-[2px] h-full bg-white/10 overflow-hidden">
            
            {/* Glow moving line */}
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-1/3 bg-gradient-to-b from-transparent via-white to-transparent opacity-60"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">

            {experience.map((item, index) => (
              <FadeIn2 key={index} delay={index * 0.2}>
                
                <div className="relative pl-10 group">

                  {/* Glow Dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:scale-125 transition"></div>

                  {/* Card */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition">

                    <h3 className="text-lg font-semibold">
                      {item.role}{" "}
                      <span className="text-gray-400">— {item.company}</span>
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {item.time}
                    </p>

                    <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </FadeIn2>
            ))}

          </div>
        </div>

      </Container>
    </section>
  );
};

export default Experience;