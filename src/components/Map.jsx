import React, { useEffect, useState } from "react"
import '../styles/mapStyles.css'
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer, Popup, Circle, useMap } from 'react-leaflet'
import { Icon, divIcon, map } from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import useAppContext from "../store/Context"


const Map = () => {
  const { store, actions } = useAppContext()
  
  
  
  const Recenter = ({latitude,longitude}) => {
    const map = useMap();
    useEffect(() => {
        map.setView([latitude, longitude]);
    }, [latitude, longitude]);
    return null;
}
  const markers =
  {
    geocode: [store.latitude, store.longitude],
    popUp: "You are here!"
  }


  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149060.png",
    iconSize: [38, 38] // size of the icon in px
  })


  return (
    <>
      <MapContainer
        center={[store.latitude, store.longitude]}
        zoom={12} 
        animate={true}
      >
         <Recenter latitude={store.latitude} longitude={store.longitude} />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
          <Marker
            position={markers.geocode}
            icon={customIcon}
          >
            <Popup>
              <h2>{markers.popUp}</h2>
            </Popup>
            {store.latitude && store.longitude 
            ? <Circle center={[store.latitude, store.longitude]} defaultValue={[1]} radius={store.slider*1000}/>
            : ""}
          </Marker>
      </MapContainer>
    </>
  )
}

export default Map;
