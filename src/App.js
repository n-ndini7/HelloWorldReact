import './App.css';
import logo from './assets/logo3.png';

import React from "react"
class App extends React.Component{

     //UC7
     url = "https://www.bridgelabz.com"
     constructor(){
        super();
        this.state = {
          title: ""
        };
      }

      onClick = ($event) => {
        window.open(this.url, "_blank","noreferrer");
      }    
    
      onNameChange = (event) => {
        const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if(nameRegex.test(event.target.value)){
          this.setState({title: event.target.value});
          this.setState({nameError: ""});
        }else{
          this.setState({nameError: "Entered Name is Invalid!!"});
        }
      }
    
      render (){
        return (
          <div className="app-main">
          <div className="main">
            <div>
              <h1>Hello {this.state.title}, Welcome to BridgeLabz!</h1>
              <img src = {logo} onClick = {this.onClick} alt = "logo"/>
            </div>
            <div className="text-box">
            <input onChange = {this.onNameChange}/>
            <span className = "error-output">{this.state.nameError}</span>
            </div>
            <p>
              <b>Available Courses :</b>
            </p>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>Html</li>
            </ul>
            <p>
              To know more about us visit:
              <a href = "https://www.bridgelabz.com" target = "_blank">Bridgelabz</a>
            </p>
            <p>
              <b>
                <i>Employeebility to All</i>
              </b>
            </p>
          </div>
        </div>
        );
      }
}

export default App;
  