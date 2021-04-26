import logo from '../../images/CYS.png';
import { CartWidget } from '../Cart/CartWidget'

export const NavBar = () => {
    return (
        <header className="App-header">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Productos</a></li>
                    <li><a>Historia</a></li>
                    <li><a>Contacto</a></li>
                </ul>
            </div>
            <div className="App-cart">
                <CartWidget />
            </div>
        </header>
    );
}