import { ItemCount } from '../ItemCount/ItemCount'

export const ItemListContainer = (props) => {
    return (
        <div>
            <h3 className="saludo">{props.greeting}</h3>
            <ItemCount initial = {1} stock="7" />
        </div>
    )
}