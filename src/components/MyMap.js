import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

class MyMap extends Component {
  render() {
    const position = [62.33, 26.39]
  const BearLogo = new L.Icon({
      iconUrl: 'https://cdn.imgbin.com/20/19/14/imgbin-computer-icons-bear-bear-sRLtrQuaJT8Q6vXipnz4JXGq3.jpg',
      iconSize: [44, 34],
  });
  return (
      <div>
        <MapContainer style={{width: '400px', height: '300px'}}  center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={BearLogo} position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  }
}
export default MyMap