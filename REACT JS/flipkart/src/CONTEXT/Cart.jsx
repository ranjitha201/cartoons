import React from 'react'
import { ContextApi } from './ContextApi'

const Cart = () => {
  return (
    <div>
        <ContextApi.Consumer>
            {
            (lio)=>{
                console.log(lio);
            } 
            }
        </ContextApi.Consumer>
    </div>
  )
}

export default Cart