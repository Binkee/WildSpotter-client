import React, { Component } from "react";
import NavBar from "./NavBar";
import {Link} from 'react-router-dom'
export default class AddAnimal extends Component {

    state =  {
        animal: null,
    }

   handleChange = (event) => {

    this.setState(
        {
          animal: event.target.value,
        },
        
      );
       console.log(event.target.value)
   }
    render() {
    return (
        
      <div className="addAnimal">
        <Link to="/profile"><img src="x-circle.svg"></img></Link>  

          <form onSubmit={this.props.addAnimal}></form>
        <form onSubmit={ (event) => { this.props.addAnimal(event, this.state.animal) } }>
         <div >
            <select onChange={this.handleChange} name="animal" class="form-select" aria-label="Default select example">
            <option selected>Animal</option>
            <option value="wolf">Wolf</option>
            <option value="bear">Bear</option>
            <option value="bison">Bison</option>
            <option value="moose">Moose</option>
            <option value="lynx">Lynx</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Location</label>
            <input name="location" type="text" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Description</label>
            <input name="description" type="text" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Image</label>
            <input name="image" type="text" className="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      
    );
  }
}
