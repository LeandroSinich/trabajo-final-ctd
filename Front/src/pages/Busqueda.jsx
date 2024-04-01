import React, { useContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { ArticulosContext } from '../context/ArticulosContext'
import { Card } from '../componentes/Card'
import { createContext } from 'react'
import { BusquedaContext } from '../context/BusquedaContext'

export const Busqueda = () => {
    const {storedValue}=useLocalStorage('busqueda','')

    const { artState } = useContext(ArticulosContext)
    const [resultado, setResultado] = useState([])
    const {busquedaLista}=useContext(BusquedaContext)
  
    useEffect(() => {
       // console.log(busquedaLista)
      setResultado(artState.filter(art => art.nombre.toUpperCase().includes(busquedaLista[busquedaLista.length -1].toUpperCase())))
    }, [busquedaLista])
    
  return (
    <>
    <h3>Se encontró {resultado.length} resultado/s para tu búsqueda:</h3>
    <div className='container'>
      {resultado && resultado.map(art => (
        <Card key={art.id}
          articulo={art}
        ></Card>
      ))}
    </div>
    </>
  )
}
