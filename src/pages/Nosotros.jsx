import { useEffect } from 'react'
import './Nosotros.css'

const Nosotros = () => {
  useEffect(() => {
    document.title = 'ConsolEye - Nosotros'
  }, [])

  return (
    <>
      <section className="section-nosotros container-fluid text-center my-1">
        <div className=" my-3 d-flex justify-content-center  align-items-center">
          <i className="fa-solid fa-user fa-xl my-auto me-2" style={{color: "#00000032"}}></i>
          <h1 className="my-auto text-light">Sobre nosotros</h1>
        </div>
        <p>En <span>ConsolEye</span>, compartimos tu pasión por la emoción de los videojuegos. Somos un equipo de entusiastas que se dedica a brindarte una selección cuidadosamente curada de las mejores consolas disponibles. Nuestra misión es ser tu destino confiable para descubrir y adquirir las consolas que te sumergirán en experiencias de juego excepcionales.</p>
        <p>Con una mezcla de las últimas innovaciones y los clásicos que amas, estamos comprometidos a ofrecerte una experiencia de compra sencilla y satisfactoria. Nuestro equipo está aquí para ayudarte en cada paso, proporcionándote información y atención personalizada para que puedas elegir la consola perfecta.</p>
      </section>

      <section className="section-nosotros container text-center my-1">
        <div className=" my-3 d-flex justify-content-center  align-items-center">
          <i className="fa-solid fa-eye fa-xl my-auto me-2" style={{color: "#00000032"}}></i>
          <h2 className="my-auto">Nuestra Misión</h2>
        </div>
        <p>Nuestra misión es llevar la emoción de los videojuegos a cada hogar. Creemos que los videojuegos son más que una forma de entretenimiento; son una forma de escapar, aprender y conectarse con amigos y familiares. Estamos comprometidos a ofrecer una selección diversa de productos y servicios que enriquezcan tu experiencia de juego.</p>
      </section>
    </>
  )
}

export default Nosotros