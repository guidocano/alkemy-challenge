import {Link} from "react-router-dom";

// components
import Buscador from "./Buscador";

function Header () {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/listado">Listado</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                            </li> */}
                        </ul>
                    </div>
                    <Buscador/>
                </div>
            </nav>
        </header>
    )
}

export default Header;