import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../CartContext/CartContext'

export function Cart() {
    const [products, productsCount, addProduct, delProduct, getTotal] = useContext(CartContext)

    useEffect(() => {
        console.log(products)
    }, [])
    
    
    return (
        <div>
            <h2 className="subtitulo">Carrito de Compras</h2>
            {products.map(product => (
                <div>
                    <h3>{product.nombre}</h3>
                    <h3>{product.quantity}</h3>
                    <p>{getTotal}</p>
                    <Link to='/productos'>Volver</Link>
                </div>            
            ))}
            
        </div>
    )
}