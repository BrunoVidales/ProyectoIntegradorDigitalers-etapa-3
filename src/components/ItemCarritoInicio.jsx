import React from 'react'
import './ItemCarritoInicio.css'
import { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'

const ItemCarritoInicio = ({ item }) => {

  const {eliminarProductoCarritoContext} = useContext(CarritoContext)

  const handleEliminar = (id) => {
    console.log(`Estoy eliminando -> `, id)
    eliminarProductoCarritoContext(id)
  }

  return (
    <tr>
        <td className='border'>
          <img src={`img/${item.foto}`} alt={item.nombre} width="100"></img>
        </td>
        <td>{item.nombre}</td>
        <td>{item.precio}</td>
        <td>
          <button href="#" className="borrar-producto fas fa-times-circle" onClick={() => handleEliminar(item.id)} ></button>
        </td>

    </tr>
  )
}

export default ItemCarritoInicio