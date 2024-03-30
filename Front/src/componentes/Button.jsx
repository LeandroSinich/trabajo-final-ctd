import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const Button = ({ articulo }) => {
    const { carritoLista, agregarArticulo, eliminarArticulo } = useContext(CarritoContext)
    

    const findCarrito = carritoLista.find((art) => art.id == articulo.id)

    const addCarrito = () => {
        agregarArticulo(articulo)
    }

    const quitarCarrito = () => {
        eliminarArticulo(articulo.id)
    }
    return (
        <>
            {findCarrito
                ?
                <button
                    type='button'
                    className='boton-quitar'
                    onClick={quitarCarrito}

                >
                    Quitar
                </button>
                :
                <button
                    type='button'
                    className='boton-agregar'
                    onClick={addCarrito}
                >
                    Agregar
                </button>
            }
        </>

    )
}
