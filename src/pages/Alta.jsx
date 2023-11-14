import React, { useContext, useEffect, useState } from 'react';
import './Alta.css';
import ProductosContext from '../contexts/ProductosContext';
import ThemeContext from '../contexts/ThemeContext';

const formInicial = {
  id: null,
  nombre: '',
  precio: '',
  foto: ''
};

const Alta = () => {

  const {theme} = useContext(ThemeContext)

  const { productos, crearProductoContext, eliminarProductoContext, actualizarProductoContext } = useContext(ProductosContext);
  

  const [form, setForm] = useState(formInicial);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (form.id) {
      actualizarProductoContext(form);
    } else {
      crearProductoContext(form);
    }
    
    setForm(formInicial);
  };

  const handleReset = () => {
    
    setForm(formInicial);
  };

  const handleEliminarClick = (id) => {
    eliminarProductoContext(id);
  };

  const handleModificarClick = (producto) => {
    // Llena el formulario con los datos del producto seleccionado para modificar
    setForm(producto);
  };

  useEffect(() => {
    document.title = 'ConsolEye - Alta (Carga de productos)';
  }, []);

  return (
    <div className='d-flex flex-column align-items-center'>
      <form className='alta d-flex flex-column align-items-center bg-light rounded-4 p-5 mb-5' onSubmit={handleSubmit}>
        <h2 className= 'mb-4'>Agregar / Editar: productos</h2>
        <label htmlFor='nombre'>Nombre del producto</label>
        <input className='input-alta rounded-4' id='nombre' name='nombre' type='text' onChange={handleChange} value={form.nombre} />

        <label htmlFor='precio'>Precio</label>
        <input className='input-alta rounded-4' id='precio' name='precio' type='text' onChange={handleChange} value={form.precio} />

        <label htmlFor='foto'>Imagen del producto</label>
        <input className='input-alta rounded-4' id='imagen' name='foto' type='text' onChange={handleChange} value={form.foto} />

        <div className='d-flex'>
          <button type='submit' className='btn btn-secondary mx-1'>
            Enviar
          </button>
          <button type='reset' className='btn btn-secondary mx-1' onClick={handleReset}>
            Limpiar
          </button>
        </div>
      </form>

      <table className='w-50 bg-light rounded-4'>
        <thead>
          <tr className='text-center'>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos &&
            productos.map((producto) => (
              <tr key={producto.id}>
                <td className='text-center p-2 '>{producto.nombre}</td>
                <td className='text-center p-2 '>${producto.precio}</td>
                <td className='text-center p-2 '>
                  <button className='btn btn-primary mx-1' onClick={() => handleModificarClick(producto)}>
                    Modificar
                  </button>
                  <button className='btn btn-danger mx-1' onClick={() => handleEliminarClick(producto.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alta;
