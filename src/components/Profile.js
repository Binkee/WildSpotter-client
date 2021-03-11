import React, { Component } from 'react'
import NavBar from './NavBar'
import {Redirect} from 'react-router-dom'
import MyMap from './AddMap'
import {Link} from 'react-router-dom'
import AddAnimal from './AddAnimal'
import News from './News'
import axios from 'axios'
import config from '../config'
import ProfileMap from './ProfileMap'

export default class Profile extends Component {
state = { 
    allAnimals: [],
    allTours: []
}
    componentDidMount(){
        axios.get(`${config.API_URL}/api/animals`,  {withCredentials: true})
            .then((response)=>{
                console.log(response.data)
                this.setState({
                    allAnimals: response.data
                })
            })
            .catch(()=>{
            })
            axios.get(`${config.API_URL}/api/tours`,  {withCredentials: true})
            .then((response)=>{
                console.log("response.data")
                this.setState({
                    allTours: response.data
                })
            })
            .catch(()=>{
            })
    }

    

    render() {
        if(!this.props.loggedInUser){
            console.log('Redirecting from profile')
            return <Redirect to={"/"}/>
        }
        return (
            <div className="profile">
                
               
                <h2>Welcome: {this.props.loggedInUser.username}</h2>
                
                <div>
                <News allAnimals={this.state.allAnimals} allTours={this.state.allTours}/>

               <ProfileMap allAnimals={this.state.allAnimals} searchAnimal={this.props.searchAnimal}/> 
                <div className='buttons-profile'>
                <Link to="/tour">
                        <div className="btn btn-primary mySignUpBtn">Add Tour</div>
                </Link>
               
                <Link to="/add">
                        <div className="btn btn-primary mySignUpBtn">Add Animal</div>
                </Link>
                </div>

                </div>
            </div>
        )
    }
}
