import React from 'react'
import Hoc from './Hoc'
import Logo from './Logo';

const Cart = (props) => {
    console.log(props);
    
  return (
    <div>
        <Logo></Logo>
    </div>
  )
}

export default Hoc(Cart)