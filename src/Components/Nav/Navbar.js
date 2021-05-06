import logo from '../../images/CYS.png';
import { CartWidget } from '../Cart/CartWidget';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <header className="App-header">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
                <ul>
                    <li> 
                        <NavLink exact to='/' className='navlink' activeClassName='active-navlink'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/productos' className='navlink' activeClassName='active-navlink'>Productos</NavLink> 
                    </li>
                    <li>
                        <NavLink to='/historia' className='navlink' activeClassName='active-navlink'>Historia</NavLink>
                    </li>
                    <li>
                        <NavLink to='7contacto' className='navlink' activeClassName='active-navlink'>Contacto</NavLink>
                    </li>
                </ul>
            </div>
            <div className="App-cart">
                <CartWidget />
            </div>
        </header>
    );
}
