import './App.css'
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './componentes/Header'
import Home from './componentes/Home'
import ContenedorMain from './elementos/header/ContenedorMain'
import WebFont from 'webfontloader'
import Proyectos from './componentes/Proyectos'
import SobreMi from './componentes/SobreMi'
import MenuNavegacion from './componentes/MenuNavegacion'
import Footer from './componentes/Footer';
import Login from './componentes/login';
import RutaPrivada from './componentes/RutaPrivada';
import { useAuth } from './contextos/useAuth';


WebFont.load({
  google: {
    families: ['Lexend:100,200,300,400,500,600,700,800,900', 'Droid Serif']
  }
});

const App = () => {
  const location = useLocation();
  
  return (
    <>
      <ContenedorMain>
        {location.pathname !== '/login' &&
          <>
            <Header />
            <MenuNavegacion />
          </>
        }
        <Routes>
          <Route path='/login'  element={
            <Login />
          }/>
          <Route path='/'  element={
            <Home />
          }/>
          <Route path='/proyectos'  element={
            <Proyectos />
          }/>
          <Route path='/sobremi'  element={
            <SobreMi />
          }/>
          <Route path='*'  element={
            <Home />
          }/>
        </Routes>
      </ContenedorMain>
      
      {location.pathname !== '/login' &&
			  <Footer />
      }
    </>
  )
}

export default App
