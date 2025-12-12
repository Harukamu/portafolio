type Props = {
  name: string;
  icon: React.ReactNode; 
  url: string;
  color: string;
};

export default function ButtonContact({ name, icon, url, color }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className={`
        flex items-center gap-2 
        bg-white shadow-md px-5 py-3 rounded-xl 
        transition-all border border-gray-200
        hover:scale-105 
        ${color}
      `}
    >
      {icon}
      <span className="text-sm font-medium">{name}</span>
    </a>
  );
}
