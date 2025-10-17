

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditData = () => {
    let [state,setState]=useState({
    trainer:"",
    subject:""
  })

  let {id}=useParams()

  useEffect(()=>{

    let max=async()=>{

       let ninja=await axios.get("http://localhost:5000/users/${id}")
       console.log(ninja);
       

    }

    max()

  },[id])



  let {trainer,subject}=state




  let handleChange=(e)=>{

    let {name,value}=e.target


    setState({...state,[name]:value})
   


  }


  let darshan=useNavigate()


  let handleSubmit=async(x)=>{
    x.preventDefault()

    try{

     darshan("/data")

      let payload={trainer,subject}

      let max=await axios.put("http://localhost:5000/users/${id},payload")

    }catch(err){
      console.log(err);
      
    }

  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">TRAINER NAME:</label>
        <input type="text" name="trainer"   onChange={handleChange} />

        <label htmlFor="">SUBJECT:</label>
        <input type="text" name="subject" onChange={handleChange} />

        <input type="submit" value="SUBMIT" />
       </form>
    </div>
  )
}

export default EditData

