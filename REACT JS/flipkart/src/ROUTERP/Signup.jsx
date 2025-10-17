import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <center>
            <h1 className="max">welcome to Signup page</h1>
            <div id="max">
        <table >
             <tr>
               <td> <label htmlFor="">name:</label>
                <input type="text" placeholder="enter your name" name="" id="" />
                </td>
            </tr>
            <tr>
               <td> <label htmlFor="">mail:</label>
                <input type="text" placeholder="enter your mail" name="" id="" />
                </td>
            </tr>
            <tr>
                <td>
                     <label htmlFor="">password</label>
                   <input type="password"  placeholder="enter your password" name="" id="" />
                </td>
            </tr>
            <tr>
                <Link to="login" target="_blank">
                    <button type="button">Signup</button>
                  </Link>
            </tr>
        </table>
        </div>
        <Outlet></Outlet>
        </center>

        
    </div>
        
      

   
  )
}

export default Signup



