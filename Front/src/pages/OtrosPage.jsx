import React, { useContext, useEffect, useState } from 'react'
import { ArticulosContext } from '../context/ArticulosContext'
import { Card } from '../componentes/Card'

export const OtrosPage = () => {

  const { artState } = useContext(ArticulosContext)
  const [otros, setOtros] = useState([])

  useEffect(() => {
    setOtros(artState.filter(art => art.categoria.id === 4))
  }, [])


  return (

    <div className='container'>
      {otros.map(art => (
        <Card key={art.id}
          articulo={art}
        ></Card>
      ))}
    </div>
  )
}