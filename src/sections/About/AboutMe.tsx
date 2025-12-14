import SectionTitle from "../../components/SectionTitle";
import { useLanguage } from "../../Hooks/useLanguage";

export default function About() {
  const {t} = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-justify">
        <SectionTitle
          title={t.about.title}
          content={t.about.content}
        />
      </div>
    </section>
  );
}