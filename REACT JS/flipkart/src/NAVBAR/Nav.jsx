import React, { Component } from "react"
import Logo from "./Logo"
import Home from "./Home"
import Cart from "./Cart"

export default  class Nav extends Component{
    render(){
        return(
            <div id="nav">
                <Logo></Logo>
                <Home></Home>
                <Cart></Cart>
            </div>
        )
    }
}