import React, { Component } from "react"
import Home1 from "../TASK/Home1"
import Home2 from "../TASK/Home2"

export default  class Home extends Component{
    render(){
        return(
            <div className="lio">
                <Home1></Home1>
                <Home2></Home2>
            </div>
        )
    }
}