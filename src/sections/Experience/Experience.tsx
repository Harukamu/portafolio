import SectionTitle from "../../components/SectionTitle";
// clasificar el texto y color para el componente repetitivo.
export default function Experience(){
    return(
        <section id="experience" className="py-10">
        <SectionTitle title="Experiencia" content="" />
            <div className="max-w-4xl mx-auto mt-10 space-y-12">

                {/* NTT DATA */}
                <div className="bg-slate-200 shadow-md rounded-xl p-6 ">
                <h3 className="text-xl font-semibold">Analista de Datos</h3>
                <p className="text-sm text-gray-500 mb-4">Ago. 2025 – Oct. 2025</p>

                <ul className="list-disc list-inside space-y-2 text-gray-900">
                    <li>
                    Ejecución de consultas SQL en entornos Oracle y UNIX.
                    </li>
                    <li>
                    Optimización de consultas PL/SQL.
                    </li>
                    <li>
                    Diseño de maquetas en Power Apps.
                    </li>
                    <li>
                    Elaboración de reportes analíticos.
                    </li>
                </ul>
                </div>

                {/* Asistente de Laboratorio */}
                <div className="bg-slate-200 shadow-md rounded-xl p-6">
                <h3 className="text-xl font-semibold">Asistente de Laboratorio de Física</h3>
                <p className="text-sm text-gray-500 mb-4">Oct. 2023 – Jul. 2024</p>

                <ul className="list-disc list-inside space-y-2 text-gray-900">
                    <li>
                    Gestión integral de laboratorios de física.
                    </li>
                    <li>
                    Elaboración de dashboards con Excel y Power BI.
                    </li>
                    <li>
                    Optimización de procesos administrativos y académicos.
                    </li>
                </ul>
                </div>

                {/* Prácticas */}
                <div className="bg-slate-200 shadow-md rounded-xl p-6">
                <h3 className="text-xl font-semibold">Práctica Pre-Profesional</h3>
                <p className="text-sm text-gray-500 mb-4">Jun. 2022 – Dic. 2022</p>

                <ul className="list-disc list-inside space-y-2 text-gray-900">
                    <li>
                    Migración de datos de Excel a SQL Server
                    </li>
                    <li>
                    Análisis con Python, realizando cálculos y visualización de datos.
                    </li>
                </ul>
                </div>
            </div>
        </section>
    )
}