import { useState } from "react"
import { Item } from "../Item/Item"

export function ItemList() {
    const [product, setProduct] = useState([])

    const VerProductos = () => {

        let getProducts = new Promise ((resolve, reject) => {
           setTimeout(() => {
                resolve(Item)
            }, 2000)
        })
        getProducts.then( () => {
            setProduct(Item)
        })
    }
    
    return (
        <div>
            <div>
                <button className="botonProductos waves-effect waves-teal btn-flat" onClick={VerProductos}>Ver productos</button>
            </div>

            {product.length && product.map((product) => (
                <div className="verProductos">
                    <h3 className="subtitulo">{product.name}</h3>
                    <img alt='' src={product.image}></img>
                    <p className="subtitulo__1">Colores: {product.color}</p>
                    <h4 className="subtitulo__1">${product.price}</h4>
                </div>
            ))}
        </div>
    )
}