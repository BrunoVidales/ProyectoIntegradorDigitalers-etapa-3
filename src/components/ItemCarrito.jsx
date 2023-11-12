import React, { useContext, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import CarritoContext from '../contexts/CarritoContext'

import './ItemCarrito.css'

const ItemCarrito = ({itemProducto}) => {

    const {cambiarCantidadCarritoContext, eliminarProductoCarritoContext} = useContext(CarritoContext)

    

    let precioCantidadInicial = itemProducto.precio * itemProducto.cantidad

    const [total, setTotal] = useState(precioCantidadInicial)

    const [cantidadInput, handleChange] = useForm({
        cantidad: itemProducto.cantidad
    })

    useEffect(() => {
        let totalRecalculado = Number(itemProducto.precio * cantidadInput.cantidad).toFixed(2) 
        setTotal(totalRecalculado)

        itemProducto.cantidad = cantidadInput.cantidad
        cambiarCantidadCarritoContext(itemProducto)

    }, [cantidadInput.cantidad])


    return (
    <div className='row py-3 mb-1 rounded-4 bg-light'>

        <div className="col-4 mb-1">
            <div className="bg-image">
                <img className="w-100" src={`img/${itemProducto.foto}`} alt={itemProducto.nombre}></img>
            </div>
            </div>
            <div className="col-6">
                <ul className="d-flex flex-column">
                    <li className="mt-2"><span>{itemProducto.nombre}</span></li>
                    <li className="mt-2">Caracteristicas</li>
                    <li className="mt-2">${itemProducto.precio}</li>
                    <button className="btn-sm text-danger  me-1 mt-2 fa-solid fa-trash-can eliminar-producto" onClick={() => eliminarProductoCarritoContext(itemProducto.id)}></button>
                </ul>
            </div>
            <div className="col-2">
                <input type="number" min="1" className="form-control mb-2 text-center" placeholder="Cantidad"  name='cantidad' value={cantidadInput.cantidad} onChange={handleChange}></input>
                <p className="text-center my-2 fw-bold">
                    $<strong className="precio">{total}</strong>
                </p>
                <img src="../img/score5.png" className="w-100" alt=""></img>
        </div>

    </div>
)
}

export default ItemCarrito