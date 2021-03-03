import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <img className="wolfnav" src="wolf.jpeg" alt="wolf" ></img>
                <button className="btn btn-primary">Log out</button>
            </div>
        )
    }
}
