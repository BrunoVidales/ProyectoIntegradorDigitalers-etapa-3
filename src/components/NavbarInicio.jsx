import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ItemCarritoInicio from './ItemCarritoInicio'
import { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'

/* Alert */
import Swal from 'sweetalert2'

/* Estilo */
import './NavbarInicio.css'





const Navbar = () => {

  const {carrito, vaciarCarritoContext} = useContext(CarritoContext)

  const navigate = useNavigate()
  const handleComprar = () => {
    if(carrito.length !== 0) {
        navigate('/carrito')
    } else {
        console.log('No hay productos')
        Swal.fire({
          icon: "error",
          title: "Error...",
          text: "¡Carrito vacío!",
          footer: '<p>No puedes procesar la compra porque tu carrito está vacío. Agrega algunos productos antes de continuar.</p>'
      });
    }
}

  const handleVaciarCarrito = () => {
    vaciarCarritoContext()
  }

  return (
    <header className="d-flex justify-content-center align-items-center flex-column"> 
      <div className="rounded-4"> 
        <nav className="navbar navbar-expand-lg p-3"> 
            <Link className="navbar-brand ps-2" to="/"><i className="fa-solid fa-house" style={{ color: '#b4f08d' }}></i></Link>
            <button className="navbar-toggler bg-transparent border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span><img className="icono-menu" src="/img/icono-menu.png" alt="icono menu" width="30px"></img></span>
            </button> 
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> 
              <ul className="navbar-nav d-flex justify-content-between align-items-center w-50 ul-modo"> 
                  <li>
                    <button className="boton-nav p-2 bg-transparent"> 
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <NavLink to="/consolas">Consolas</NavLink>
                    </button>
                  </li>
                  <li>
                    <button className="boton-nav p-2 bg-transparent">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <NavLink to="/nosotros">Nosotros</NavLink>
                    </button>
                  </li>
                  <li>
                    <button className="boton-nav p-2 bg-transparent">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <NavLink to="/contacto">Contacto</NavLink>
                    </button>
                  </li>
                  <li>
                    <button className="boton-nav p-2 bg-transparent">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <NavLink to="/alta">Alta</NavLink>
                    </button>
                  </li>
                  <li>
                    <div className="dropstart  mx-2">
                        <button className="boton-nav p-2 bg-transparent"  data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: '#b4f08d' }}></i>
                        </button>
                        <ul id="carrito" className="dropdown-menu">
                            <table id="lista-carrito" className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Imagen</th>
                                        <th scope="col">Nomre</th>
                                        <th scope="col">Precio</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {
                                    carrito && carrito.map(item => (
                                      <ItemCarritoInicio key={item.id} item={item} />
                                    ))
                                  }
                                </tbody>
                            </table>
                            <div className="d-flex gap-1 justify-content-md-center ms-1">
                                    <button id="vaciar-carrito" className="btn  btn-danger" onClick={handleVaciarCarrito} disabled={carrito.length === 0} >Vaciar carrito</button>
                                    <button id="procesar-pedido" className="btn btn-success" onClick={handleComprar} >Procesar compra</button>
                            </div>
                        </ul>
                    </div>
                </li>
              </ul>
            </div> 
        </nav> 
      </div> 
    </header>
    )
}

export default Navbar