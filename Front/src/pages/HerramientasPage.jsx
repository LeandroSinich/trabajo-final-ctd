import React, { useContext, useEffect, useState } from 'react'
import { ArticulosContext } from '../context/ArticulosContext'
import { Card } from '../componentes/Card'

export const HerramientasPage = () => {

  const { artState } = useContext(ArticulosContext)
  const [herramientas, setHerramientas] = useState([])

  useEffect(() => {
    setHerramientas(artState.filter(art => art.categoria.id === 1))
  }, [])


  return (

    <div className='container'>
      {herramientas.map(art => (
        <Card key={art.id}
          articulo={art}
        ></Card>
      ))}
    </div>
  )
}
