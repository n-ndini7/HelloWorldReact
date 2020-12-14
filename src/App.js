import './App.css';
import logo from './assets/logo2.png';

import React from "react"
class App extends React.Component{

     //UC3
     constructor(){
        super();
        this.state = {
          title: "Hello from Capgemini"
        };
      }
      render (){
        return (
          <div>
            <h1>{this.state.title}</h1>
            <img src = {logo} alt = "logo"/>
          </div>
        );
      }
    }

export default App;
  