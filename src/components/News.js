import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class News extends Component {
    render() {
        
        let clonedArr = JSON.parse(JSON.stringify(this.props.allAnimals))
        
        clonedArr.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
            
          
        }) 
       
        
      let newAnimal =  clonedArr.slice(0, 3)
      
        
        

        return (
            <div><h6>Last spotted animals</h6>
                {newAnimal.map((animal)=>{
                    return <Link to={`/animalDetail/${animal._id}`}><p>{animal.animal}</p></Link>
                           
                })}
                
    
                
            </div>
        )
    }
}
