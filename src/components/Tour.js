import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Tour extends Component {
    render() {
        return (
            <div className="tour">
               <Link to="/profile"><img src="x-circle.svg"></img></Link> 

            <form onSubmit={this.props.addTour}>
                <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label"> Name </label>
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

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label"> Location </label>
            <input
              name="location"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <button type="submit" className="btn btn-primary"> Submit </button>
          </form>
            </div>
        )
    }
}
