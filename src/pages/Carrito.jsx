import { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import ItemCarrito from '../components/ItemCarrito'
import './Carrito.css'
const Carrito = () => {


  const {
    carrito, 
    cantidadArticulosCarritoContext,  
    precioTotalArticulosCarritoContext, 
    guardarCarritoContext,
    calculoDeIvaCarritoContext
  } = useContext(CarritoContext)

  return (
    <>
    
    <section className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 mb-5">
            <div className="mb-4">
              <div className="card-header row rounded-4 py-4 mb-1 bg-light text-center">
                <h3 className="mb-0 text-black">Carrito - {cantidadArticulosCarritoContext()} artículos</h3>
              </div>
  
              <div className="card-body" id="lista-compra"></div>
            </div>
              {

                carrito && carrito.map(item => (
                  <ItemCarrito key={item.id} itemProducto={item} />
                ))

              }
            <div className="col-12">
              <div className="card mb-4 rounded-4 w-100">
                <div className="card-header py-3 mb-1">
                  <h4 className="mb-0">Resumen carrito</h4>
                </div>
                <div className="card-body rounded-4">
                  <ul className="ul-carrito  list-group list-group-flush ">
                    <li className=" d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Productos
                      <span id="sub-total">${precioTotalArticulosCarritoContext().toFixed(2)}</span>
                    </li>
                    <li className=" d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Envío
                      <span>Gratis</span>
                    </li>
                    <li className=" d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      <div>
                        <strong>IVA</strong>
                      </div>
                      <span id="iva">${calculoDeIvaCarritoContext(precioTotalArticulosCarritoContext()).toFixed(2)}</span>
                    </li>
                    <li className=" d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      <div>
                        <strong>Total de la compra</strong>
                      </div>
                      <span>${(precioTotalArticulosCarritoContext() + calculoDeIvaCarritoContext(precioTotalArticulosCarritoContext())).toFixed(2)}</span>
                    </li>
                  </ul>
                  <button 
                    type="button" 
                    className="btn btn-success btn-lg btn-block mt-4"
                    onClick={guardarCarritoContext}
                  >
                      Procesar compra
                  </button>
                </div>
              </div>
            </div>
  
  
            <div className="card rounded-4 container">
              <div className="card-body tarjetas">
                <p><span>Métodos de pago aceptados</span></p>
                <img src="img/logo/amex.svg" alt="American Express" className="me-2"></img>
                <img src="img/logo/master.svg" alt="Mastercard" className="me-2"></img>
                <img src="img/logo/visa.svg" alt="Visa" className="me-2"></img>
              </div>
            </div>
  
          </div>
  
         
        </div>
      </section>

    </>
  )
}

export default Carrito