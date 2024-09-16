import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* --------------------- LOGO ---------------------------- */}
                <div className="flex items-center space-x-2">
                    <a href="#">
                        <figure className="flex items-center space-x-2">
                            <img 
                                src="https://www.xiaomistore.tn/wp-content/uploads/2022/02/Xiaomi-Logo-e1644717776904.png" 
                                alt="Xiaomi" 
                                className="h-12 w-auto"
                            />
                            <figcaption className="text-xl font-semibold">XIAOMI</figcaption>
                        </figure>
                    </a>
                </div>

                {/* --------------------- MENU DE NAVEGACION ---------------------------- */}
                <nav className="hidden lg:flex lg:space-x-6 flex-grow justify-center">
                    <ul className="flex space-x-6">
                        <li><a href="#" className="hover:text-gray-400">Introducción</a></li>
                        <li><a href="#" className="hover:text-gray-400">Diagnóstico Actual</a></li>
                        <li><a href="#" className="hover:text-gray-400">Identidad Organizacional</a></li>
                        <li><a href="#" className="hover:text-gray-400">Objetivos Estratégicos</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
                    </ul>
                </nav>

                {/* --------------------- USUARIO Y CARRITO ---------------------------- */}
                <div className="flex space-x-4 text-2xl">
                    <a href="#" aria-label="Cuenta de Usuario" className="hover:text-gray-400">
                        <FontAwesomeIcon icon={["fas", "user"]} />
                    </a>
                    <a href="#" aria-label="Carrito de Compras" className="hover:text-gray-400">
                        <FontAwesomeIcon icon={["fas", "cart-shopping"]} />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
