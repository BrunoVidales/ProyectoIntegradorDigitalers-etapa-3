import { useEffect } from 'react'
import './Inicio.css'
import { Link } from 'react-router-dom'


const Inicio = () => {

  useEffect(() => {
    document.title = 'ConsolEye - Inicio'
  }, [])

  return (
    <>

      <section className="main-index text-center d-flex rounded-4 align-items-center flex-column p-3 bg-light"> 
        <h1>Bienvenido a ConsolEye, tu destino para encontrar las mejores consolas de videojuegos de marcas como <span className="span-chico">Playstation, Xbox, Nintendo y Sega</span>. </h1>
        <p>Aquí podrás explorar y adquirir tus consolas favoritas.</p>

        <div id="carouselExample" className="carousel slide w-50">
          <div className="carousel-inner rounded-4">
            <div className="carousel-item active">
              <img src="/img/controles/PS5_2.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src="/img/controles/Xbox.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src="/img/controles/nintendo-switch_1.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src="/img/controles/sega_2.jpg" className="d-block w-100" alt="..."></img>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="container my-5 inicio-cartas">
          <div className="row d-flex justify-content-center">
            <div className="card col-6  carta carta-1 m-1 rounded-4" style={{width: "19rem"}}>
              <img src="/img/logo/PlayStation.svg" className="card-img-top" alt="Logo de PLAYSTATION"></img>
              <div className="card-body">
                <h2>PlayStation</h2>
                <ul className="row list-unstyled d-flex flex-column mt-3 mb-4">
                  <li className="col-12 list-group-item mt-1">Experiencia de juego inigualable</li>
                  <li className="col-12 list-group-item mt-1">Diversión sin límites.</li>
                </ul>
                <Link to="/consolas" className="btn btn-inicio">Ver más</Link>
              </div>
            </div>
            
            <div className="card col-6  carta carta-2 m-1 rounded-4" style={{width: "19rem"}}>
              <img src="/img/logo/Xbox.svg" className="card-img-top" alt="Logo de XBOX"></img>
              <div className="card-body">
                <h2>Xbox</h2>
                <ul className="row list-unstyled mt-3 mb-4">
                  <li className="col-12 list-group-item mt-1">Experiencia de juego inigualable</li>
                  <li className="col-12 list-group-item mt-1">Diversión sin límites.</li>
                </ul>
                <Link to="/consolas" className="btn btn-inicio">Ver más</Link>
              </div>
            </div>

          </div>

          <div className="row d-flex justify-content-center">
            <div className="card col-6  carta carta-3 m-1 rounded-4" style={{width: "19rem"}}>
              <img src="/img/logo/Nintendo.svg" className="card-img-top" alt="Logo de NINTENDO"></img>
              <div className="card-body">
                <h2>Nintendo</h2>
                <ul className="row list-unstyled d-flex flex-column mt-3 mb-4">
                  <li className="col-12 list-group-item mt-1">Experiencia de juego inigualable</li>
                  <li className="col-12 list-group-item mt-1">Diversión sin límites.</li>
                </ul>
                <Link to="/consolas" className="btn btn-inicio">Ver más</Link>
              </div>
            </div>
            
            <div className="card col-6  carta carta-4 m-1 rounded-4" style={{width: "19rem"}}>
              <img src="/img/logo/Sega.svg" className="card-img-top" alt="Logo de SEGA"></img>
              <div className="card-body">
                <h2>Sega</h2>
                <ul className="row list-unstyled mt-3 mb-4">
                  <li className="col-12 list-group-item mt-1">Experiencia de juego inigualable</li>
                  <li className="col-12 list-group-item mt-1">Diversión sin límites.</li>
                </ul>
                <Link to="/consolas" className="btn btn-inicio">Ver más</Link>
              </div>
            </div>

          </div> 
      </section>
    </>
  )
}

export default Inicio