import React, { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import TableRowAlta from './TableRowAlta'
import Spinner from './Spinner'

const TableAlta = ({setProductoAEditar}) => {

  const {productos} = useContext(ProductosContext)
  console.log(productos)
  return (
    <>
    
      <h2>Productos</h2>
      {
        !productos && <Spinner />
      }
      { 
        productos &&  <table className='table table-striped text-center'>
                        <thead>
                          <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
          <tbody>
            {productos.map((producto) => (
              <TableRowAlta producto={producto} key={producto.id} setProductoAEditar={setProductoAEditar}/>
            ))}
          </tbody>
        </table>
      }
    </>
  )
}

export default TableAlta