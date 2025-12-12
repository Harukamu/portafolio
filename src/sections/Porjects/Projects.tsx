import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Tendo",
      image: "/images/tendo1.png",
      description:
        "Tendo es una web desarrollada en equipo que permite mostrar, crear y gestionar productos. Incluye carrito de compras, roles (público y administrador) y plataforma de gestión.",
      tech: ["React", "TypeScript", "Node", "Express", "MongoDB", "Appwrite"],
      repo: "https://github.com/MilevaDot/tendo",
      demo: "https://tendo-one.vercel.app/",
    },
    {
      title: "FullStock",
      image: "/images/fullstock.png",
      description:
        "FullStock es una tienda web moderna con registro de usuarios, creación de un carrito de compras, formulario de envío y confirmación del resumen de compra mediante un código único.",
      tech: ["EJS", "Express", "Nodemon", "CSS"],
      repo: "https://github.com/Harukamu/Fullstock",
      demo: "https://fullstock-kohl.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <SectionTitle title="Proyectos" content=""/>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10 mt-12">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            image={p.image}
            description={p.description}
            tech={p.tech}
            repo={p.repo}
            demo={p.demo}
          />
        ))}
      </div>
    </section>
  );
}
