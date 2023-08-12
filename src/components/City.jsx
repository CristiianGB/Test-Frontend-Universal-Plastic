import React, { useEffect, useState } from "react";
import { locations } from "../constants/index.js"
import { getWeather } from "../service/weatherCityServices.js";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import useAppContext from "../store/Context";

const City = () => {
    const {store, actions} = useAppContext
    const [city, setCity] = useState()
    const [ weather, setWeather ] = useState({})

    useEffect(()=>{
        if(city!=undefined){
          getWeather(city.location.coordinates[1], city.location.coordinates[0], setWeather)
        }
    },[city])

    return (
        <>
            <div className="container-fluid">
                <div className="row my-2">
                    <div className="col-12">
                        <h1 className="city-title">City</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Select value={city} onValueChange={setCity}>
                            <SelectTrigger className="w-[100%]">
                                <SelectValue placeholder="City" />
                            </SelectTrigger>
                            <SelectContent>
                                {locations.map((location)=> <SelectItem  value={location}>{location.city}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {weather!=undefined? (
                            <>
                            <h1>{weather.main?.temp}</h1>
                            <h1>{weather.wind?.speed}</h1>
                            </>
                        ):("")}
                    </div>
                </div>
            </div>

        </>
    )
}

export default City;