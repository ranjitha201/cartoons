// import React, { Component} from "react";
// //import Nav from "./TASK/Nav"
// import "./App.css"
// import Nav from "./FBC/Nav";

// export default class App extends Component{
//     render(){
//         return(
//            <div>
//       <Nav></Nav>
               
            
            
//              </div>
//         )
//     }
// }




//**************************************************************************************************************************** */

// import React, { Component } from 'react'
// import Cart from './Cart'

// export default class App extends Component {
//     constructor(){
//         super()
//         this.name="Ranjitha"
//     }
//   render() {
//     return (
//       <div>
//         <Cart data={this.name}></Cart>
//       </div>
//     )
//   }
// }

//**************************************************************************************************************************** */

// import React, { Component } from 'react'
// import Cart from './Cart'

// export default class App extends Component {
//     constructor(){
//         super()
//         this.data="ranjithaaaa"
//     }
//   render() {
//     return (
//       <div>
//         <Cart data1={this.data}></Cart>
//       </div>
//     )
//   }
// }



//**************************************************************************************************************************** */


// import React, { Component } from 'react'
// import Cart from './Cart'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Cart data={{name:"ranjitha",age:21,place:"sandur"}}></Cart>
//       </div>
//     )
//   }
// }

//**************************************************************************************************************************** */

// import React, { Component } from 'react'
// import Cart from './Cart'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//       <Cart data={["banglore","mysore","sakleshpur"]}></Cart>
//       </div>
//     )
//   }
// }
//**************************************************************************************************************************** */

// import React, { Component } from 'react'
// import Cart from './Cart'
// import JSON from './data.json'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Cart data={JSON}></Cart>
//       </div>
//     )
//   }
// }
//**************************************************************************************************************************** */


// import React, { Component } from 'react'
// import Data from './Data'
// import Cart from './Cart'
// import Products from './Products'
// import JSON from './data.json'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Data comp={<Cart comp1={<Products json={JSON}></Products>}></Cart>}></Data>
//       </div>
//     )
//   }
// }

//------------------------------------------FUNCTION BASED------------------------------------------------------


// import React from 'react'
// import Cart from './Cart'
// const App = () => {
//   return (
//     <div>
//       <Cart data={"dingaaaaa"}></Cart>
//     </div>
//   )
// }

// export default App
//**************************************************************************************************************************** */



// import React from 'react'
// import Cart from './Cart'

// const App = () => {
//   return (
//     <div>
//       <Cart data={{name:"ranjitha",age:21,place:"sandur"}}></Cart>
//     </div>
//   )
// }3

// export default App
//**************************************************************************************************************************** */


// import React from 'react'
// import Cart from './Cart'

// const App = () => {
//   return (
//     <div>
//       <Cart data={["banglore","mysore","sakleshpur"]}></Cart>
//     </div>
//   )
// }

// export default App

//************************************STATES***************************************************************/

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={
//       name:"ranjuuu"
//     }
//   }
//   render() {
//     return (
//       <div>{this.state.name}</div>
//     )
//   }
// }

/************************************************************************************************** */
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       name:"javascript"
//     }
//   }
//    handleChange=()=>{

//     this.setState({name:"reactJs"})

//    }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <button onClick={this.handleChange}>Click</button>
//       </div>
//     )
//   }
// }
//************************************************************************************************************************** */

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }
 
  
//    handleIncrement=()=>{
//     this.setState({count:this.state.count+1})
//    }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleIncrement}>increment</button>
//       </div>
//     )
//   }
// }

//******************************************************************************************************** */

// import React, { Component } from 'react'
// import "./App.css"

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }
//   handleIncrement=()=>{
//    this.setState({count:this.state.count+1})
//   }
  
//   handleDecrement=()=>{
//     this.setState({count:this.state.count-1})

//   }
//   getBackgroundColor=()=>{
//     this.state.count
//     const count=this.state.count;
//     if(count>=0&& count<=5){
//       return 'red'
//     }
//     else if(count>5 && count<=10){
//       return 'yellow'

//     }
//     else if(count>10 && count<=15){
//       return 'red'
//     }
//     else if(count>15 && count<=20){
//       return 'yellow'
//     }
//     else{
//       return 'white'
//     }
//   }


//   render()
//    { 
//     return (
//       <div style={{backgroundColor:this.getBackgroundColor(),minHeight:"100vh",padding:"20px"}}>
//         <h1>{this.state.count}</h1>
//         <button   onClick={this.handleIncrement} >Increment</button>
//         <button   onClick={this.handleDecrement}>Decrement</button>
//       </div>
//     )
//   }
// }

