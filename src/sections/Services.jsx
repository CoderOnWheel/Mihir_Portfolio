import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import FadeIn from "../components/ui/Fadein";

import { FaPaintBrush, FaCode, FaRocket } from "react-icons/fa";

const services = [
  {
    title: "UI/UX Design",
    desc: "Designing clean and modern user interfaces with great user experience.",
    icon: <FaPaintBrush />,
    glow: "from-pink-500/20"
  },
  {
    title: "Frontend Development",
    desc: "Building responsive and high-performance web apps using React.",
    icon: <FaCode />,
    glow: "from-cyan-500/20"
  },
  {
    title: "Performance Optimization",
    desc: "Improving speed, SEO, and overall performance of websites.",
    icon: <FaRocket />,
    glow: "from-purple-500/20"
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 blur-3xl" />

      <Container>

        <FadeIn>
          <SectionTitle
            title="SYSTEM CAPABILITIES"
            subtitle="What I can deploy for you"
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {services.map((item, index) => (
            <div key={index} className="relative group">

              {/* glow behind card */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 blur-2xl transition`} />

              {/* card */}
              <div className="relative bg-black/60 border border-white/10 rounded-2xl p-6 backdrop-blur-md overflow-hidden hover:border-cyan-400/30 transition">

                {/* scan line effect */}
                <div className="absolute inset-0 opacity-10 group-hover:animate-pulse bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:25px_25px]" />

                <div className="relative z-10">

                  {/* icon */}
                  <div className="text-2xl text-cyan-300 mb-4 group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Services;