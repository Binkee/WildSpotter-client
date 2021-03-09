import React, { Component } from 'react'
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, MyComponent} from 'react-leaflet'


export default class ProfileMap extends Component {

    render() {
        const {allAnimals} = this.props

        let marker = 'https://image.flaticon.com/icons/png/512/2247/2247411.png'

        if (this.props.allAnimals.animal === 'bear') {
            marker =  'https://cdn.imgbin.com/20/19/14/imgbin-computer-icons-bear-bear-sRLtrQuaJT8Q6vXipnz4JXGq3.jpg'
        } else if(this.props.allAnimals.animal === 'wolf'){
            marker ='https://www.mcicon.com/wp-content/uploads/2020/12/Animal_Wolf_1-copy-28.jpg'
        } else if (this.props.allAnimals.animal === 'moose'){
            marker = 'https://previews.123rf.com/images/ylivdesign/ylivdesign1703/ylivdesign170301640/73291430-moose-icon-flat-style.jpg'
        } else if (this.props.allAnimals.animal === 'lynx'){
            marker = 'https://i.pinimg.com/originals/63/41/95/634195beb4e9835ea630d665caa32d38.jpg'
        } else if (this.props.allAnimals.animal === 'bison'){
            marker = 'https://image.flaticon.com/icons/png/512/2247/2247411.png'
        }

        console.log( 'This are all animals ->', this.props.allAnimals)
        const Logo = new L.Icon({
            iconUrl: marker,
            iconSize: [44, 34],
      });

    const location = [`50.3785`, `14.9706` ]

        return (
            <div>
        <MapContainer style={{width: '400px', height: '300px'}}  center={location} zoom={33} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
              //Map over the animal array this.props.allAnimals -> render each element location

              allAnimals.map((animal, index) =>{
                  return <Marker icon={Logo} position={[`${animal.location[0]}`, `${animal.location[1]}`]}></Marker>
              })

          }

          <Marker icon={Logo} position={location}>
          
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
            </div>
        )
    }
}
