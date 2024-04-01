import React, { useState } from 'react'

export const useLocalStorage = (key, initialState) => {


    const[storedValue, setStoredValue]=useState(()=>{

        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialState
        } catch (error) {
            console.error('Error retrieving data from localStorage:', error);
            return initialState 
        }
    })

    const setValue = (value) =>{
        try {
            
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error('Error storing data in localStorage:', error)
        }
    }

  return {storedValue, setValue}
}

