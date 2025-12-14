import SectionTitle from "../../components/SectionTitle";
import { useLanguage } from "../../Hooks/useLanguage";

export default function Experience(){
    const {t} = useLanguage();

    return(
        <section id="experience" className="py-20">
        <SectionTitle title={t.experience.title} content="" />
            <div className="max-w-4xl mx-auto mt-10 space-y-12 px-4">

                {t.experience.items.map((item, index) => (
                <div
                    key={index}
                    className="bg-slate-200 shadow-md rounded-xl p-6"
                >
                    <h3 className="text-xl font-semibold">
                    {item.role}
                    {item.company && (
                        <span className="text-gray-600"> — {item.company}</span>
                    )}
                    </h3>

                    <p className="text-sm text-gray-500 mb-4">
                    {item.period}
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-900">
                    {item.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                    ))}
                    </ul>
                </div> 
                ))}         
            </div>
        </section>
    )
}