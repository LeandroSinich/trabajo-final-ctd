import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './componentes/Navbar'
import { HomePage } from './pages/HomePage'
import { AndamiosPage } from './pages/AndamiosPage'
import { CarritoPage } from './pages/CarritoPage'
import { HerramientasPage } from './pages/HerramientasPage'
import { MaquinasPage } from './pages/MaquinasPage'
import { OtrosPage } from './pages/OtrosPage'
import { ArticulosProvider } from './context/ArticulosProvider'
import { Detalle } from './pages/Detalle'
import { CarritoProvider } from './context/CarritoProvider'
import AppBar from './componentes/AppBar'
import { Busqueda } from './pages/Busqueda'
import { BusquedaProvider } from './context/BusquedaProvider'
import RegisterPage from './pages/UserRegisterPage'
import { LoginProvider } from './context/LoginProvider'
import { ProductRegisterPage } from './pages/ProductRegisterPage'
import { BlancoPage } from './pages/BlancoPage'
import CuentaPage from './pages/CuentaPage'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    {/* <ProductRegisterPage></ProductRegisterPage> */}
      <ArticulosProvider>
        <CarritoProvider>
          <BusquedaProvider>
            <LoginProvider>
              <AppBar></AppBar>
              <Routes>

                <Route path='/' element={<HomePage />}></Route>
                <Route path='/maquinas' element={<MaquinasPage />}></Route>
                <Route path='/herramientas' element={<HerramientasPage />}></Route>
                <Route path='/andamios' element={<AndamiosPage />}></Route>
                <Route path='/otros' element={<OtrosPage />}></Route>
                <Route path='/carrito' element={<CarritoPage />}></Route>
                <Route path='/detalle/:id' element={<Detalle />}></Route>
                <Route path='/busqueda/*' element={<Busqueda />}></Route>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/*' element={<Navigate to='/' />}></Route>
                <Route path='/blanco' element={<BlancoPage/>}></Route>
                <Route path='/cuenta' element={<CuentaPage/>}></Route>
              </Routes>
            </LoginProvider>
          </BusquedaProvider>
        </CarritoProvider>
      </ArticulosProvider>
    </>
  )
}

export default App
