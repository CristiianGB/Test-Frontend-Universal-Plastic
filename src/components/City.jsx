import React, { useEffect, useState } from "react";
import "../styles/cityStyles.css"
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
import Weather from "./Weather.jsx";

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
                                {locations.map((location,i)=> <SelectItem key={i} value={location}>{location.city}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="row weather-container-row mt-3">
                    <div className="col-12">
                        {weather.coord? (
                            <>
                                <Weather 
                                    weatherIcon={weather?.weather[0]?.icon}
                                    weatherType={weather?.weather[0]?.main}
                                    weatherTypeDescription={weather?.weather[0]?.description}
                                    weatherSunset={weather?.sys?.sunset}
                                    weatherSunrise={weather?.sys?.sunrise}
                                    weatherName={weather?.name}
                                    weatherTemperature={weather?.main?.temp}
                                    weatherFeelsLike={weather?.main?.feels_like}
                                    weatherHumidity={weather?.main?.humidity}
                                    weatherClouds={weather?.clouds?.all}
                                />
                            </>
                        ):("")}
                    </div>
                </div>
            </div>

        </>
    )
}

export default City;