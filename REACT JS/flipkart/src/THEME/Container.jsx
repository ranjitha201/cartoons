import React, { useContext, useState } from 'react'
import  { ThemeContext } from './ThemeContext'

const Container = () => {
    let {dark,light}=useContext(ThemeContext)

    let [theme,setTheme]=useState("false")

    let handleTheme=()=>{

        setTheme(!theme)
        let max=document.getElementsByClassName("max")
        console.log(max);
        
        

        if(theme){
            max[0].style.backgroundColor=dark.backgroundColor
            max[1].style.backgroundColor=dark.backgroundColor
        }
        else{
            max[0].style.backgroundColor=light.backgroundColor
            max[1].style.backgroundColor=light.backgroundColor
        }
        

    }
  return (
    <div>
        <div className='max'>
   
        </div>
        <div className='max'>
   
        </div>
        <button onClick={handleTheme}>{theme ? "dark":"light"}</button>
    </div>
  )
}

export default Container