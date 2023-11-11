import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="container-fluid py-3 rounded-top-4 mt-5 d-flex justify-content-center align-items-center flex-column text-center">
      <p>Síguenos para conocer las últimas noticias, ofertas especiales y actualizaciones, o envíanos un correo electrónico. ¡Estamos aquí para responder a tus preguntas y comentarios!</p>
      <ul className="w-50 d-flex justify-content-evenly align-items-center rounded-4">
        <li><a href="pages/consolas.html">Consolas</a></li>
        <li><a href="pages/nosotros.html">Nosotros</a></li>
        <li><a href="pages/contacto.html">Contacto</a></li>
        <li><a href="pages/carrito.html">Carrito</a></li>
      </ul>
      <p>&copy; 2023 ConsolEye. Todos los derechos reservados.</p>
      <div className="container redes w-100 d-flex justify-content-evenly">
        <button className="bg-transparent"><a href="https://es-la.facebook.com" target="_blank"><i className="fa-brands fa-facebook fa-2xl" style={{color: "#94e475"}}></i></a></button>
        <button className="bg-transparent"><a href="https://ar.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{color: "#94e475"}}></i></a></button>
        <button className="bg-transparent"><a href="mailto:consoleye@gmail.com" target="_blank"><i className="fa-solid fa-envelope fa-2xl" style={{color: "#94e475"}}></i></a></button>
        <button className="bg-transparent"><a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram fa-2xl w-100" style={{color: "#94e475"}}></i></a></button>
      </div>
    </footer>

  )
}

export default Footer