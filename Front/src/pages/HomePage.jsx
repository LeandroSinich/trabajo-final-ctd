import React, { useContext } from 'react'
import { ArticulosContext } from '../context/ArticulosContext'
import { Card } from '../componentes/Card'
import { CarritoContext } from '../context/CarritoContext'
import '../styles/HomePage.css'
import InicioSesion from '../componentes/InicioSesion'


export const HomePage = () => {

  const { artState } = useContext(ArticulosContext)
  

  

  return (
    <div className='container'>
      <InicioSesion/>
      {artState.map(art => (
        <Card key={art.id}
          articulo={art}
        ></Card>
      ))}
    </div>
  )
}
