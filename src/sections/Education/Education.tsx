import SectionTitle from "../../components/SectionTitle";
import { useLanguage } from "../../Hooks/useLanguage";

export default function Education(){
    const {t} = useLanguage();
    return(
        <section id="education" className="py-20">
        <SectionTitle title={t.education.title} content="" />
            <div className="max-w-4xl mx-auto mt-10 space-y-10">
                {t.education.items.map((item, index) => (
                <div
                    key={index}
                    className="bg-slate-200 shadow-md rounded-xl p-4"
                >
                    <h3 className="text-xl font-semibold">
                    {item.institution}
                    </h3>

                    <h4 className="text-base text-gray-600">
                    {item.program}
                    </h4>

                    <p className="text-sm text-gray-500 mb-4">
                    {item.period}
                    </p>

                    <p className="text-gray-900 leading-relaxed">
                    {item.description}
                    </p>
                </div>
                ))}
            </div>
        </section>
    )
}