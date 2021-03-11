import React, { Component } from 'react'
import config from '../config'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ProfileMap from './ProfileMap'
export default class tourDetail extends Component {
   
    state={
        tour: {},
        animals: []
    }
   
    componentDidMount(){
           
        let tourId = this.props.match.params.tourId
        
        axios.get(`${config.API_URL}/api/tourDetail/${tourId}`)
          .then((response) => {
            console.log(response.data)
            this.setState({ tour: response.data.detail, animals:response.data.animals })
          })
          .catch((err) => {
            console.log('Detail fecth failed -->', err)
          })
      }

    render() {
/*
        if (onClick) {
            return <Redirect to={'/profile'} />
        }
        */

        return (
            <div>
              <ProfileMap allAnimals={this.state.animals}/>
                <h4>Details</h4>
                <p>Tour: {this.state.tour.name}</p>
                <p>Description: {this.state.tour.description}</p>
              <Link to={`/tourDetail/${this.state.tour._id}/edit`}><button className="btn btn-primary">Edit</button></Link>  
                <Link to="/profile"><button onClick={() => {this.props.delete(this.state.tour._id)}} className="btn btn-primary">Delete</button></Link>
            </div>
        )
    }
}
