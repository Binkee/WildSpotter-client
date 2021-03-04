import React, { Component } from "react";
import NavBar from "./NavBar";

export default class AddAnimal extends Component {
  render() {
    return (
        
      <div className="addAnimal">
          
        <form>
         <div >
            <select class="form-select" aria-label="Default select example">
            <option selected>Animal</option>
            <option value="1">Wolf</option>
            <option value="2">Bear</option>
            <option value="3">European-Bison</option>
            <option value="4">Moose</option>
            <option value="5">European-Lynx</option>
            </select>
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
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      
    );
  }
}
