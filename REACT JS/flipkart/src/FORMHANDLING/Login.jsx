import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    let [state,setState]=useState({
        trainer:"",
        subject:"",
        gender:"",
        branch:"",
         languages:[]

    })

    let {trainer,subject,gender,branch,languages}=state



    let handleChange=(e)=>{
        e.preventDefault()
        let{name,value}=e.target

        setState({...state,[name]:value})
    }

    let handleSubmit=async(x)=>{
        x.preventDefault()
        try{
            let playload={trainer,subject,gender,branch,languages}

            let max =await axios.post("http://localhost:5000/users",playload)
            
        }catch(err){
            console.log(err);
            
        }
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">trainer:</label>
            <input type="text" name="trainer" onChange={handleChange} />


            <label htmlFor="">subject:</label>
            <input type="text" name="subject" onChange={handleChange}/>

            <label htmlFor="">GENDER:</label>
           male:<input type="radio" name="gender"  value="MALE" onChange={handleChange}/>
           Female:<input type="radio" name="gender"  value="FEMALE" onChange={handleChange}/>

            <label htmlFor="">BRANCH:</label>
            <select name="branch" onChange={handleChange}>
            <option value="">select</option>
            <option value="Banglore">Banglore</option>
            <option value="Manglore">Manglore</option>
            <option value="Mysore">Mysore</option>
            </select>

            <label htmlFor="">LANGUAGES:</label>
           Kannada: <input type="checkbox" name="languages" value="Kannada" onChange={handleChange} />
           Hindi: <input type="checkbox" name="languages" value="Hindi"  onChange={handleChange}/>
           Telugu: <input type="checkbox" name="languages" value="Telugu"  onChange={handleChange}/>
                

        <input type="submit" onSubmit={handleSubmit} value="SUBMIT" />
        </form>
    </div>
  )
}

export default Login