import React, { useContext, useEffect, useState } from 'react'
import ProductosContext from '../contexts/ProductosContext'


const formInicial = {
  id: null,
  nombre: '',
  precio: '',
  foto: ''
};

const FormAlta = ({productoAEditar, setProductoAEditar}) => {


  const {crearProductoContext, actualizarProductoContext} = useContext(ProductosContext)
  //console.log(crearProductoContext)

  const [form, setForm] = useState(formInicial)
  
  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
  }, [productoAEditar])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(form.id === null) {
      crearProductoContext(form)
    } else {
      actualizarProductoContext(form)
    }

    
  }

  const handleReset = (e) => {
    setForm(formInicial)
    setProductoAEditar(null)
  }

  return (
    <form onSubmit={handleSubmit} className='alta d-flex flex-column align-items-center bg-light rounded-4 p-5 mb-5'>
      <h2 className= 'mb-4'>{form.id ? 'Editar' : 'Agregar'}</h2>
      <label htmlFor='nombre'>Nombre del producto</label>
      <input className='input-alta rounded-4' id='nombre' name='nombre' type='text' onChange={handleChange} value={form.nombre}/>

      <label htmlFor='precio'>Precio</label>
      <input className='input-alta rounded-4' id='precio' name='precio' type='text'  onChange={handleChange} value={form.precio}/>

      <label htmlFor='foto'>Imagen del producto</label>
      <input className='input-alta rounded-4' id='foto' name='foto' type='text'  onChange={handleChange} value={form.foto}/>

      <div className='d-flex'>
        <button type='submit' className='btn btn-secondary mx-1'>
          Enviar
        </button>
        <button type='reset' className='btn btn-secondary mx-1' onClick={handleReset}>
          Limpiar
        </button>
      </div>
  </form>
  )
}

export default FormAlta