// import React, { useState } from 'react'


// const App = () => {
//     let [state,setState]=useState(
//     {
//         name:" ",
//         mail:" ",
//         pass:" "
//     })
//       let {name,mail,pass}=state
//      let handleChange=(e)=>{
//         e.preventDefault()
//         let{name,value}=e.target

//         setState({...state,[name]:value})
//     }
  
//      let handleSubmit=async(x)=>{
//         x.preventDefault()
//         try{
//             let form={name,mail,pass}

//             let max =await axios.post("http://localhost:5000/user",form)
            
//         }catch(err){
//             console.log(err);
            
//         }
//     }
//   return (
//    <div>
//     <center>
//         <h1>welcome to register page</h1>
     
//         <form action="" onSubmit={handleSubmit} method='post'>
//                <table>
//         <tr>
//             <td><label htmlFor="">name</label>
//             <input type="text"  name='name' required  onChange={handleChange} placeholder='enter your name'/>
//             </td>
//         </tr>
//         <tr>
//             <td>
//                 <label htmlFor="">email</label>
//                <input type="email" name='mail'  onChange={handleChange} required placeholder='enter your email' />
//             </td>
//         </tr>
//         <tr>
//             <td>
//                 <label htmlFor="">password</label>
//                 <input type="password" name="pass" required onChange={handleChange}/>
//             </td>
//         </tr>
//         <tr>
//             <button onSubmit={handleSubmit}>submit</button>
//         </tr>
//            </table>
//         </form>
       
//     </center>
//     </div>
//   )
// }

// export default App



// // import React, { useRef } from 'react';

// // function InputFocus() {
// //     const inputRef = useRef(null);

// //     const handleButtonClick = () => {
// //         inputRef.current.focus();
// //     };

// //     return (
// //         <div>
// //         <input ref={inputRef} type="text" placeholder="input" />
// //         <button onClick={handleButtonClick}>Focus on Input</button>
// //         </div>
// //     );
// //     }

// // export default InputFocus;




// import React from 'react'
// import Signup from  './Signup'
// import "./App.css"
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Login from './Login'
// import Home from './Home'
// import JSON from './data.json'
 

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Signup/>,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/home",
//     element: <Home data={JSON} />,
//   },
// ]);




// const App = () => {
//   return (
//     <div>
     
//     <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }



// export default App


import React, { useState } from "react";
import Signup from "./Signup";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Cart from "./Cart";
import data from "./data.json";


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home data={data} addToCart={addToCart} cart={cart} />,
    },
    {
      path: "/cart",
      element: <Cart cart={cart} removeFromCart={removeFromCart} />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
     
    </div>
  );
};

export default App;



