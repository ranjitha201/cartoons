import React, { Component } from "react"
import Logo from "../NAVBAR/Logo"
import Cart from "../NAVBAR/Cart"
import Home from "../NAVBAR/Home"



export default  class Nav extends Component{
    render(){
        return(
            <div id="nav">
                <Logo></Logo>
                <Cart></Cart>
                <Home></Home>
            </div>
        )
    }
}