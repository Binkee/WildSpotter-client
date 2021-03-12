import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Tour extends Component {
    render() {
        return (
            <div className="tour">
               
            <h4>Hey Wild Spotter</h4>
            <h6>Add here the hike description where you've spotted animals</h6>
            <form onSubmit={this.props.addTour}>
                <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label"> Tour name </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label"> Description </label>
            <input
              name="description"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

        
          
          <button type="submit" className="btn btn-primary mySignUpBtn"> Submit </button>
          
          </form>
          <Link to="/profile"><img className="xSize" src="x-circle.svg"></img></Link> 
            </div>
        )
    }
}
