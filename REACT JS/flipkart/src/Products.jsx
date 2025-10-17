// import React, { Component } from 'react'

// export default class Products extends Component {
//   render(props) {
//     console.log(this.props);
    
//     return (
//       <div>
//         <h1>{this.props.data2}</h1>
//       </div>
//     )
//   }
// }



// import React, { Component } from 'react'

// export default class Products extends Component {
//   render(props) {
//     console.log(this.props);
    
//     return (
//       <div>
//         {
//            <h1>{this.props.data1}</h1>
              
          
//         }
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class Products extends Component {
//   render(props) {
//    console.log( this.props);
   
//     return (
//       <div>
//         {
//         this.props.data1.map((max)=>{
//           console.log(max);

//           return <div>
//             <h1>{max}</h1>
          
//           </div>
          
//         })
//       }
//       </div>
//     )
//   }
// }

// import React, { Component, Fragment } from 'react'

// export default class Products extends Component {
//   render(props) {
//     console.log(this.props);
    
//     return (
//       <div>
//          {
//           this.props.data1.products.map((max)=>{
//             console.log(max);
//             return <Fragment>
//               <img src={max.images[0]} alt="" />
//             </Fragment>
            
//           })
//          }
//       </div>
      
//     )
    
//   }
// }


// import React, { Component, Fragment } from 'react'

// export default class Products extends Component {
//   render(props) {
//     console.log(this.props);
    
//     return (
//       <div>
//         {this.props.json.products.map((max)=>{
//           console.log(max);
//           return  <Fragment>
//             <img src={max.images[0]} alt="" />
//           </Fragment>
          
//         })
//         }
//       </div>
//     )
//   }
// }


// import React from 'react'

// const Products = (props) => {
//   console.log(props);
  
//   return (
//     <div>
//       <h1>{props.data1.name}</h1>
//     </div>
//   )
// }

// export default Products

import React, { Fragment } from 'react'

const Products = (props) => {
  console.log(props.data1);
  
  return (
    <div>
     {
     props.data1.map((max)=>{
          console.log(max);
          return <Fragment>
            <h1>{max}</h1>
          </Fragment>

      })
    }
    </div>
  )
}

export default Products