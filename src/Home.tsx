import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/About/AboutMe";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Porjects/Projects";
import TechStack from "./sections/TechStack/TechStack";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="tech">
        <TechStack />
      </section>

      <section id="education" >
        <Education />
      </section>

      <section id="contact" >
        <Contact />
      </section>
    </main>
  );
}
