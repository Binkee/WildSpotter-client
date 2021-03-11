import React, { Component } from 'react'
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, MyComponent} from 'react-leaflet'


export default class ProfileMap extends Component {

    render() {
        const {allAnimals} = this.props
     console.log(this.props.searchAnimal)
       
        let filteredAnimals = this.props.allAnimals;
        if(this.props.searchAnimal){
            filteredAnimals = this.props.allAnimals.filter((singleAnimal) => {
                return singleAnimal.animal == this.props.searchAnimal
            })
        
        }

        if(this.props.searchAnimal == "Animal"){
            filteredAnimals = this.props.allAnimals
        }
    const location = [56.26, 9.50]

        return (
            <div>
        <MapContainer style={{width: '350px', height: '250px'}}  center={location} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
              //Map over the animal array this.props.allAnimals -> render each element location

              filteredAnimals.map((animal, index) =>{
                let marker = 'https://image.flaticon.com/icons/png/512/2247/2247411.png'

                if (animal.animal === 'bear') {
                    marker =  'bear.png'
                } else if(animal.animal === 'wolf'){
                    marker ='Wolf2.png'
                } else if (animal.animal === 'moose'){
                    marker = 'Moose.png'
                } else if (animal.animal === 'lynx'){
                    marker = 'lynx1.png'
                } else if (animal.animal === 'bison'){
                    marker = 'https://image.flaticon.com/icons/png/512/2247/2247411.png'
                }
        
                
                const Logo = new L.Icon({
                    iconUrl: marker,
                    iconSize: [44, 34],
              });
                  return <Marker icon={Logo} position={[`${animal.location[0]}`, `${animal.location[1]}`]}><Popup>
                 {animal.description} <br />.
                </Popup></Marker>
              })

          }


          
           
        </MapContainer>
            </div>
        )
    }
}
