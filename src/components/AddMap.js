import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';


function MyMap(props) {

  const [location, updateLocation] = useState( [56.26, 9.50])



  function MyComponent() {
    const map = useMapEvent('click', (e) => {
      let coordinates = e.latlng
      updateLocation([coordinates.lat, coordinates.lng])
      props.handleLocation([coordinates.lat, coordinates.lng])
     // map.setCenter([50.5, 30.5])
    })
    return null
  }
    
  const BearLogo = new L.Icon({
        iconUrl: props.animalMarker,
        iconSize: [44, 38],
  });

  console.log(location)

  return (
    <div>
        <MapContainer style={{width: '350px', height: '250px'}}  center={location} zoom={3} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyComponent position={location} />
          <Marker icon={BearLogo} position={location}>
          
            
          </Marker>
        </MapContainer>
      </div>
  )
}

export default MyMap