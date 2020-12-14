import './App.css';

import React from "react"
class App extends React.Component{

     //UC2
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
          </div>
        );
      }
    }

export default App;
  