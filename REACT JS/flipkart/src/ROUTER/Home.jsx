import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div>
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/login">Login page</Link>
                </li>
                <li>
                    <Link to="/Cart">Cart Page</Link>
                </li>
            </ul>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Home