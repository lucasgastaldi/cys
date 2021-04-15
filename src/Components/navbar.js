import logo from '../../logo.svg';

export const NavBar = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
                <li><a>Home</a></li>
                <li><a>Productos</a></li>
                <li><a>Historia</a></li>
                <li><a>Contacto</a></li>
            </ul>
        </header>
    );
}
