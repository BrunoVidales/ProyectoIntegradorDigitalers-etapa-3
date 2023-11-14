import { createContext, useEffect, useState } from "react";
import { get, post, put,remove } from "../utils/http";


/* Creando contexto */

/* 1er paso: creando contexto */
const ProductosContext = createContext()

/* 2do paso: El armado del provider */
const url = 'https://654fd57a358230d8f0cdbd8d.mockapi.io/productos'
console.log('URL:', url);

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
    const crearProductoContext = async (productoNuevo) => {
        try {
            // Utiliza tu función post para realizar la solicitud POST
            const nuevoProducto = await post(url, productoNuevo);
        
            // Actualiza el estado y el localStorage
            let nuevosProductos = [...productos, nuevoProducto];
            setProductos(nuevosProductos);
            localStorage.setItem('productos', JSON.stringify(nuevosProductos));
            } catch (error) {
            console.error('Error al crear producto:', error);
        }
    };

    /* PUT -> Editar producto */
    const actualizarProductoContext = async (productoEditar) => {
        try {
            const productoExistente = productos.find(producto => producto.id === productoEditar.id);
            if (!productoExistente) {
                console.error('El producto no existe.');
                return;
            }
            await put(`${url}/${productoEditar.id}`, productoEditar);
            setProductos((prevProductos) =>
                prevProductos.map((producto) =>
                    producto.id === productoEditar.id ? productoEditar : producto
                )
            );
        } catch (error) {
            console.error(`[actualizarProductoContext] -> Algo no funcionó -> ${error}`);
        }
    };

    /* DELETE -> Eliminar productos */
    const eliminarProductoContext = async (id) => {
        try {
        await remove(`${url}/${id}`);
        setProductos((prevProductos) =>
            prevProductos.filter((producto) => producto.id !== id)
        );
        } catch (error) {
        console.error(`[eliminarProductoContext] -> Algo no funciono -> ${error}`);
        }
    };


    const data = {productos, crearProductoContext, actualizarProductoContext, eliminarProductoContext};

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>

}

/* 3er paso: Las exportaciones */
export { ProductosProvider }
export default ProductosContext
