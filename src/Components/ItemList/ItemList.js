import { useState, useEffect } from "react"
import { productsData } from "../Item/Item"


export function ItemList() {
    const [product, setProduct] = useState('')

    const VerProductos = () => {

        let getProducts = new Promise ((resolve, reject) => {
           setTimeout(() => {
                resolve(productsData)
            }, 2000)
        })
        getProducts.then( () => {
            setProduct(productsData)
        })
        return product
    }
    
    return (
        <div>
            <div>
                <button className="botonProductos waves-effect waves-teal btn-flat" onClick={VerProductos}>Ver productos</button>
            </div>

            {product.length && product.map((product) => (
                <div className="verProductos">
                    <h3 className="subtitulo">{product.name}</h3>
                    <img src={product.image}></img>
                    <p className="subtitulo__1">Colores: {product.color}</p>
                    <h4 className="subtitulo__1">${product.price}</h4>
                </div>
            ))}
        </div>
    )
}