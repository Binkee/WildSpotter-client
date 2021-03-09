import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import {Link} from 'react-router-dom'
export default class EditForm extends Component {
    state = {
        animal: {}
      }
    
      componentDidMount(){
        let animalId = this.props.match.params.animalId
        axios.get(`${config.API_URL}/api/animalDetail/${animalId}`)
          .then((response) => {
            this.setState({
              animal: response.data
            })
          })
          .catch(() => {
            console.log('Detail fecth failed')
          })
      }
    
      handleNameChange = (event) => {
        let text = event.target.value
        console.log(text)
        let cloneAnimal = JSON.parse(JSON.stringify(this.state.animal))
        cloneAnimal.name = text
    
        this.setState({
          animal: cloneAnimal
        })
      }
    
      handleDescChange = (event) => {
        let text = event.target.value
        let cloneAnimal = JSON.parse(JSON.stringify(this.state.animal))
        cloneAnimal.description = text
    
        this.setState({
          animal: cloneAnimal
        })
      }
    render() {
        return (
            <div>
    
                
                <input type="text" onChange={this.handleNameChange} value={this.state.animal.animal}/>
                <input type="text" onChange={this.handleDescChange} value={this.state.animal.description}/>
                <p>{this.state.animal.animal}</p>
                <Link to="/profile">  <button onClick={ () => { this.props.onEdit(this.state.animal) } }  >Submit</button></Link>
               
            </div>
        )
    }
}
