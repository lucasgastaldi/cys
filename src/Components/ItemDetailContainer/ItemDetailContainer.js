import { useParams } from "react-router"

export function ItemDetailContainer() {
    const { anteojoId } = useParams()

    const anteojo = [
        {
            name: 'Camuflados',
            price: 1399,
            detail: 'Anteojos ideales para un look primaveral. Marco fino con detalles de camuflaje de distintos colores.',
            graduacion: '0.5; 1.00; 1.50; 2,50'
        },
        {
            name: 'Flex',
            detail: 'Clasico y efectivo. Acorde a cualquier situacion. Marco grueso para remarcar la mirada.',
            price: 1199,
            graduacion: '0.5; 1.00; 1.50; 2,50' 
        },
        {
            name: 'Light',
            price: 1299,
            detail: 'Look fresco garantizado. Marco fino y transparente.',
            graduacion: '0.5; 1.00; 1.50; 2,50'
        },
        {
            name: 'Sun',
            price: 1399,
            detail: 'Sun para dias soleados. Marco medio completamente negro.',
            graduacion: '-'
        }
    ]

    function getAnteojo(anteojoId) {
            return anteojo.find((anteojo) => anteojo.name === anteojoId )
    }

    getAnteojo()

    return (
       
        <div>
            <h3>{getAnteojo(anteojoId).name}</h3>
            <h5>{getAnteojo(anteojoId).detail}</h5>
            <h5>${getAnteojo(anteojoId).price}</h5>
            <h5>{getAnteojo(anteojoId).graduacion}</h5>
        </div>
    )
}  