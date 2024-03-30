import React, { useEffect, useState } from 'react'
import '../styles/card.css'
import { NavLink } from 'react-router-dom'
import { Button } from './Button'


export const Card = ( {articulo} ) => {

    
    return (
        <div className="tarjeta">

            <img src={articulo.imagen} alt={articulo.nombre} className="tarjeta-imagen" />
            <div className='tajeta-contenido'>
                <h3 className='tarjeta-titulo'>{articulo.nombre}</h3>
                <p className='tarjeta-descripcion'>{articulo.funcion}</p>
                <p className='tarjeta-precio'>$<b>{articulo.costo}</b>/dia</p>
                <div> 
                    <Button articulo={articulo}/>
                    <NavLink to={'/detalle/' + articulo.id}>
                        <button
                            className='boton-vermas'
                            type='button'
                        >Ver Más</button>
                    </NavLink>


                </div>
            </div>

        </div>
    )
}
