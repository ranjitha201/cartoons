import React, { Fragment } from 'react'



const Home = (props) => {
    console.log(props);
    
    
  return (
    <div>
        
       {props.data.products.map((max)=>{
          console.log(max);
          return <Fragment>
            <img src={max.images[0]} alt="" />
           </Fragment>
            
       
          
        })
         }
   </div>
  )
}

export default Home

