import React from "react"
import { Link } from "react-router-dom";
import useAppContext from "../store/Context";

const WeatherCity = () => {
    const {store, actions} = useAppContext()

    
    return (
        <>
            Weather
            <Link to="/">Volver</Link>
            {store.latitude}
        </>
    )
}

export default WeatherCity;