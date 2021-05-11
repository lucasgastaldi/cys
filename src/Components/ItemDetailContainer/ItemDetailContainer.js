import { useState } from "react"
import { useParams } from "react-router"
import { Detail } from '../ItemDetail/ItemDetail'

export function ItemDetailContainer() {
    const { anteojoId } = useParams()

    const [product, setProduct] = useState([])

    const addProduct = (anteojoId) => {
        const products =  Detail.find((detail) => detail.name === anteojoId )
        setProduct(products)        
    }
    

    return (
        <div>
            {product.length && product.map((detail) => (
                <div className="">
                    <Detail 
                        key={detail.name}
                        image={detail.image}
                        name={detail.name}
                        color={detail.color}
                        price={detail.price}
                        onAdd={addProduct}
                    />
                </div>
            ))}
        </div>
    )
}  