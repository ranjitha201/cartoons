import React from 'react'
import Hoc from './Hoc'

const Product = (props) => {
    console.log(props);
    
  return (
    <div>Product</div>
  )
}

export default Hoc(Product)