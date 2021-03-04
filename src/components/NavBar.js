import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
export default class NavBar extends Component {
    
    
    


    render() {
        return (
            <div className="navbar">
                <img className="wolfnav" src="wolf.png" alt="wolf" ></img>
                <button onClick={this.props.logout} className="btn btn-primary">Log out</button>
            </div>
        )
    }
}
