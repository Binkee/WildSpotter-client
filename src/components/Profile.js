import React, { Component } from 'react'
import NavBar from './NavBar'
import {Redirect} from 'react-router-dom'
export default class Profile extends Component {

    

    render() {
       /* if(!this.props.loggedInUser){
            return <Redirect to={"/"}/>
        }*/
        return (
            <div className="profile">
                
                {
                    this.props.loggedInUser ? <NavBar /> : null
                }
                <h2>Profile Page</h2>
                <button className="btn btn-primary">Add Animal</button>
                <button className="btn btn-primary">Add Tour</button>
                <h4>Maps of last seen Animals</h4>

            </div>
        )
    }
}
