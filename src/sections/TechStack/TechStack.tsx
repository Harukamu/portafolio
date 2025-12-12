import SectionTitle from "../../components/SectionTitle";
import {SiPython, SiTailwindcss, SiPostgresql, SiReact, SiDjango, SiFigma, SiVite, SiAppwrite, SiJavascript, SiTypescript, SiGithub, SiHtml5, SiCss3} from "react-icons/si";

export default function TechStack() {
  const tech = [
    { name: "JavaScript", icon: <SiJavascript size={32} className="text-yellow-500"/> },
    { name: "TypeScript", icon: <SiTypescript size={32} className="text-blue-500"/> },
    { name: "HTML5", icon: <SiHtml5 size={32} className="text-orange-500"/> },
    { name: "CSS3", icon: <SiCss3 size={32} className="text-blue-400"/> },
    { name: "React", icon: <SiReact size={32} className="text-blue-600"/> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={32} className="text-cyan-400"/> },
    { name: "Python", icon: <SiPython size={32} className="text-yellow-300"/> },
    { name: "Django", icon: <SiDjango size={32} className="text-green-500"/> },
    { name: "PostgreSQL", icon: <SiPostgresql size={32} className="text-blue-700"/> },
    { name: "Vite", icon: <SiVite size={32} className="text-orange-400"/> },
    { name: "Appwrite", icon: <SiAppwrite size={32} className="text-gray-700"/> },
    { name: "Figma", icon: <SiFigma size={32} className="text-pink-500"/> },
    { name: "GitHub", icon: <SiGithub size={32} /> },
  ];

  return (
    <section id="tech" className="py-20">
      <SectionTitle title="Tecnologías" content=""/>
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10">
          {tech.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2 bg-slate-200 p-1 rounded-xl shadow-md hover:shadow-xl transition w-40"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
