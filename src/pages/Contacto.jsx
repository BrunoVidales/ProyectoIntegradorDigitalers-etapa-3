import { useEffect } from 'react'
import './Contacto.css'

const Contacto = () => {

  useEffect(() => {
    document.title = 'ConsolEye - Contacto'
  }, [])

  return (
    <>
      <div className="text-center my-5">
            <h2>Mantente en contacto con nosotros a través de nuestras redes sociales o envíanos un mensaje a través del formulario.</h2>
            <p> ¡Esperamos tener noticias tuyas!</p>
      </div>
      <form className="contacto container d-flex justify-content-center align-items-center flex-column text-center py-2 rounded-4" action="" method="post">
  
          <h3 className="fs-3 mb-3">Formulario</h3>
          <label htmlFor="nombre">Nombre</label>
          <input className="w-100 mb-3 rounded-4" type="text" id="nombre" required name="nombre"></input>
  
          <label htmlFor="apellido">Apellido</label>
          <input  className="w-100 mb-3 rounded-4" type="text" id="apellido"  required name="nombre"></input>
  
          <label htmlFor="email">Correo</label>
          <input className="w-100 mb-3 rounded-4" required type="email" id="email" ></input>
          
          <label htmlFor="formulario">Mensaje</label>
          <textarea className="w-100 mb-3 p-2 rounded-4"  name="" id="formulario" cols="30" rows="5" required></textarea>
  
          <div className="d-flex">
            <input className="btn-form clarito-form rounded-4 mx-1 px-2 py-1" type="submit" value="Enviar"></input>
            <input className="btn-form oscuro-form rounded-4 mx-1 px-2 py-1" type="reset" value="Limpiar"></input>
          </div>
      </form>

    </>
  )
}

export default Contacto