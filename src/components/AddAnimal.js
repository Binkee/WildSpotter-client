import React, { Component } from "react";
import NavBar from "./NavBar";
import {Link} from 'react-router-dom'
import MyMap from './AddMap'
export default class AddAnimal extends Component {

    state =  {
        animal: null,
        location: [],
        tourId: null
    }

   handleChange = (event) => {

    this.setState(
        {
          animal: event.target.value,
        },
        
      );
       console.log(event.target.value)
   }

   handleTourChange = (event) => {

    this.setState(
        {
          tourId: event.target.value,
        },
        
      );
       console.log(event.target.value)
   }
//    handlechange event for location 
handleLocation =   (location) =>{
    this.setState({
        location: location
    })
}

    render() {
        let marker = 'bear.png'
        if (this.state.animal === 'bear') {
            marker =  'bear.png'
        } else if(this.state.animal== 'wolf'){
            marker =  'Wolf2.png'
        } else if (this.state.animal== 'moose'){
            marker = 'Moose.png'
        } else if (this.state.animal == 'lynx'){
            marker = 'lynx1.png'
        } else if (this.state.animal == 'bison'){
            marker = 'https://image.flaticon.com/icons/png/512/2247/2247411.png'
        }

        console.log(this.props.allTours)

    return (
        
      <div className="addAnimal">
        <Link to="/profile"><img src="x-circle.svg"></img></Link>  

        <MyMap animalMarker={ marker} handleLocation={this.handleLocation} />
        <form onSubmit={ (event) => { this.props.addAnimal(event, this.state.animal, this.state.location, this.state.tourId) } }>
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

          <select className="btn btn-danger dropdown-toggle form-select" onChange={this.handleTourChange} name="tours" aria-label="Default select example">
            <option selected>Tour</option>
            {
              this.props.allTours.map((singleTour) => {
                return <option value={singleTour._id}>{singleTour.name}</option>
              })
            }
            </select>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Location</label>
            <p>lattitude = {this.state.location[0]}</p>
            <p>longitude = {this.state.location[1]}</p>
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Description</label>
            <input name="description" type="text" className="form-control" id="exampleInputPassword1"/>
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Image</label>
            <input name="image" type="text" className="form-control" id="exampleInputPassword1"/>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          {/* <button type="submit" className="btn btn-primary"> Edit </button>
          <button onClick={()=>{this.props.delete(this.state.animal._id)}} type="submit" className="btn btn-primary">Delete </button>
        </form> */}
      </div>
      
    );
  }
}
