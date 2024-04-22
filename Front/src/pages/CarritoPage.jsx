import React, { useContext, useEffect } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { LoginContext } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom'
import DatePicker from '../componentes/DatePicker'
import { Margin } from '@mui/icons-material'
import { useState } from 'react'


export const CarritoPage = () => {

  const { carritoLista, aumentarCantidad, disminuirCantidad, eliminarArticulo } = useContext(CarritoContext)
  const {login} = useContext(LoginContext)
  const [date, setDate] = useState(false)
  
  const navigate = useNavigate()
  const calcularTotal = () => {
    return carritoLista.reduce((total, item) => total + item.costo * item.cantidad, 0)
  }

const handleAlquilar = ()=>{
  if(login.login){
    alert(login.nombre +', tu pedido ha sido realizado')
  }else {
    alert('Debes iniciar sesión para terminar de realizar tu alquiler')
    navigate('/')
  }
  
}

  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>            
            <th scope="col">Cant. dias</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carritoLista.map(item => (
            <tr key={item.id}>
              <td >{item.nombre}</td>
              <td>{item.costo}</td>
              
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
      <hr></hr>
      <form>
          <input 
          type="datetime-local"
          style={{margin:'10px', padding:'5px', borderRadius:'5px'}}
          onChange={()=>setDate(true)}
          />
      </form>
      
      <button 
      className='btn btn-primary'
      type='button'
      onClick={handleAlquilar}
      disabled={carritoLista<1 || date==false}
      >Alquilar</button>
    </div>
  )
}
