import React, { Component } from 'react'

export default class Tour extends Component {
    render() {
        return (
            <div className="tour">
                <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Location
            </label>
            <input
              name="location"
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              name="description"
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
            </div>
        )
    }
}
