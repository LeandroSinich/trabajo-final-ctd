import React, { useContext } from 'react'
import { ArticulosContext } from '../context/ArticulosContext'
import { Card } from '../componentes/Card'
import { CarritoContext } from '../context/CarritoContext'
import '../styles/HomePage.css'
import InicioSesion from '../componentes/InicioSesion'
import { useEffect } from 'react'
import { useState } from 'react'


export const HomePage = () => {

  const { artState } = useContext(ArticulosContext)
  const [articulos, setArticulos] = useState([])
  useEffect(() => {
    
    const itemsCopy = [...artState];    
    itemsCopy.sort(() => Math.random() - 0.5);    
    const selectedItems = itemsCopy.slice(0, 6);
    
    setArticulos(selectedItems);
    
  }, [artState])
  

  

  return (
    <>
    <h2 style={{margin: '20px', textAlign:'center'}}>Algunos de nuestros articulos</h2>
    <div className='container'>
      <InicioSesion/>
      
      
      {articulos.map(art => (
        <Card key={art.id}
          articulo={art}
        ></Card>
      ))}
    </div>
    </>
    
  )
}
