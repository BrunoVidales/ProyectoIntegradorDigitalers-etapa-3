import { useContext, useEffect } from 'react'
import Card from '../components/Card'
import ProductosContext from '../contexts/ProductosContext'



const Consolas = () => {

  const {productos} = useContext(ProductosContext)

  useEffect(() => {
    document.title = 'ConsolEye - Consolas'
  })


  return (
    <>
     <h1 className="text-center my-auto">¡Explora el pasado y el presente de la diversión con nuestra increíble selección de consolas!</h1>

      <section id="playstation" className="my-5 rounded-4 cartas section-consolas bg-light p-5">
          <div className="d-flex justify-content-evenly align-items-center border rounded-4 my-5">
              <div className='d-flex justify-content-center'><img className="w-50" src="img/logo/PlayStation.svg" alt="Logo PlayStation"></img></div>
              <div className='d-flex justify-contnet-center'><img className="w-50" src="img/logo/Xbox.svg" alt="Logo PlayStation"></img></div>
              <div className='d-flex justify-content-center'><img className="w-50" src="img/logo/Nintendo.svg" alt="Logo PlayStation"></img></div>
              <div className='d-flex justify-content-center'><img className="w-50" src="img/logo/Sega.svg" alt="Logo PlayStation"></img></div>
          </div>
          <h2>¡Sumérgete en la Emoción!</h2>
          <div className='d-flex justify-content-evenly flex-wrap mt-5'>
            {
              
              productos && productos.map(producto => (
                <Card key={producto.id} producto={producto} />
              ))

            }
        </div>
      </section>
    </>
  )
}

export default Consolas