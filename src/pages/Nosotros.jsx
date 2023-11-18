import { useEffect } from 'react'
import './Nosotros.css'


const Nosotros = () => {
  useEffect(() => {
    document.title = 'ConsolEye - Nosotros'
  }, [])

  return (
    <>
      <section className="row section-nosotros container-fluid text-center my-5">
          <div className="col-12 my-3 d-flex justify-content-center  align-items-center mb-4">
            <i className="fa-solid fa-user fa-xl my-auto me-2" style={{color: "#B4F08D"}}></i>
            <h1 className="my-auto text-light"><span className='span-nosotros'>Sobre</span> nosotros</h1>
          </div>
          <div className="col-sm-12">
            <p>En <span>ConsolEye</span>, compartimos tu pasión por la emoción de los videojuegos. Somos un equipo de entusiastas que se dedica a brindarte una selección cuidadosamente curada de las mejores consolas disponibles. Nuestra misión es ser tu destino confiable para descubrir y adquirir las consolas que te sumergirán en experiencias de juego excepcionales.</p>
            <p>Con una mezcla de las últimas innovaciones y los clásicos que amas, estamos comprometidos a ofrecerte una experiencia de compra sencilla y satisfactoria. Nuestro equipo está aquí para ayudarte en cada paso, proporcionándote información y atención personalizada para que puedas elegir la consola perfecta.</p>
          </div>
          <div className="col-sm-12 d-flex justify-content-center my-5">
            <div className='sobreNosotros-imagen sobreNosotros1-imagen image-fluid'></div>
            <div className='sobreNosotros-imagen sobreNosotros2-imagen'></div>
          </div>
      </section>


      <section className="section-nosotros container text-center mt-5">
        <div className=" my-3 d-flex justify-content-center  align-items-center">
          <i className="fa-solid fa-eye fa-xl my-auto me-2" style={{color: "#B4F08D"}}></i>
          <h2 className="my-auto"><span className="span-nosotros">Nuestra</span> Misión</h2>
        </div>
        <p>Nuestra misión es llevar la emoción de los videojuegos a cada hogar.
        Creemos que los videojuegos son más que una forma de entretenimiento; son una forma de escapar, aprender y conectarse con amigos y familiares.
        Estamos comprometidos a ofrecer una selección diversa de productos y servicios que enriquezcan tu experiencia de juego.</p>
        <div className="row py-3">
          <ul className='col-7 rounded-4 py-5'>
            <i className="fa-solid fa-gamepad fa-2xl mb-3"></i>
            <li>Entorno de juego inclusivo</li>
            <li>Comunidad vibrante y participativa</li>
            <li>Experiencias educativas y enriquecedoras</li>
            <li>Innovación constante en tecnología de juegos</li>
          </ul>
          <div className='col-2 nuestraMision'></div>
        </div>
      </section>
    </>
  )
}

export default Nosotros