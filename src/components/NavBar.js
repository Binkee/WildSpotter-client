import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'




export default class NavBar extends Component {
    

    render() {
        return (
            <div className="navbar">
                <img className="wolfnav" src="wolf.png" alt="wolf" ></img>
                <div className="btn-group">
  
  <select className="btn btn-danger dropdown-toggle form-select" onChange={this.props.search} name="animal" aria-label="Default select example">
            <option selected>Search</option>
            <option value="wolf">Wolf</option>
            <option value="bear">Bear</option>
            <option value="bison">Bison</option>
            <option value="moose">Moose</option>
            <option value="lynx">Lynx</option>
            </select>
</div>
                <button onClick={this.props.logout} className="btn btn-primary">Log out</button>
            </div>
        )
    }
}
