import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import {Link} from 'react-router-dom'

export default class EditForm extends Component {
    state = {
        tour: {}
      }
    
      componentDidMount(){
        let tourId = this.props.match.params.tourId
        axios.get(`${config.API_URL}/api/tourDetail/${tourId}`)
          .then((response) => {
            console.log(response.data)
            this.setState({
              tour: response.data.detail
            })
          })
          .catch(() => {
            console.log('Detail fecth failed')
          })
      }
    
      handleNameChange = (event) => {
        let text = event.target.value
        console.log(text)
        let clonedTour = JSON.parse(JSON.stringify(this.state.tour))
        clonedTour.name = text
    
        this.setState({
          tour: clonedTour
        })
      }
    
      handleDescChange = (event) => {
        let text = event.target.value
        let clonedTour = JSON.parse(JSON.stringify(this.state.tour))
        clonedTour.description = text
    
        this.setState({
          tour: clonedTour
        })
      }
    render() {
        return (
            <div className="editTour">
    
                
                <input type="text" onChange={this.handleNameChange} value={this.state.tour.name}/>
                <input type="text" onChange={this.handleDescChange} value={this.state.tour.description}/>
                
                <Link to="/profile">  <button onClick={ () => { this.props.onEdit(this.state.tour) } }  >Submit</button></Link>
               
            </div>
        )
    }
}
