import carrito from '../../images/carrito.png';
import '../../App.css';
import { useContext } from 'react'
import {CartContext} from '../CartContext/CartContext'

export const CartWidget = () => {
    const [products, productsCount, addProduct, delProduct, getTotal] = useContext(CartContext)
    
    return (
        <div className="carrito">
            <img src={carrito} height="40px" alt="carrito" />
        </div>
    );
}