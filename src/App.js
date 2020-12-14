import React from "react";
import "./App.css";
import Home from "./components/home/home.jsx";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
class App extends React.Component {
    //UC8
    render(){
    return(
       <div className = "app-main">
         <Router>
           <Switch>
             <Route path = "">
               <Home/>
             </Route>
           </Switch>
         </Router>
       </div>
    );
  }
}
export default App;
