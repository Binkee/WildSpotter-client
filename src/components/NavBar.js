import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'




export default class NavBar extends Component {
    

    render() {
        return (
            <div className="navbar">
                <img className="wolfnav" src="wolf.png" alt="wolf" ></img>
                <div className="btn-group">
  <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Search for Animals
  </button>
  <div  className="dropdown-menu">
    <a  className="dropdown-item">Wolf</a>
    <a  className="dropdown-item">Bear</a>
    <a  className="dropdown-item">Bison</a>
    <a  className="dropdown-item">Lynx</a>
    <a  className="dropdown-item">Moose</a>
    
  </div>
</div>
                <button onClick={this.props.logout} className="btn btn-primary">Log out</button>
            </div>
        )
    }
}
