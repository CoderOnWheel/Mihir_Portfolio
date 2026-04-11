import Container from "../components/ui/Container";
import SkillBar from "../components/ui/SkillBar";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl mb-6">Skills</h2>
        <div className="space-y-4">
          {skills.map((s, i) => (
            <SkillBar key={i} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;