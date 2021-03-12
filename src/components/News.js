import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class News extends Component {
    render() {
        
        let clonedArr = JSON.parse(JSON.stringify(this.props.allAnimals))
        clonedArr.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
            }) 
        let newAnimal =  clonedArr.slice(0, 3)
      
        let clonedTour = JSON.parse(JSON.stringify(this.props.allTours))
        console.log(this.props.allTours)
        clonedTour.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
            }) 
        let newTour =  clonedTour.slice(0, 3)
    
        return (
            <div className="news">
                
                    <div>
                        <h6>Last spotted animals</h6>
                        {newAnimal.map((animal)=>{
                            return <Link to={`/animalDetail/${animal._id}`}><p className="link">{animal.animal}</p></Link>
                        })}
                    </div>
                    <div>
                        <h6>Last added tours</h6>
                        {newTour.map((tour)=>{
                            return <Link to={`/tourDetail/${tour._id}`}><p className="link">{tour.name}</p></Link>
                            
                        })}
                    </div>
                
            </div>
        )
    }
}
