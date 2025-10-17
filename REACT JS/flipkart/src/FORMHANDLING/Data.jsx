import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PrintData from './PrintData'
import {PacmanLoader} from "react-spinners"

const Data = () => {
    let [state,setState]=useState(null)


    let max=async()=>{

        let {data}=await axios.get("http://localhost:5000/users")

        setState(data)
        }

        


    useEffect(()=>{  
        
        max()

    })

  return (
    <div>
        {
state == null ? (<PacmanLoader>  </PacmanLoader>) : (state.map((magic)=>{
   
    

                return <PrintData {...magic}></PrintData>
                

            }))
        }
    </div>
  )
}

export default Data