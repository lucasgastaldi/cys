import { useState } from 'react'

export const CartContext = React.createContext([]);

export const CartContextProvider = props => {
    const [products, setProducts] = useState([])

    function addProduct(product, quantity) {
        setProducts([...products, {'nombre': product, 'quantity': quantity}])
    }


    const productsCount = () => {
        return products.reduce((acc, p) => (acc += p.quantity))
    }

    const delProduct = (id) => {
        products.splice(
            products.findIndex((p) => p.id === id)
        )
        setProducts([...products])
    }

    function clearAll() {
        setProducts([])
    }

    const getTotal = () => {

    }

    return (
        <CartContext.Provider value={[products, productsCount, addProduct, delProduct, clearAll, getTotal]}>
            {props.children}
        </CartContext.Provider>
    )
}