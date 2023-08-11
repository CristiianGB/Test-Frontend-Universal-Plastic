import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider"
import "../styles/areaStyles.css"


const Area = () => {
    const [slider, setSlider] = useState(1)
    const maxKm = 20 + "Km"
    const areaRatio = `looking for ${slider}km (max. ${maxKm}).`

    const aux = (currentValue) => {
        setSlider(currentValue)
        console.log(slider)
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h1 className="area-title">Area</h1>
                    </div>
                    <div className="col-6 text-end text-placeholder">
                        <p>{areaRatio}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 my-4 pb-2">
                        <Slider onValueChange={aux} value={[slider]} max={20} step={1} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Area;