import { createContext, useEffect, useState } from "react";
import { get } from "../utils/http";


/* Creando contexto */





/* 1er paso: creando contexto */
const ProductosContext = createContext()

/* 2do paso: El armado del provider */
const url = 'https://654fd57a358230d8f0cdbd8d.mockapi.io/productos'
console.log(url);

const ProductosProvider = ({children}) => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        obtenerProductos()
    }, []) // Se ejecuta una sola vez teniendo un array vacio

    const obtenerProductos = async () => {
        try {
            const productsBack = await get(url)
            setProductos(productsBack)
        } catch (error) {
            console.log(`[obtenerProductos] -> Algo no funciono -> ${error}`)
        }
    }

    /* POST -> Creacion de productos */
    const crearProductoContext = (productoNuevo) => {

    }

    /* PUT -> Editar producto */
    const actualizarProductoContext = (productoEditar) => {

    }

    /* DELETE -> Eliminar producutos */
    const eliminarProductoContext = (id) => {

    }


    const data = {productos, crearProductoContext, actualizarProductoContext, eliminarProductoContext};

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>

}

/* 3er paso: Las exportaciones */
export { ProductosProvider }
export default ProductosContext
