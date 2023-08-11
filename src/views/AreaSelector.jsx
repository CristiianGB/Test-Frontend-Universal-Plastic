import React, {useEffect, useState} from "react"
import Map from "../components/Map"
import Location from "../components/Location"
import Area from "../components/Area"
import useAppContext from "../store/Context"

function AreaSelector() {
  const {store, actions} = useAppContext()
  

  useEffect(()=>{
    actions.takeCoordinates()
  },[])
  
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Location  />
          </div>
        </div><div className="row">
          <div className="col-12">
            <Area />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Map latitude={store.latitude ? store.latitude : 42} longitude={store.longitude ? store.longitude : 2.2}/>
          </div>
        </div>
      </div>

      
      
    </>
  )
}

export default AreaSelector
