import React, { createContext } from 'react'


 export let ContextApi=createContext()

 let UserContext=({children})=>{
  return  <ContextApi.Provider value={{name:"ranjithaaaa"}}>
        {children}
    </ContextApi.Provider>
 }
 export default UserContext