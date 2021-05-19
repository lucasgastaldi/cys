import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router"
import { getFirestore } from "../../Firebase"
import { Item } from "../Item/Item"
import {CartContext} from '../CartContext/CartContext'


export function ItemDetailContainer() {
    const { anteojoId } = useParams()

    const [addProduct] = useContext(CartContext)

    const [items, setItems] = useState([])

    const [emptyCategory, setEmptyCategory] = useState(false)
/* 
    const addProduct = (anteojoId) => {
        const products =  Detail.find((detail) => detail.name === anteojoId )
        setProduct(products)        
    } */

    useEffect (
        () => {
            const db = getFirestore()
            const itemCollection = db.collection("items").where('stock', '>=', 2)
            itemCollection.get().then(
                (querySnapshot) => {
                    if(querySnapshot.size === 0) {
                        setEmptyCategory(true)
                    }
                    setItems(querySnapshot.docs.map((doc) => doc.data()))
                }
            ) 
        }, []
    )
    

    return (
        <div>
            <div>
                <h1>
                    {anteojoId}
                </h1>
            </div>
            <div className="">
                {
                emptyCategory ? (
                <p>No hay productos.</p>
                ) : (
                items.length && items.map((item) => (    
                    <Item 
                        key={item.name}
                        image={item.image}
                        name={item.name}
                        detail={item.detail}
                        color={item.color}
                        price={item.price}
                        stock={item.stock}
                        onAdd={addProduct()}
                    />
                )))}
            </div>
        </div>
    )
}  