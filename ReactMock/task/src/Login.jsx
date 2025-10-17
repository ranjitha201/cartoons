// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'




// const Login = () => {

//   return (
//     <div>
        
//         <center>
//             <h1>welcome to login page</h1>
//             <div id="max">
//                 <table>
//                     <tr>
//                         <td> <label htmlFor="">mail:</label>
//                 <input type="text" placeholder="enter your mail" name="" id="" />
//                 </td>
//                     </tr>
//                     <tr>
//                         <td>
//                      <label htmlFor="">password</label>
//                    <input type="password" placeholder="enter your password" name="" id="" />
//                 </td>
//                     </tr>
//                     <tr>
//                         <td>
//                         <Link to="/home">
//                     <button type="button">Login</button>
//                   </Link>
//                         </td>
//                     </tr>
//                 </table>

//             </div>
//             <Outlet></Outlet>
        
//         </center>
//     </div>
//   )
// }

// export default Login

import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!email || !password) {
      setError("⚠️ Please enter email and password");
      return;
    }

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
       navigate("/home");
     
    } else {
      setError("❌ Invalid credentials");
    }
  };

  return (
    <div>
      <center>
        <h1><i>Welcome to Login Page</i></h1>
        <form onSubmit={handleLogin}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Email: </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password: </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit">Login</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </center>
    </div>
  );
};

export default Login;

