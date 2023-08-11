import React from "react"
import Map from "../components/Map"
import Location from "../components/Location"

function AreaSelector() {
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Location />
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
