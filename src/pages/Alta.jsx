import React, { useEffect } from 'react'

const Alta = () => {

    useEffect(() => {
        document.title = 'ConsolEye - Alta (Carga de productos)'
    }, [])

  return (
    <form>

      <input type="text" placeholder='Nombre del producto' />
      <input type="text" placeholder='Caracteristicas'/>
      <input type="text" placeholder='Precio' />
      <input type="text" placeholder='Imagen del producto' />

    </form>
  )
}

export default Alta