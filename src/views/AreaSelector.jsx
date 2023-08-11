import React, {useState} from "react"
import Map from "../components/Map"
import Location from "../components/Location"
import Area from "../components/Area"

function AreaSelector() {
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()

  const takeCoordinates = () => {
    if (!("geolocation" in navigator)) {
      return alert("Your navigator doesn't support the geolocation, try another one please!");
    }
  
    const onCoordinatesObtained = ubicacion => {
      setLatitude(ubicacion.coords.latitude)
      setLongitude(ubicacion.coords.longitude)
      console.log("Tengo la ubicación: ", ubicacion.coords.latitude);
    }
    
    const onUbicationError = err => {
      console.log("Error obteniendo ubicación: ", err);
    }
  
    const requestOptions = {
      enableHighAccuracy: true, // Alta precisión
      maximumAge: 0, // No queremos caché
      timeout: 5000 // Esperar solo 5 segundos
    };
    // Solicitar
    navigator.geolocation.getCurrentPosition(onCoordinatesObtained, onUbicationError, requestOptions);
  
  };
  takeCoordinates()
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Location latitude={latitude} longitude={longitude} />
          </div>
        </div><div className="row">
          <div className="col-12">
            <Area />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Map />
          </div>
        </div>
      </div>

      
      
    </>
  )
}

export default AreaSelector
