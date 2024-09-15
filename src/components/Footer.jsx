import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({}) => {
    return <footer>
        <section className="">
            {/* --------------------- CONTACTO ---------------------------- */}
            <article className="">
                <h3>Contacto</h3>
                <p>Dirección: Calle 45, Barranquilla, Colombia</p>
                <p>Correo electrónico: <span>contacto@xiaomi.com</span></p>
                <p>Teléfono: +123 456 789</p>
            </article>
    
            {/* --------------------- REDES SOCIALES ---------------------------- */}
            <article className="">
                <h3>Síguenos</h3>
                <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={["fab", "square-facebook"]} /></a>
                <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={["fab", "square-twitter"]} /></a>
                <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={["fab", "square-instagram"]} /></a>
                <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
            </article>
    
            {/* --------------------- NEWSLETTER ---------------------------- */}
            <article className="">
                <h3>Suscríbete a Nuestro Boletín</h3>
                <form>
                    <input type="email" name="email" placeholder="Tu correo electrónico" required />
                    <button>Suscribirse</button>
                </form>
            </article>
        </section>
    
        {/* --------------------- DERECHOS ---------------------------- */}
        <section className="">
            <p>&copy; 2024 Xiaomi Inc. Todos los derechos reservados.</p>
        </section>
    </footer>
}

export default Footer