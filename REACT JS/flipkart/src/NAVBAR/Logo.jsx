import React, { Component } from "react";
import Box1 from "../TASK/Box1";
import Box2 from "../TASK/Box2";
import Box3 from "../TASK/Box3";

export default class Logo extends Component{
    render(){
        return(
            <div className="lio">
                <Box1></Box1>
                <Box2></Box2>
                <Box3></Box3>
            </div>
        )
    }
}