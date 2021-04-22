import carrito from './carrito.png';
import '../../App.css';

export const CartWidget = () => {
    return (
        <div className="carrito">
            <img src={carrito} height="40px" alt="carrito" />
        </div>
    );
}
