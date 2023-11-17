import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Consolas from './pages/Consolas.jsx'
import Contacto from './pages/Contacto.jsx'
import Carrito from './pages/Carrito.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'
import Navbar from './components/NavbarInicio.jsx'
import NavbarSecundario from './components/NavbarSecundario.jsx'
import Footer from './components/Footer.jsx'
import { ProductosProvider } from './contexts/ProductosContext.jsx'
import Alta from './pages/Alta.jsx'
import { CarritoProvider } from './contexts/CarritoContext.jsx'



/* Estilos */
import './index.css'
import * as bootstrap from 'bootstrap'










ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ProductosProvider>
      
      <CarritoProvider>

        <BrowserRouter>
        
          <main className="container-fluid">
            <Routes>
              <Route path='/' element={
              <>
                <Navbar />
                <Inicio />
              </>
              } />
              <Route path='/consolas' element={
              <>
                <NavbarSecundario />
                <Consolas />
              </>
              } />
              <Route path='/nosotros' element={
              <>
                <NavbarSecundario />
                <Nosotros />
              </>
              } />
              <Route path='/contacto' element={
              <>
                <NavbarSecundario />
                <Contacto />
              </>
              } />
              <Route path='/alta' element={
                <>
                  <NavbarSecundario />
                  <Alta />
                </>
                } />
              <Route path='/carrito' element={
                <>
                  <NavbarSecundario />
                  <Carrito />
                </>
                } />
              <Route path='*' element={
              <>
                <NavbarSecundario />
                <NoEncontrada />
              </>
              } />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </CarritoProvider>
    </ProductosProvider>
  
  
)
