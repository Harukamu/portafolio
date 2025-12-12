import SectionTitle from "../../components/SectionTitle";

export default function Education(){
    return(
        <section id="education" className="py-15">
        <SectionTitle title="Educación" content="" />
            <div className="max-w-4xl mx-auto mt-10 space-y-10">
                {/* Codeable */}
                <div className="bg-slate-200 shadow-md rounded-xl p-4">
                <h3 className="text-xl font-semibold">Codeable</h3>
                <h3 className="text-base text-gray-600">Desarrollo FullStack</h3>
                <p className="text-sm text-gray-500 mb-4">En curso</p>
                <p className="list-disc list-inside space-y-2 text-gray-900">
                    Especialización de una ruta más amplia para el desarrollo FullStack.
                </p>
                </div>

                {/* Codigo */}
                <div className="bg-slate-200 shadow-md rounded-xl p-4">
                <h3 className="text-xl font-semibold">Codigo-Tecsup</h3>
                <h3 className="text-base text-gray-600">Desarrollo web FullStack con Python</h3>
                <p className="text-sm text-gray-500 mb-4">Ene. 2025 – Ago. 2025</p>

                <p className="list-disc list-inside space-y-2 text-gray-900">
                    Capacitada para desarrollar aplicaciones desde el Front-end con React y Back-end con Python.
                </p>
                </div>

                {/* Profesión */}
                <div className="bg-slate-200 shadow-md rounded-xl p-4">
                <h3 className="text-xl font-semibold">Universidad Nacional del Callao</h3>
                <h3 className="text-base text-gray-600">Física</h3>
                <p className="text-sm text-gray-500 mb-4">Ago. 2016 – Dic. 2022</p>
                <p className="list-disc list-inside space-y-2 text-gray-900">
                    Durante mi formación académica desarrollé habilidades sólidas en Matemáticas, 
                    Física, Estadística y Computación.
                </p>
                </div>
            </div>
        </section>
    )
}