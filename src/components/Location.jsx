import React, { useState, useEffect } from "react";
import "../styles/locationStyles.css"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Location = ({latitude, longitude}) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row my-2">
                    <div className="col-12">
                        <h1 className="location-title">Location</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                            <Label htmlFor="latitude">Latitude</Label>
                            <Input value={latitude} type="latitude" id="latitude" placeholder="Latitude" />
                    </div>
                    <div className="col-6">
                            <Label htmlFor="longitude">Longitude</Label>
                            <Input value={longitude} type="longitude" id="longitude" placeholder="Longitude" />  
                    </div>
                </div>
            </div>


        </>
    )
}

export default Location;