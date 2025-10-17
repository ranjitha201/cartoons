import React from 'react'
import { Link, Outlet } from 'react-dom'

import Home from './Home'


const Login = () => {

  return (
    <div>
        
        <center>
            <h1>welcome to login page</h1>
            <div id="max">
                <table>
                    <tr>
                        <td> <label htmlFor="">mail:</label>
                <input type="text" placeholder="enter your mail" name="" id="" />
                </td>
                    </tr>
                    <tr>
                        <td>
                     <label htmlFor="">password</label>
                   <input type="password" placeholder="enter your password" name="" id="" />
                </td>
                    </tr>
                    <tr>
                        <td>
                        <Link to="/home">
                    <button type="button">Login</button>
                  </Link>
                        </td>
                    </tr>
                </table>

            </div>
            <Outlet></Outlet>
        
        </center>
    </div>
  )
}

export default Login


