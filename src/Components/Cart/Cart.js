import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { getFirestore } from '../../Firebase'
import {CartContext} from '../CartContext/CartContext'

export function Cart() {
    const [products, productsCount, addProduct, delProduct, getTotal] = useContext(CartContext)

    const [orderId, setOrderId] = useState(false)
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [mail, setMail] = useState()

    const [cart, setCart] = useState()

    const handleFinish = () => {
        const db = getFirestore()
        const batch = db.batch()

        cart.forEach((item) => {
            const itemUpdate = db.collection('items').doc(item)
            batch.set(itemUpdate, {stock: item.stock - item.quantity})
        })

        batch.commit()
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const db = getFirestore()
                const items = db.collection('items')
                const querySnapshot = await items.get()
                setCart(
                    querySnapshot.docs.map((doc) => {
                        const { stock, name, price } = doc.data()
                        
                        return {
                            name,
                            price,
                            stock
                        }
                    })
                )
            } catch (error) {
                console.log('Firestore error: ', error)
            }
        }
        getData()
    }, [])

    function saveData(e) {
        const db = getFirestore()
        db.collection('orders').add(
            {
                buyer: {
                    name,
                    mail,
                    phone
                },
                items: {

                },
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: getTotal() 
            }
        
        .then(({id}) => {
            setOrderId(id)
        }))
    }


    
    return (
        <div>
            <h2 className="subtitulo">Carrito de Compras</h2>
            {products.map(product => (
                <div>
                    <h3>{product.nombre}</h3>
                    <h3>{product.quantity}</h3>
                    <p>{getTotal}</p>
                    <input onChange={(e) => setMail(e.target.value)} />
                    <input onChange={(e) => setPhone(e.target.value)} />
                    <input onChange={(e) => setName(e.target.value)} />
                    <button onClick={handleFinish}>Finalizar compra</button>
                    <Link to='/productos'>Volver</Link>
                </div>            
            ))}
            
        </div>
    )
}