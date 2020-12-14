import './App.css';
import logo from './assets/logo2.png';

import React from "react"
class App extends React.Component{

     //UC4
     url = "https://www.capgemini.com/"
     constructor(){
       super();
       this.state = {
         title: "Hello from Capgemini"
       };
     }
   
     onClick = ($event) => {
       window.open(this.url, "_blank");
     }
     render (){
       return (
         <div>
           <h1>{this.state.title}</h1>
           <img src = {logo} onClick={this.onClick} alt = "logo"/>
         </div>
       );
     }
}

export default App;
  