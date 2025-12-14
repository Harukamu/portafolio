import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "../../components/ProjectCard";
import { useLanguage } from "../../Hooks/useLanguage";

export default function Projects() {
  const { t } = useLanguage();
  const projectsI = [
    {
      image: "/images/tendo1.png",
      tech: ["React", "TypeScript", "Node", "Express", "MongoDB", "Appwrite"],
      repo: "https://github.com/MilevaDot/tendo",
      demo: "https://tendo-one.vercel.app/",
    },
    {
      image: "/images/fullstock.png",
      tech: ["EJS", "Express", "Nodemon", "CSS"],
      repo: "https://github.com/Harukamu/Fullstock",
      demo: "https://fullstock-kohl.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <SectionTitle title={t.projects.title} content=""/>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10 mt-12">
        {t.projects.items.map((project, index) => (
          <ProjectCard
            title={t.projects.title}
            description={project.description}
            image={projectsI[index].image}
            tech={projectsI[index].tech}
            repo={projectsI[index].repo}
            demo={projectsI[index].demo}
          />
        ))}
      </div>
    </section>
  );
}
