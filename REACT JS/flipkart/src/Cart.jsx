// import React, { Component } from 'react'


// export default class Cart extends Component {
//   render(props) {
//     console.log(this.props);
    
//     return (
//       <div>
//    <h1>{this.props.data}</h1>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Products from './Products';

// export default class Cart extends Component {
//   render(props) {
//     console.log(this.props);
    
//     return (
//       <div>
//         <Products data2={this.props.data1}></Products>
//       </div>
//     )
    
//   }
// }

// import React, { Component } from 'react'
// import Products from './Products'

// export default class Cart extends Component {
//   render(props) {
//     console.log(this.props.data);
    
//     return (
//       <div>
//         <Products data1={this.props.data.name}></Products>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Products from './Products';

// export default class Cart extends Component {
//   render(props) {
//     console.log(this.props);
    
//     return (
//       <div>
//         <Products data1={this.props.data}></Products>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Products from './Products';

// export default class Cart extends Component {
//   render(props) {
//     console.log(this.props);
    
//     return (
//       <div>
//         <Products data1={this.props.data}></Products>
//       </div>
//     )
//   }
// }


// import React, { Component, Fragment } from 'react'

// export default class Cart extends Component {
//   render(props) {
//     console.log(this.props);
    
//     return (
//       <div>
//         {this.props.comp1}
        
//       </div>
//     )
//   }
// }
//-----------------------------------------FUNCTION BASED-----------------------------------------------
// import React from 'react'

// const Cart = (props) => {
//   console.log(props);
  
//  return (
    
//     <div>
//       <h1>{props.data}</h1>
//     </div>
//   )
// }

// export default Cart

// import React from 'react'
// import Products from './Products';

// const Cart = (props) => {
//   console.log(props);
  
//   return (
//     <div>
//       <Products data1={props.data}></Products>
//     </div>
//   )
// }

// export default Cart

import React from 'react'
import Products from './Products';

const Cart = (props) => {
  console.log(props);
  
  return (
    <div>
      <Products data1={props.data}></Products>
    </div>
  )
}

export default Cart