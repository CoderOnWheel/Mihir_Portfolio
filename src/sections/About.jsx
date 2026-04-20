import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import FadeIn2 from "../components/ui/Fadein2";



const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative z-10">
      <Container>

        {/* Title */}
        <FadeIn2>
          <SectionTitle 
            title="About Me"
            subtitle="Get to know more about my background and expertise"
          />
        </FadeIn2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <FadeIn2 delay={0.2}>
            <div>
              <p className="text-gray-400 leading-relaxed">
                I am a Data Engineer with hands-on experience building scalable
                ETL pipelines and processing large datasets using technologies
                like PySpark, SQL, and AWS. I have worked on optimizing data
                workflows and improving performance for real-world systems.
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed">
                In addition to data engineering, I develop backend applications
                and REST APIs using Java and Spring Boot. I focus on writing
                clean, maintainable code and building systems that are scalable,
                efficient, and production-ready.
              </p>

              {/* CTA */}
              <div className="mt-8">
                <a href="/mihirportfolio/src/assets/images/resume/Mihir_Shirsath_DataEngineer.pdf" download="Mihir_Shirsath_Resume.pdf">
                <Button className="bg-cyan-500/10 border border-cyan-400 text-cyan-200 hover:bg-cyan-500/20 transition">
                ⬇ Download Resume
                </Button>
                </a>

              </div>
            </div>
          </FadeIn2>

          {/* RIGHT CARD */}
          <FadeIn2 delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-white/30 transition-all duration-300">

              <h3 className="text-xl font-semibold mb-6">Quick Info</h3>

              <ul className="space-y-4 text-gray-400 text-sm">
                <li>📍 Location: Mumbai, India</li>
                <li>💼 Role: Data Engineer</li>
                <li>⚡ Experience: 3+ Years</li>
                <li>🎯 Focus: ETL Pipelines, Backend Systems, Data Processing</li>
                <li>☁️ Tech: AWS, PySpark, SQL</li>
              </ul>

            </div>
          </FadeIn2>

        </div>

      </Container>
    </section>
  );
};

export default About;