//************************************************************************************************ */

// import React, { Component } from 'react'
// import OFF from "./IMAGES/e0fd25f9127a9a109a0648c83ee61643.jpg"
// import ON from "./IMAGES/images.jpg"

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       bulb:OFF
//     }
//   }
//   handlebulb=()=>{
//     this.setState({bulb:this.state.bulb===OFF ? ON: OFF});
//   }
//   render() {
//     return (
//       <div>
//       <img src={this.state.bulb} alt="" />
//       <button onClick={this.handlebulb}>on/off</button>
//       </div>
    
      
//     )
//   }
// }


/************************************************************************************** */

// import React, { Component } from 'react'
// import VIDEO from "./VIDEOS/Usire Usire _ Rajesh Krishnan _ Huchcha _ Kannada Video Song _ Kiccha Sudeep _ Rajesh Ramanath.mp4"


// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       play:true
//     }
//   }
//   handleVdo=()=>{
//     this.setState({play:!this.state.play})
//     this.max=document.getElementById("max")
//     if(this.state.play==true){
//     this.max.play()
//   }else{
//   this.max.pause()
//   }
// }
//   render() {
//     return (
//       <div>
//       <video id='max' src={VIDEO}></video>
//       <button onClick={this.handleVdo}>play/pause</button>
//       </div>
//     )
//   }
// }

//*********************************************FUNCTION BASED STATES***************************************** */

// import React, { useState } from 'react'

// const App = () => {
//     let [state,setState]=useState("javascript")

//     let handleChange=()=>{
//         setState("reactjs")
//     }
//   return (
//     <div>
//         <h1>{state}</h1>
//         <button onClick={handleChange}>click</button>
//     </div>
//   )
// }

// export default App

//**************************************************************************************************************************** */


// import React, { useState } from 'react'
// import VIDEO from "./VIDEOS/Usire Usire _ Rajesh Krishnan _ Huchcha _ Kannada Video Song _ Kiccha Sudeep _ Rajesh Ramanath.mp4"

// const App = () => {
//     let [play,setPlay]=useState(true)

//     let handlePlay=()=>{
//         setPlay(!play)

//         let vid=document.getElementById("vid")
//         if(play==true){
//             vid.play()
//         }
//         else{
//             vid.pause()
//         }
//     }
//   return (
//     <div>
//         <video  id='vid' src={VIDEO}></video>
//     <button onClick={handlePlay}>{play ? "PLAY":"PAUSE"}</button>
//     </div>
//   )
// }

// export default App

//*************************************************************************************************************** */

// import React, { useState } from 'react'
// import ON from "./IMAGES/images.jpg"
// import OFF from "./IMAGES/off.jpg"

// const App = () => {
//     let [on,setOn]=useState(true)

//     let handleChange=()=>{
//         setOn(!on)  
//     }
//   return (
//     <div>
//         <img  id='img'src={on ? OFF:ON} alt="" />
//         <button onClick={handleChange}>{ on ? "OFF" : "ON"}</button>
//     </div>
//   )
// }

// export default App
//**************************************************************************************************************** */

// import React, { useState } from 'react'
// import VIDEO from "./video.json"
// import Container from "./youtube/Container"


// const App = () => {
//   let[state,setState]=useState(VIDEO)
//   let[vid,setVid]=useState(state[0])
//   let handlePlay=(max)=>{
//     setVid(max.videoUrl)

//   }
//   return (
//     <div>
//   <Container fun={handlePlay} state={state} vid={vid}></Container>
//     </div>
//   )
// }

// export default App
//************************************************************************************************************************ */




//**************************************************LIFE CYCLE METHODS *********************************************** */


// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }
//   handleChange=()=>{
//     this.setState({count:this.state.count+1})
//   }
// //----------------------------componentdidmount------------------------------------------
//   // componentDidMount(){
//   //   document.title=`iam mounting phase ${this.state.count}`
//   // }
// //------------------------componentdidupdate--------------------------------------------
//   // componentDidUpdate(){
//   //   document.title=`iam mounting phase ${this.state.count}`
//   // }
// //------------------------componentwillunmount-----------------------------------------

// // componentWillUnmount(){
// //   alert("hiiiii iam dead")
// // }


//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleChange}>CLICK</button>
//       </div>
//     )
//   }
// }



//***************************************EXAMPLE FOR COMPONENT WILL UNMOUNT****************************************************************************** */

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       delete:false
//     }
//   }


