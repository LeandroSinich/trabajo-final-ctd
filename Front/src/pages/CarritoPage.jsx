import React, { useContext, useEffect } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {

  const { carritoLista, aumentarCantidad, disminuirCantidad, eliminarArticulo } = useContext(CarritoContext)

  const calcularTotal = () => {
    return carritoLista.reduce((total, item) => total + item.costo * item.cantidad, 0)
  }

const handleAlquilar = ()=>{
  alert('Tu pedido ha sido realizado')
}

  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Fecha inicio</th>
            <th scope="col">Cant. dias</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carritoLista.map(item => (
            <tr key={item.id}>
              <td >{item.nombre}</td>
              <td>{item.costo}</td>
              <td></td>
              <td>
                <button
                  className='btn btn-ouline-primary'
                  type='button'
                  onClick={() => disminuirCantidad(item.id)}
                >-</button>
                <button className='btn btn-primary'>{item.cantidad}</button>
                <button
                  className='btn btn-ouline-primary'
                  type='button'
                  onClick={() => aumentarCantidad(item.id)}
                >+</button>
              </td>


              <td>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => eliminarArticulo(item.id)}
                >X</button>
              </td>
            </tr>
          ))}
          <tr>
            <td><b>TOTAL</b></td>
            <td><b>${calcularTotal()}</b></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button 
      className='btn btn-primary'
      type='button'
      onClick={handleAlquilar}
      disabled={carritoLista<1}
      >Alquilar</button>
    </div>
  )
}
