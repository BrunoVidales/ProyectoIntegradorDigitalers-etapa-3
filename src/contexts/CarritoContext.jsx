
import { useLocalStorage } from "../hooks/useLocalStorage";

import { createContext, useEffect, useState }  from "react"


/* Creando contexto... */


/* 1er paso: Creacion de contexto */
const CarritoContext = createContext();


/* 2do paso: Armado del provider */

const url = import.meta.env.VITE_ENDPOINT_CARRITO


const CarritoProvider = ({ children }) => {
    //ESTADO
    const [agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, guardarCarrito, carrito] = useLocalStorage('carrito', [])
    const [totalFinal, setTotalFinal] = useState(0)


    function elProductoEstaEnElCarrito(producto) {
        return carrito.filter(prod => prod.id === producto.id).length // Me devuelve 0 si no hay producto, y 1 si hay
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find((prod => prod.id === producto.id)) // Me retorna si hay un producto en el carrito
    }

    useEffect(() => {
        setTotalFinal(precioTotalArticulosCarritoContext())
    }, [carrito])

    const agregarCarritoContext = (producto) => {
        if(!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            guardarCarrito(carrito)
        }
    }

    const cambiarCantidadCarritoContext = (productoNuevaCantidad) => {
        try {
            const nuevoCarrito = carrito.map(producto => producto.id === productoNuevaCantidad.id ? productoNuevaCantidad : producto)
            guardarCarrito(nuevoCarrito)
        } catch (error) {
            console.error('[cambiarCantidadCarritoContex], No se pudo guardar el producto con la nueva cantidad ', error)
        }
    }


    const eliminarProductoCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }

    const guardarCarritoContext = () => {

    }

    const vaciarCarritoContext = () => {
        vaciarCarrito()
    } 

    const cantidadArticulosCarritoContext = () => {
        let sumaTotalArticulos = carrito.reduce((total, producto) => {
            return total + producto.cantidad
        }, 0)
        return sumaTotalArticulos
    }

    const precioTotalArticulosCarritoContext = () => {
        let sumaTotal = carrito.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad)
        }, 0)
        return sumaTotal
    }
    
    const data = {
        carrito, 
        agregarCarritoContext, 
        eliminarProductoCarritoContext, 
        guardarCarritoContext, 
        vaciarCarritoContext, 
        cantidadArticulosCarritoContext, 
        totalFinal,
        cambiarCantidadCarritoContext
    };

    return <CarritoContext.Provider value={data}>{ children }</CarritoContext.Provider>
}



/* 3er paso: Exportaciones */
export { CarritoProvider }
export default CarritoContext