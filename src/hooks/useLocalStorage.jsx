import { useState } from "react"

//useLocalStorage('carrito', [])

export const useLocalStorage = (clave, valorInicial = []) => {
    // Tiene que usar algunos de los hooks que hay

    const getValorAlmacenado = () => {
        try {
            const valorAlmacenadoLS = window.localStorage.getItem(clave)
            return valorAlmacenadoLS ? JSON.parse(valorAlmacenadoLS) : valorInicial
        } catch (error) {
            console.error(`Error al obtener ${clave} del LocalStorage ${error}`)
            return valorInicial
        }
    }

    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

    const  guardarValoresLS = (valores) => {
        try {
            setValorAlmacenado(valores)
            window.localStorage.setItem(clave, JSON.stringify(valores))
        } catch (error) {
            console.error(`Error al guardar valores en el localStorage: ${error}`)
        }
    }

    const guardarValorLS = (valorNuevo) => { // valorNuevo va a contener un producto = {}
        try {
            const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo]
            setValorAlmacenado(nuevoValorAlmacenado) // Cambiando el estado con el array que tenia mas el nuevo
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado)) // Guardo el nuevo array generado que tienen dentro el nuevo producto
        } catch (error) {
            console.error(`Error al guardar ${clave} del localStorage: ${error}`)
        }
    }


    const eliminarValorLS = (id) => {
        try {
            
            const nuevoValorAlmacenado = [...valorAlmacenado] // Estoy clonando el array original
            
            const indice = nuevoValorAlmacenado.findIndex(item => item.id === id)

            nuevoValorAlmacenado.splice(indice, 1)

            setValorAlmacenado(nuevoValorAlmacenado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))

        } catch (error) {
            console.log(`Error al eliminar el producto con el id: ${id} en ${clave} del localStorage ${error}`)
        }
    }

    const limpiarLS = () => {
        window.localStorage.clear()
        window.localStorage.setItem(clave, JSON.stringify(valorInicial))
        setValorAlmacenado(valorInicial)
    }

    return [guardarValorLS, eliminarValorLS, limpiarLS, guardarValoresLS, valorAlmacenado]

}