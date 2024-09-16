import Header from "./components/Header";
import DofaElement from "./components/DofaElement";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { dofa_data, org_iden_data, objectives_data } from "./utils/data";

const App = () => {
    return <>
        {/* --------------------- HEADER ---------------------------- */}
        <Header />

        {/* --------------------- INTRODUCCION ---------------------------- */}
        <section className="px-4 py-8 bg-gray-50">
            <article className="container mx-auto">
                <h1 className="text-3xl font-bold mb-4">Introducción</h1>
                <p className="text-base text-gray-700">
                    El Xiaomi Redmi Note 11 es un smartphone de gama media que combina rendimiento robusto con 
                    características innovadoras a un precio accesible. Equipado con una pantalla AMOLED de 6.43 
                    pulgadas, un procesador Snapdragon 680 y una batería de larga duración de 5000 mAh, el Redmi 
                    Note 11 ofrece una experiencia de usuario fluida y eficiente, ideal para aquellos que buscan 
                    tecnología avanzada sin romper el banco. Este modelo destaca por su equilibrio entre calidad 
                    y costo, haciéndolo una opción atractiva para los consumidores modernos.
                </p>
            </article>
        </section>

        {/* --------------------- DIAGNOSTICO ACTUAL ---------------------------- */}
        <section className="px-4 py-8 bg-white">
            <article className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4">1. Diagnóstico Actual</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dofa_data.map(dd => <DofaElement key={dd.id} data={dd} />)}
                </div>
            </article>
        </section>


        {/* --------------------- IDENTIDAD ORGANIZACIONAL ---------------------------- */}
        <section className="px-4 py-8 bg-gray-50">
            <article className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4">2. Identidad Organizacional</h2>
                <ul className="list-disc pl-5 space-y-4">
                    {org_iden_data.map((org_iden, index) => <li key={index}>
                        <h3 className="text-xl font-bold">{org_iden.name}</h3>
                        <p className="text-gray-700">{org_iden.description}</p>
                    </li>)}
                </ul>
            </article>
        </section>

        {/* --------------------- OBJETIVOS ESTRATEGICOS ---------------------------- */}
        <section className="px-4 py-8 bg-white">
            <article className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4">3. Objetivos Estratégicos</h2>
                <Table data={objectives_data} />
            </article>
        </section>

        {/* --------------------- FOOTER ---------------------------- */}
        <Footer />
    </>
}

export default App;
