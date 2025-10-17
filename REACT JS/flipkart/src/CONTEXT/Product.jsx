import React from 'react'
import { ContextApi } from './ContextApi'
import { useContext } from 'react'
const Product = () => {
    let magic=useContext(ContextApi)
    console.log(magic);
    

  return (
    <div>Product</div>
  )
}

export default Product