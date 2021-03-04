import React, { Component } from 'react'
import NavBar from './NavBar'
import {Redirect} from 'react-router-dom'
import MyMap from './MyMap'
import {Link} from 'react-router-dom'
import AddAnimal from './AddAnimal'

export default class Profile extends Component {

    

    render() {
        if(!this.props.loggedInUser){
            console.log('Redirecting from profile')
            return <Redirect to={"/"}/>
        }
        return (
            <div className="profile">
                
               
                <h2>Profile Page</h2>
                
                <h6>Last spotted animals</h6>
                <MyMap/>

                <Link to="/tour">
                        <div className="btn btn-primary">Add Tour</div>
                </Link>
               
                <Link to="/add">
                        <div className="btn btn-primary">Add Animal</div>
                </Link>
                
            </div>
        )
    }
}
