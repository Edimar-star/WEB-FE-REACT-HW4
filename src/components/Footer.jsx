import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* --------------------- CONTACTO ---------------------------- */}
                <article className="space-y-4">
                    <h3 className="text-xl font-semibold">Contacto</h3>
                    <p>Dirección: Calle 45, Barranquilla, Colombia</p>
                    <p>Correo electrónico: <span className="text-blue-300">contacto@xiaomi.com</span></p>
                    <p>Teléfono: +123 456 789</p>
                </article>

                {/* --------------------- REDES SOCIALES ---------------------------- */}
                <article className="space-y-4">
                    <h3 className="text-xl font-semibold">Síguenos</h3>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-400"><FontAwesomeIcon icon={["fab", "square-facebook"]} /></a>
                        <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-300"><FontAwesomeIcon icon={["fab", "square-twitter"]} /></a>
                        <a href="#" aria-label="Instagram" className="text-pink-400 hover:text-pink-300"><FontAwesomeIcon icon={["fab", "square-instagram"]} /></a>
                        <a href="#" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-500"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                    </div>
                </article>

                {/* --------------------- NEWSLETTER ---------------------------- */}
                <article className="space-y-4">
                    <h3 className="text-xl font-semibold">Suscríbete a Nuestro Boletín</h3>
                    <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Tu correo electrónico" 
                            required 
                            className="px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button 
                            type="submit" 
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Suscribirse
                        </button>
                    </form>
                </article>
            </section>

            {/* --------------------- DERECHOS ---------------------------- */}
            <section className="mt-8 text-center">
                <p>&copy; 2024 Xiaomi Inc. Todos los derechos reservados.</p>
            </section>
        </div>
    </footer>
}

export default Footer
