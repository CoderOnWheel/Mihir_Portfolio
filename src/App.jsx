import MainLayout from "./layouts/MainLayout";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import TechStack from "./sections/Techstack"
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </MainLayout>
  );
}

export default App;