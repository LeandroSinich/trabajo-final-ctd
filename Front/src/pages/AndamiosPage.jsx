import React, { useContext, useEffect, useState } from 'react'
import { ArticulosContext } from '../context/ArticulosContext'
import { Card } from '../componentes/Card'

export const AndamiosPage = () => {

  const { artState } = useContext(ArticulosContext)
  const [andamios, setAndamios] = useState([])

  useEffect(() => {
    setAndamios(artState.filter(art => art.categorias_idcategorias === 2))
  }, [])


  return (

    <div className='container'>
      {andamios.map(art => (
        <Card key={art.id}
          articulo={art}
        ></Card>
      ))}
    </div>
  )
}
