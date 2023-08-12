import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider"
import "../styles/areaStyles.css"
import useAppContext from "../store/Context";


const Area = () => {
    const {store, actions } = useAppContext()
    const maxKm = 20 + "Km"
    const areaRatio = `looking for ${store.slider}km (max. ${maxKm}).`

    
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
                        {store.slider ?<Slider onValueChange={actions.onSliderChange} value={[store.slider]} max={20} step={.1} />: ""}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Area;