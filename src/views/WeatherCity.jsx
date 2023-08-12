import React from "react"
import { Link } from "react-router-dom";
import "../styles/weatherCityStyles.css"
import useAppContext from "../store/Context";
import City from "../components/City";

const WeatherCity = () => {
    const {store, actions} = useAppContext()

    
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <h1 className="weather-city-title text-center mt-3">Weather City</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <City />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCity;