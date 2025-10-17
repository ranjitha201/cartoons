import React, { createContext } from 'react'

export let ThemeContext=createContext()

let Theme={
    dark:{
        backgroundColor:"#2a052fff"
    },
    light:{
         backgroundColor:"#c82386ff"
    }
}
export default Theme