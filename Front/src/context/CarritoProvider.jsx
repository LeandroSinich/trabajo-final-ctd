import React, { useReducer, useState } from 'react'
import { CarritoContext } from './CarritoContext'

const initialState = []
const carritoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[CARRITO]-agregarAlquiler':
            return [...state, action.payload]
        case '[CARRITO]-aumentarAlquiler':
            return state.map(item => {
                const cant = item.cantidad + 1
                if (item.id === action.payload) return { ...item, cantidad: cant }
                return item
            })
        case '[CARRITO]-disminuirAlquiler':
            return state.map(item => {
                const cant = item.cantidad - 1
                if (item.id === action.payload && item.cantidad > 1) return { ...item, cantidad: cant }
                return item
            })
        case '[CARRITO]-eliminarAlquiler':
            return state.filter(alq => alq.id !== action.payload)
        case '[CARRITO]-buscarProducto':
            return state.map(item => {
                if (item.id === action.payload) return item.agregado
                return false
            })
        default:
            return state;

    }

}

export const CarritoProvider = ({ children }) => {



    const [carritoLista, dispatch] = useReducer(carritoReducer, initialState)


    const agregarArticulo = (articulo) => {
        articulo.cantidad = 1
        articulo.agregado = true
        const action = {
            type: '[CARRITO]-agregarAlquiler',
            payload: articulo
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO]-aumentarAlquiler',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO]-disminuirAlquiler',
            payload: id
        }
        dispatch(action)
    }
    const eliminarArticulo = (id) => {
        const action = {
            type: '[CARRITO]-eliminarAlquiler',
            payload: id
        }
        dispatch(action)
    }
    



    return (
        <CarritoContext.Provider value={{ carritoLista, agregarArticulo, aumentarCantidad, disminuirCantidad, eliminarArticulo, dispatch}}>
            {children}
        </CarritoContext.Provider>
    )
}