//   render() {
//     return (
//       <div>
//         <button onClick={()=>{this.setState({delete:true})}}>DELETE</button>
//         {
//           this.state.delete ?null:<User></User>
//         }
//       </div>
//     )
//   }
// }


// class User extends React.Component{

//   componentWillUnmount(){
//     alert("do you want to delete permanently")
//   }
//   render(){
//     return(
//       <div>
//         <h1>USERNAME:Ranjitha</h1>
//         <h1>PASSWORD:ranju</h1>
//       </div>
//     )
//   }
// }


/////////////***********************************HOC*********************************************************************** */

// import React from 'react'
// import Cart from './HOC/Cart'

// const App = () => {
//   return (
//     <div>
//         <Cart></Cart>
//     </div>
//   )
// }

// export default App



/*******************************************************CONTEXTAPI****************************************************************/
// import React from 'react'
// import UserContext from './CONTEXT/ContextApi'
// import Cart from './CONTEXT/Cart'
// import Product from './CONTEXT/Product'

// const App = () => {
//   return (
//     <div>
//       <UserContext>
//         <Cart>

//         </Cart>
//         <Product></Product>
//       </UserContext>
//     </div>
//   )
// }

// export default App


/*************************************TOGGLE EXAMPLE *********************************************************************/

// import React from 'react'
// import Theme, { ThemeContext } from './THEME/ThemeContext'
// import Container from './THEME/Container'


// const App = () => {
//   return (
//     <div>
//      <ThemeContext.Provider value={Theme}>
//      <Container></Container>
//      </ThemeContext.Provider>
//     </div>
//   )
// }

// export default App


/*****************************WITHOUT JS DOM METHODS WE CAN USE REFS FOR TARGETTING ELEMENTS******************************************************************************** */


// import React, { Component, createRef } from 'react'

// export default class App extends Component {
//     constructor(){
//         super()

//         this.state={
//             name:" "
//         }
//     this.txtref=createRef()
         
//     }
   
//     handleChange=()=>{
//         this.setState({name:this.txtref.current.value})
//     }
    
//   render() {
//     return (
//       <div>
//         <input ref={this.txtref} type="text" name="" />
//         <button onClick={this.handleChange}>CLICK</button>
//         <h1>{this.state.name}</h1>
//       </div>
//     )
//   }
// }

/***************************************************************************************************************************** */

// import React, { useRef, useState } from 'react'

// const App = () => {
//     let[state,setState]=useState("")

//     let txtref=useRef()
//     let handleChange=()=>{
//         setState(txtref.current.value)
//     }
//   return (
//     <div>
//         <input  ref={txtref} type="text" name="" id="" />
//         <button onClick={handleChange}>Click</button> 
//         <h1>{state}</h1>
//     </div>
//   )
// }

// export default App



/***********************************************PRACTICE**************************************************************************** */


// import React, { useRef, useState } from 'react'
// import "./App.css"
// import VIDEO from "./VIDEOS/Usire Usire _ Rajesh Krishnan _ Huchcha _ Kannada Video Song _ Kiccha Sudeep _ Rajesh Ramanath.mp4"

// const App = () => {
//     let[play,setPlay]=useState(true)
//       let txtref=useRef()
//     let handlePlay=()=>{
      
//         setPlay(txtref.current.value)

       
//          if(play==true){
//             txtref.current.play()
//         }         
//          else{
//              txtref.current.pause()
//        }
//     }
    
    
//   return (
//     <div>
//         <video  id="max" ref={txtref} src={VIDEO}> </video>
//         <button onClick={handlePlay}>{play ? "PLAY":"PAUSE"}</button>
//     </div>
//   )
// }

// export default App

/*********************************************PRACTICE*********************************************************************** */
// import React, { useRef, useState } from 'react'
// import ON from "./IMAGES/images.jpg"
// import OFF from "./IMAGES/off.jpg"

// const App = () => {
//   let [state,setState]=useState(true)


// let handleChange=()=>{

//   setState(!state)

// }
//   return (
//     <div>
//       <img src={state ? OFF:ON}  alt="" />
//        <button onClick={handleChange}>{ON ? "ON":"OFF"}</button>
//     </div>
//   )
// }

// export default App

/********************************************************************************************************************* */


// import React, { useState } from 'react'

// const App = () => {
//   let[text,setText]=useState("hellloooo")


//   let handleText=()=>{
//    setText(prev => prev ==="hellloooo" ? "goodbyeeee":"hellloooo")
//   }
//   return (
//     <div>
//       <button onClick={handleText}>CLICK</button>
//       <h1>{text}</h1>
//     </div>
//   )
// }

