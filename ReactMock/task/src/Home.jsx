// import React, { Fragment } from 'react'



// const Home = (props) => {
//     console.log(props);
    
    
//   return (
//     <div>
        
//        {props.data.products.map((max)=>{
//           console.log(max);
//           return <Fragment>
//             <img src={max.images[0]} alt="" />
//            </Fragment>
            
       
          
//         })
//          }
//    </div>
//   )
// }

// export default Home


// import React from "react";
// import { Link } from "react-router-dom";

// const Home = ({ data, addToCart, cart }) => {
//   if (!data || !data.products) {
//     return <h2>⚠️ No products available</h2>;
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <div style={{ marginBottom: "20px" }}>
//         <h2>🛒 Cart Items: {cart.length}</h2>
//         <Link to="/cart">
//           <button>Go to Cart</button>
//         </Link>
//       </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//         }}
//       >
//         {data.products.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               padding: "15px",
//               textAlign: "center",
//               boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//             }}
//           >
//             <img
//               src={product.images[0]}
//               alt={product.title}
//               style={{ width: "150px", height: "150px", objectFit: "contain" }}
//             />
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <p>
//               <b>${product.price}</b>
//             </p>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data, addToCart, cart }) => {
  if (!data || !data.products) {
    return <h2>⚠ No products available</h2>;
  }

  return (
    <>
    
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          backgroundColor: "#60fadeff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ margin: 0, color: "#087c55ff", cursor: "pointer" }}>Home</h2>

    
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <h3 style={{ margin: 0 }}>🛒 Cart Items: {cart.length}</h3>
          <Link to="/cart">
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "#8a1d6fff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Go to Cart
            </button>
          </Link>
        </div>
      </nav>

     
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <img
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1756802862_hilary_rhoda_makeup_2596x836.jpeg"
          alt="Banner"
          style={{ width: "100%", borderRadius: "10px"}}
        />
      </div>

 
      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {data.products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: "150px", height: "150px", objectFit: "contain" }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>
              <b>${product.price}</b>
            </p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
