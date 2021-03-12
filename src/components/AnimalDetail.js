import React, { Component } from 'react'
import config from '../config'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class animalDetail extends Component {
   
    state={
        animal: {}
    }
   
    componentDidMount(){
           
        let animalId = this.props.match.params.animalId
        
        axios.get(`${config.API_URL}/api/animalDetail/${animalId}`)
          .then((response) => {
            console.log(response.data)
            this.setState({ animal: response.data })
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
            <div className="animalDetail">
              <h2>Wild Spotter</h2>
                 
        
                <h4>Details</h4> 
                <p>Type of animal: <br></br>{this.state.animal.animal}</p>
                <p>Description: <br></br>{this.state.animal.description}</p>
                <div>
              <Link to={`/animalDetail/${this.state.animal._id}/edit`}><button className="btn btn-primary mySignUpBtn">Edit</button></Link>  
              <Link to="/profile"><button onClick={() => {this.props.delete(this.state.animal._id)}} className="btn btn-primary mySignUpBtn">Delete</button></Link>
              
           </div> 
            <Link to="/profile"><img className="xSize" src="x-circle.svg"></img></Link>
           </div>
        )
    }
}
