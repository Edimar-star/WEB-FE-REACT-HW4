import Header from "./components/Header"
import DofaElement from "./components/DofaElement"
import Table from "./components/Table"
import Footer from "./components/Footer"
import { dofa_data, org_iden_data, objectives_data } from "./utils/data"

const App = () => {
  return <>
    {/* --------------------- HEADER ---------------------------- */}
    <Header />

    {/* --------------------- INTRODUCCION ---------------------------- */}
    <section className="introduction-section">
      <h1>Introducción</h1>
      <p>
        El Xiaomi Redmi Note 11 es un smartphone de gama media que combina rendimiento robusto con 
        características innovadoras a un precio accesible. Equipado con una pantalla AMOLED de 6.43 
        pulgadas, un procesador Snapdragon 680 y una batería de larga duración de 5000 mAh, el Redmi 
        Note 11 ofrece una experiencia de usuario fluida y eficiente, ideal para aquellos que buscan 
        tecnología avanzada sin romper el banco. Este modelo destaca por su equilibrio entre calidad 
        y costo, haciéndolo una opción atractiva para los consumidores modernos.
      </p>
    </section>

    {/* --------------------- DIAGNOSTICO ACTUAL ---------------------------- */}
    <section className="diagnostic-section">
      <h2>1. Diagnóstico Actual</h2>
      {dofa_data.map((dd) => <DofaElement key={dd.id} data={dd} />)}
    </section>
    
    {/* --------------------- IDENTIDAD ORGANIZACIONAL ---------------------------- */}
    <section className="organizational-identity-section">
      <h2>2. Identidad Organizacional</h2>
      <ul>
        {org_iden_data.map((org_iden, index) => <li key={index}>
          <h3>{org_iden.name}</h3>
          <p>{org_iden.description}</p>
        </li>)}
      </ul>
    </section>

    {/* --------------------- OBJETIVOS ESTRATEGICOS ---------------------------- */}
    <section className="">
      <h2>3. Objetivos Estratégicos</h2>
      <Table data={objectives_data} />
    </section>
    
    {/* --------------------- FOOTER ---------------------------- */}
    <Footer />
  </>
}

export default App
