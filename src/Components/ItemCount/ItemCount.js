import {useState} from 'react'  
import carrito from '../../images/carrito.png'
import { Cart } from '../Cart/Cart'

export function ItemCount(props) {   
    const [count, setCount] = useState (props.initial)

    const RestarItem = () => props.initial < count && setCount(count - 1)   
    
    const SumarItem = () => count < props.stock && setCount(count + 1)    

    return (
        <div>
            <h5 className="subtitulo">Ingrese la cantidad de productos que desea:</h5>
            <div className='itemCount'>
                <button className='btn-floating btn-large cyan pulse' onClick={RestarItem}>-</button>
                <div className="contador">
                    <p>{count}</p>
                </div>
                <button className='btn-floating btn-large cyan pulse' onClick={SumarItem}>+</button>
            </div>           
            <p className="subtitulo__1">Stock: {props.stock}</p>
            <div className="agregarAlCarrito">
                <button className="waves-effect waves-teal btn-flat"><img src={carrito} height="40px" alt="carrito" /></button>
            </div>
            <div className="terminarCompra">
                <button onClick={Cart} className="waves-effect waves-teal btn-flat">Terminar mi Compra</button>
            </div>
        </div> 
    )
}