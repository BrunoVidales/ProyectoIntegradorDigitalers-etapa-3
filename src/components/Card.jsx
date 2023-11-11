import React, { useContext } from 'react'
import "./Card.css" 
import CarritoContext from '../contexts/CarritoContext'


const Card = ({ producto }) => {
    const {agregarCarritoContext} = useContext(CarritoContext)

    const handleComprar = (producto) => {
        console.log('Comprando => ', producto)
        agregarCarritoContext(producto)
    }

  return (
    <>
        <div className="">
                <div className="card my-1 mx-1" style={{width: "15rem"}}>
                    <div className="consolas-img"><img src={`/img/${producto.foto}`} className="card-img-top " alt="..."></img></div>
                    <div className="card-body">
                        <h3 className="card-title fs-4">{producto.nombre}</h3>
                        <ul className="list-unstyled d-flex flex-column mb-5">
                            <li className="list-group-item">Caracteristicas</li>
                            <li className="list-group-item fw-bold">$<span className="precio">{producto.precio}</span></li>
                        </ul>
                        <button href="#" className="btn-consolas agregar-carrito" onClick={() => handleComprar(producto)}>Comprar</button>
                    </div>
                </div>
            </div>
    </>
    )
}

export default Card