import './App.css';
import logo from './assets/logo2.png';

import React from "react"
class App extends React.Component{

     //UC5
     url = "https://www.capgemini.com/"
     constructor(){
        super();
        this.state = {
          title: ""
        };
      }
    
      onClick = ($event) => {
        window.open(this.url, "_blank");
      }
    
      onNameChannge = (event) => {
        this.setState({title: event.target.value})
      }
    
      render (){
        return (
          <div>
          <div>
            <h1>Hello {this.state.title} from Capgemini</h1>
            <img src = {logo} onClick={this.onClick} alt = "logo"/>
          </div>
          <div className = "text-box">
          <input onChange = {this.onNameChannge}/>
        </div>
        </div>
        );
      }
}

export default App;
  