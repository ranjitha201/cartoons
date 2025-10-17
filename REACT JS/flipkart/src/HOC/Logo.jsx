import React from 'react'
import Hoc from './Hoc'
import Product from './Product';

const Logo = (props) => {
    console.log(props);
    
  return (
    <div>
        <Product></Product>
    </div>
  )
}

export default Hoc(Logo)