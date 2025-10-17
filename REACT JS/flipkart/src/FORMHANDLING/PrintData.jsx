import React from 'react'
import { Link } from 'react-router-dom'

const PrintData = ({trainer,subject,id}) => {
  
  return (
    <div>

        <h1>TRAINER NAME:{trainer}</h1>
        <h1>SUBJECT:{subject}</h1>

        <li>
          <Link to={/edit/${id}}>EDIT</Link>
       
        </li>
        
    </div>
  )
}

export default PrintData

