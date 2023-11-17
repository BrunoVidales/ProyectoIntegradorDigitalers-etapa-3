import React, { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'

const TableRowAlta = ({producto, setProductoAEditar}) => {

  const {eliminarProductoContext} = useContext(ProductosContext)
  

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>
        <button className='btn btn-secondary me-2' onClick={() => setProductoAEditar(producto)}>Modificar</button>
        <button className='btn btn-danger' onClick={() => eliminarProductoContext(producto.id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default TableRowAlta