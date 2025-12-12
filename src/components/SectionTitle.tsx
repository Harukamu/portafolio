type Props = {
  title: string;
  content: string;
};

export default function SectionTitle({ title, content }: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">
        {title}
      </h2>
      <p className="font-[Poppins] text-xl text-js leading-relaxed text-gray-900 mx-70">
        {content}
      </p>
    </div>
    
  );
}