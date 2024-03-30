import React, { useState } from 'react'
import { ArticulosContext } from './ArticulosContext'
import { useEffect } from 'react'


export const ArticulosProvider = ({ children }) => {

    const [artState, setArtState] = useState([])

    // const verificacion = (art) => {
    //     if(user.emal !== ''){
    //         setUserState(user)
    //         return true
    //     } return false    
    // }
    const fetchArticulos = async()=>{
        const response = await fetch('http://localhost:8080/articulos')
        const data = await response.json()
        
        setArtState(data)
    }

    useEffect(() => {
      fetchArticulos()
    
    }, [])
    
    return (
        <ArticulosContext.Provider value={{ artState }}>
            {children}
        </ArticulosContext.Provider>
    )
}