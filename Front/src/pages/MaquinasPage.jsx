import React, { useContext, useEffect, useState } from 'react'
import { ArticulosContext } from '../context/ArticulosContext'
import { Card } from '../componentes/Card'

export const MaquinasPage = () => {

  const { artState } = useContext(ArticulosContext)
  const [maquinas, setMaquinas] = useState([])

  useEffect(() => {
    setMaquinas(artState.filter(art => art.categorias_idcategorias === 3))
  }, [])


  return (

    <div className='container'>
      {maquinas.map(art => (
        <Card key={art.id}
          articulo={art}
        ></Card>
      ))}
    </div>
  )
}
