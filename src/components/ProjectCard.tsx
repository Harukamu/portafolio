type Props = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  repo: string;
  demo: string;
};

export default function ProjectCard({
  title,
  image,
  description,
  tech,
  repo,
  demo
}: Props) {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden p-4 hover:shadow-lg transition">
      <img src={image} className="rounded-lg w-full" />

      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-900 my-2">{description}</p>

      <div className="flex flex-wrap gap-2 my-3">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-200 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <a href={repo} target="_blank" className="hover:text-red-700 transition">
          GitHub
        </a>
        <a href={demo} target="_blank" className="hover:text-red-700 transition">
          Demo
        </a>
      </div>
    </div>
  );
}
