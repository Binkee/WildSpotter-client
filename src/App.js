import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends React.Component {
  render() {
    return (
      <div>
        <Home/>
        <Switch>
        
         </Switch>
      </div>
    )
  }
}
