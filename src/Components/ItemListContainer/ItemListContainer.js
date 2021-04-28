import { ItemCount } from '../ItemCount/ItemCount'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = (props) => {
    return (
        <div>
            <h3 className="saludo">{props.greeting}</h3>
            <ItemList />
            <ItemCount initial = {1} stock="7" />
        </div>
    )
}