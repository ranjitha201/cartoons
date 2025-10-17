import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
       <div>
        <ul>
            <li>
            <Link to="/cart/dress">dress</Link>
            </li>
            </ul>
       </div>
       <Outlet></Outlet>
    
    </div>
    
  )
}

export default Cart