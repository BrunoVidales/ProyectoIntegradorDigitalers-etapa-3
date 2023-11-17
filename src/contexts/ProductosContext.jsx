import { createContext, useEffect, useState } from "react";
import { get, post } from "../utils/http";
import Swal from 'sweetalert2'

/* Creando contexto */

/* 1er paso: creando contexto */
const ProductosContext = createContext()

/* 2do paso: El armado del provider */
const url = 'https://654fd57a358230d8f0cdbd8d.mockapi.io/productos/'
console.log('URL:', url);

const ProductosProvider = ({children}) => {
    /* estado */
    const [productos, setProductos] = useState(null)
    

    useEffect(() => {
        obtenerProductos()
    }, []) // Se ejecuta una sola vez teniendo un array vacio

    const obtenerProductos = async () => {
        console.log('Se monto el componente')
        try {
            const productsBack = await get(url)
            setProductos(productsBack)
        } catch (error) {
            console.error(`[obtenerProductos] -> Algo no funciono -> ${error}`)
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
    

    /* PUT */
    const actualizarProductoContext = async (productoEditado) => {
        console.log(productoEditado)

        const urlCompleta = url + productoEditado.id;
        console.log(urlCompleta)
        try {
            const config = {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(productoEditado)
            }

            const respuesta = await fetch(urlCompleta, config)
            if(!respuesta.ok) {
                throw new Error(`[actualizarProductoContext] Error... ${respuesta.status}`)
            }

            const data = await respuesta.json()
            console.log(data)

            const nuevaDB = productos.map(producto => producto.id === productoEditado.id ? productoEditado : producto)
            setProductos(nuevaDB)

            localStorage.setItem('productos', JSON.stringify(nuevaDB));
        } catch (error) {
            console.log('Algo paso con la peticion en [actualizarProductoContext] ', error)
        }
    };



    /* DELETE -> Peticion asincronica para eliminar los productos */
    const eliminarProductoContext = async (id) => {
       /*  console.log('Se eliminó el producto'); */
    
        Swal.fire({
            title: "¿Estás seguro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminarlo"
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Eliminado!",
                    text: "El producto ha sido eliminado.",
                    icon: "success"
                });
    
                const urlCompleta = url + id;
                console.log(urlCompleta);
    
                const config = {
                    method: 'DELETE'
                };
    
                try {
                    const respuesta = await fetch(urlCompleta, config);
                    if (!respuesta.ok) {
                        throw new Error(`[eliminarProductoContext] Error... ${respuesta.status}`);
                    }
    
                    const data = await respuesta.json();
                    console.log(data);
    
                    // Actualización del estado (db)
                    const nuevaDB = productos.filter(producto => producto.id !== id);
                    setProductos(nuevaDB);
    
                    // Guardar en localStorage
                    localStorage.setItem('productos', JSON.stringify(nuevaDB));
                } catch (error) {
                    console.error(error);
                }
            } else {
                return
            }
        });
    };



    const data = {productos, crearProductoContext, actualizarProductoContext, eliminarProductoContext};

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>

}

/* 3er paso: Las exportaciones */
export { ProductosProvider }
export default ProductosContext
