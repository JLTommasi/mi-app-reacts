import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { pedirItemPorId } from "../helpers/pedirDatos";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        pedirItemPorId(Number (id))
        .then((resp) => {
            setItem (resp);
        })
    }, [id])
    

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer