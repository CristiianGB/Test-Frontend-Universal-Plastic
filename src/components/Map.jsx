import React, { useEffect, useRef } from "react"
import '../styles/mapStyles.css'
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer, Popup, Circle } from 'react-leaflet'
import { Icon, divIcon} from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import useAppContext from "../store/Context"
import useGeoLocation from "../hooks/useGeoLocation"

const Map = ({latitude, longitude}) => {
    const center = [latitude, longitude]
    const ZOOM_LEVEL = 13
    const location = useGeoLocation();
    const mapRef = useRef()
    
    const showMyLocation = () => {
        if(location.loaded && !location.error){
            mapRef.current.leafletElement.flyTo(
                [location.coordinates.latitude, location.coordinates.longitude],
                ZOOM_LEVEL,
                {animate: true})
        }else{
            console.log(location)
        }
    }

    useEffect(()=>{
        showMyLocation()
    }, [])


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

  
  console.log(location)

  return (
    <>
      <MapContainer 
        center={[location.coordinates.latitude, location.coordinates.longitude]}
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
            
        {markers.map((marker, i)=> (
          <Marker 
            key={i}
            position={marker.geocode}
            icon={customIcon}
          >
            
            <Popup>
              <h2>{marker.popUp}</h2>
            </Popup>
          </Marker>
        ))}
        </MarkerClusterGroup>
        {location.loaded && !location.error && (
            <Marker 
            position={[location.coordinates.latitude, location.coordinates.longitude]}
            icon={customIcon}
            ></Marker>
        )}
      </MapContainer>
    </>
  )
}

export default Map;
