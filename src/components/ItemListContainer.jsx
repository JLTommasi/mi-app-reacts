import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { pedirDatos } from "../helpers/pedirDatos"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [titulo, setTitulo] = useState("productos");

    const categoria = useParams().categoria;

    useEffect(() => {
        pedirDatos()
        .then((resp) => {
            if (categoria) {
                setProductos( resp.filter((prod) => prod.categoria === categoria));
                setTitulo(categoria);
            } else {
                setProductos( resp );
                setTitulo(categoria);
            }
        })
    }, [categoria]
    )

    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}

export default ItemListContainer