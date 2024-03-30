import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Detalle.css'

import { Button } from '../componentes/Button'

export const Detalle = () => {

    const [producto, setProducto] = useState({})

    const { id } = useParams()

   
    const getArticuloById = async (id) => {
        const url = 'http://localhost:8080/articulos/'+id
        
        try {
            const res = await fetch(url)
            const data = await res.json()
            setProducto(data)
            

        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        
        getArticuloById(id)

    }, [])



    return (
        <div className='container'>
            <div><img className='img' src={producto.imagen} alt={producto.nombre} /></div>
            <div>
                <h2><b>{producto.nombre}</b></h2>
                <p>{producto.funcion}</p>
                <h4><b>Descripcion</b></h4>
                <p>{producto.descripcion}</p>
                <h5>${producto.costo}/dia</h5>
                <Button articulo={producto} />

            </div>
        </div>
    )
}
