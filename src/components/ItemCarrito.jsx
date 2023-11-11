import React, { useContext, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import CarritoContext from '../contexts/CarritoContext'

import './ItemCarrito.css'

const ItemCarrito = ({item}) => {

    const {cambiarCantidadCarritoContext, eliminarProductoCarritoContext} = useContext(CarritoContext)

    const handleEliminar = (id) => {
        console.log(`Estoy eliminando -> `, id)
        eliminarProductoCarritoContext(id)
    }
    

    let precioCantidadInicial = item.precio * item.cantidad

    const [total, setTotal] = useState(precioCantidadInicial)

    const [producto, handleChange] = useForm({
        cantidad: item.cantidad
    })

    useEffect(() => {
        let totalRecalculado = Number(item.precio * producto.cantidad).toFixed(2) 
        setTotal(totalRecalculado)

        item.cantidad = producto.cantidad
        cambiarCantidadCarritoContext(item)

    }, [producto.cantidad])


    return (
    <div className='row py-3 mb-1 rounded-4 bg-light'>

        <div className="col-4 mb-1">
            <div className="bg-image">
                <img className="w-100" src={`img/${item.foto}`} alt={item.nombre}></img>
            </div>
            </div>
            <div className="col-6">
                <ul className="d-flex flex-column">
                    <li className="mt-2"><span>{item.nombre}</span></li>
                    <li className="mt-2">Caracteristicas</li>
                    <li className="mt-2">${item.precio}</li>
                    <button className="btn-sm text-danger  me-1 mt-2 fa-solid fa-trash-can eliminar-producto" onClick={() => handleEliminar(item.id)}></button>
                </ul>
            </div>
            <div className="col-2">
                <input type="number" min="1" className="form-control mb-2 text-center" placeholder="Cantidad"  name='cantidad' value={producto.cantidad} onChange={handleChange}></input>
                <p className="text-center my-2 fw-bold">
                    $<strong className="precio">{total}</strong>
                </p>
                <img src="../img/score5.png" className="w-100" alt=""></img>
        </div>

    </div>
)
}

export default ItemCarrito