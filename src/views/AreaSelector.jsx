import React, {useEffect, useState} from "react"
import "../styles/areaSelectorStyles.css"
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
            <h1 className="area-selector-title text-center mt-1">Area Selector</h1>
          </div>
        </div>
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
            {store.latitude && store.longitude !== undefined ? <Map /> : (
              <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExems2a3JidTVhczdiMjE5cGhxZWZ6cmdiZWtkN21wbjAxOG9lZTI3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CNHwfdaHPNYQPzAIoS/giphy.gif" alt="geting location..." />
            )}
          </div>
        </div>
      </div>

      
      
    </>
  )
}

export default AreaSelector
