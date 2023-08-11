import React from "react"
import '../styles/mapStyles.css'
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer, Popup, Circle } from 'react-leaflet'
import { Icon, divIcon } from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

const Map = () => {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I'm marker 1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I'm marker 2"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I'm marker 3"
    },
  ]

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149060.png",
    iconSize: [38, 38] // size of the icon in px
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
     
    })
  }

  

  return (
    <>
      <MapContainer 
        center={[48.8566, 2.3522]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        {/* <Circle center={[48.8566, 2.3522]} radius={200} /> make circle */}
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
            
        {markers.map(marker=> (
          <Marker 
            position={marker.geocode}
            icon={customIcon}
          >
            
            <Popup>
              <h2>{marker.popUp}</h2>
            </Popup>
          </Marker>
        ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  )
}

export default Map;
