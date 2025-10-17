// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'

// const Signup = () => {
//   return (
//     <div>
//         <center>
//             <h1 className="max">welcome to Signup page</h1>
//             <div id="max">
//         <table >
//              <tr>
//                <td> <label htmlFor="">name:</label>
//                 <input type="text" placeholder="enter your name" name="" id="" />
//                 </td>
//             </tr>
//             <tr>
//                <td> <label htmlFor="">mail:</label>
//                 <input type="text" placeholder="enter your mail" name="" id="" />
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                      <label htmlFor="">password</label>
//                    <input type="password"  placeholder="enter your password" name="" id="" />
//                 </td>
//             </tr>
//             <tr>
//                 <Link to="login" target="_blank">
//                     <button type="button">Signup</button>
//                   </Link>
//             </tr>
//         </table>
//         </div>
//         <Outlet></Outlet>
//         </center>

        
//     </div>
        
      

   
//   )
// }

// export default Signup



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("⚠️ Please fill in all fields");
      return;
    }

   
    localStorage.setItem("user", JSON.stringify({ name, email, password }));

    alert("✅ Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div>
      <center>
        <h1><i>Welcome to Signup Page</i></h1>
        <form onSubmit={handleSignup}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Name: </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
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
                  <button type="submit">Signup</button>
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

export default Signup;
