import React, { useReducer } from 'react'
import { LoginContext } from './LoginContext'

const initialState = { nombre: '', login: false, tipo: 0 }

const loginReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[LOGIN]-iniciar sesion':
            return { nombre: action.payload.nombre, login: true, tipo: action.payload.roles_idroles }
        case '[LOGIN]-iniciar sesion offline':
            return { nombre: 'OFF-LINE', login: false, tipo: 0 }
        case '[LOGIN]-reset':
            return { nombre: '', login: false, tipo: 0 }
        default:
            return state
    }

}
export const LoginProvider = ({ children }) => {

    const [login, dispatch] = useReducer(loginReducer, initialState)

    const iniciarSesion = (user) => {
        const action = {
            type: '[LOGIN]-iniciar sesion',
            payload: user
        }
        dispatch(action)
    }
    const iniciarSesionOffLine = () => {
        const action = {
            type: '[LOGIN]-iniciar sesion offline',
            payload: ''
        }
        dispatch(action)
    }
    const reset = () => {
        const action = {
            type: '[LOGIN]-reset',
            payload: ''
        }
        dispatch(action)
    }

    return (
        <LoginContext.Provider value={{ login, iniciarSesion, iniciarSesionOffLine, reset }}>
            {children}
        </LoginContext.Provider>
    )
}