import React, { useReducer } from 'react'
import { BusquedaContext } from './BusquedaContext'

const initialState = []

const busquedaReducer = (state = initialState, action = {}) =>{
    switch(action.type){
        case '[BUSQUEDA]-nueva busqueda':
            return [...state, action.payload]
        default:
            return state
    }

}
export const BusquedaProvider = ({children}) => {

    const [busquedaLista, dispatch] = useReducer(busquedaReducer, initialState)

    const agregarBusqueda = (busqueda) =>{
        const action = {
            type:'[BUSQUEDA]-nueva busqueda',
            payload: busqueda
        }
        dispatch(action)
    }

  return (
    <BusquedaContext.Provider value={{busquedaLista, agregarBusqueda}}>
        {children}
    </BusquedaContext.Provider>
  )
}
