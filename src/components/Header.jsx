import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({}) => {
    return <header>
        <section className="header-container">
            {/* --------------------- LOGO ---------------------------- */}
            <article className="header-logo">
                <a href="#">
                    <figure>
                        <img src="https://www.xiaomistore.tn/wp-content/uploads/2022/02/Xiaomi-Logo-e1644717776904.png" alt="Xiaomi" />
                        <figcaption>XIAOMI</figcaption>
                    </figure>
                </a>
            </article>
        
            {/* --------------------- MENU DE NAVEGACION ---------------------------- */}
            <nav className="">
                <ul>
                    <li><a href="#">Introducción</a></li>
                    <li><a href="#">Diagnóstico Actual</a></li>
                    <li><a href="#">Identidad Organizacional</a></li>
                    <li><a href="#">Objetivos Estratégicos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            
            {/* --------------------- BUSCADOR ---------------------------- */}
            <article className="">
                <form>
                    <input type="text" name="query" placeholder="Buscar..." required />
                    <button type="submit">Buscar</button>
                </form>
            </article>
        
            {/* --------------------- USUARIO Y CARRITO ---------------------------- */}
            <article className="header-icons">
                <a href="#" aria-label="Cuenta de Usuario"><FontAwesomeIcon icon={["fas", "user"]} /></a>
                <a href="#" aria-label="Carrito de Compras"><FontAwesomeIcon icon={["fas", "cart-shopping"]} /></a>
            </article>
        </section>
    </header>
}

export default Header