// export default App

///********************************************************************************************************************** */

// import React, { useState } from 'react'

// const App = () => {
//   let[state,setState]=useState({
//     count:0
//   });
//   let handleIncrement=()=>{
//    setState({count:state.count+1})
//   }
//   let handleDecrement=()=>{
//  setState({count:state.count-1})
//   }
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={handleIncrement}>INCREMENT</button>
//       <button onClick={handleDecrement}>DECREMENT</button>
      
//     </div>
//   )
// }

// export default App
//************************************************************************************************************************** */


// import React, { useState } from 'react'

// const App = () => {
//   let[state,setState]=useState({
//     count:0
// })
//   let handleIncrement=()=>{
//      setState({count:state.count+1})
//   }
//   let handleDecrement=()=>{
//     setState({count:state.count-1})

//   }
//    let getBackgroundColor=()=>{
//     state.count
//     const count=state.count;

//     if(count>=0 && count<=5){
//       return 'red'
//     }
//     else if(count>=5 && count<=10){
//       return 'yellow'
//     }
//     else if(count>10 && count<=15){
//       return 'red'
//     }
//     else if(count>15 && count<=20){
//       return 'yellow'
//     }
//     else{
//       return 'white'
//     }
//   }
//   return (
//     <div>
//     <div style={{backgroundColor:getBackgroundColor()}}>
//       <h1>{state.count}</h1>
//       <button onClick={handleIncrement}>INCREMENT</button>
//       <button onClick={handleDecrement}>DECREMENT</button>
//     </div>
//     </div>
//   )
// }

// export default App
/**********************************************/
// import React, { useRef, useState } from 'react'

// const App = () => {
//   let[state,setState]=useState({
//     count:0
//   })
  
//   let handleChange=()=>{
//   setState({count:state.count+1})
//   }
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button  onClick={handleChange}>click</button>
//     </div>
//   )
// }

// export default App

/**************************************************************** */
// import React, { useState } from 'react'

// const App = () => {
//   let[state,setState]=useState("")

//   let handleChange=()=>{
//     setState(prev=>prev ==="helloooo babes"? " ":"helloooo babes")
//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={handleChange}>ON</button>
     
//     </div>
//   )
// }

// export default App


/************************************************************************** */
// import React, { useRef, useState } from 'react'
// import VIDEO from "./VIDEOS/Usire Usire _ Rajesh Krishnan _ Huchcha _ Kannada Video Song _ Kiccha Sudeep _ Rajesh Ramanath.mp4"

// const App = () => {
//   let[play,setPlay]=useState(true)
 
//   let vdo=useRef()
//   let handlePlay=()=>{
//     setPlay(!play)
//    if(play==true){
//     vdo.current.play()
//    }
//   else{
//        vdo.current.pause()
//   }
//   }
//   return (
//     <div>
//       <video ref={vdo}src={VIDEO}></video>
//       <button onClick={handlePlay}>{play ? "PLAY":"PAUSE"}</button>
//     </div>
//   )
// }

// export default App


/*******************************************ROUTER*********************************************************************** */
// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './ROUTER/Home'
// import Login from './ROUTER/Login'
// import Cart from './ROUTER/Cart'
// import Dress from './ROUTER/Dress'



// let router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home></Home>,
//     children:[
//       {
//         path:"/login",
//         element:<Login></Login>
//       },{
//         path:"/cart",
//         element:<Cart></Cart>,
//         children:[{
//           path:"/cart/dress",
//           element:<Dress></Dress>
//         }]
//       }
//     ]
//   }
// ])

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }

// export default App

/****************************************ROUTER TASK********************************************** */
import React from 'react'
import Signup from './ROUTERP/Signup'
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './ROUTERP/Login'
import Home from './ROUTERP/Home'
import JSON from "./data.json"
 

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
    element: <Home data={JSON} />,
  },
]);




const App = () => {
  return (
    <div>
     
    <RouterProvider router={router}></RouterProvider>
    </div>
  )
}



export default App







/*************************************************FORM HANDLING********************************************************** */
// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Login from './FORMHANDLING/Login'
// import Home from './ROUTERP/Home'
// import Data from './FORMHANDLING/Data'



// let router = createBrowserRouter([
//   {
//      path: "/",
//     element: <Home></Home>,
//     children:[
//     {
//       path:"/login",
//       element:<Login></Login>
//     },
//     {
//       path:"/data",
//       element:<Data></Data>
//     }
//     ]
//  }])

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }

// export default App