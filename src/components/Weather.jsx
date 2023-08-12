import React from "react"
import "../styles/weatherStyles.css"
import icon from "../assets/weatherLocationIcon.svg"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

const Weather = (props) => {
    
    const milisecondsToTime = (miliseconds) => {
        const date = new Date(miliseconds*1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formatedDate = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        return formatedDate
    }
    


    return (
        <>
            <div className="container-fluid weather-container">
                <div className="row d-flex weather-description-row my-2">
                    <div className="col-2 weather-icon">
                        <img className="img-fluid weather-photo" src={`https://openweathermap.org/img/wn/${props.weatherIcon}.png`} alt="weather icon" />
                    </div>
                    <div className="col-3 weather-type">
                        <h5 className="weather-title">WEATHER</h5>
                        <p className="weather-info mt-2">{props.weatherType}</p>
                    </div>
                    <div className="col-6 weather-description">
                        <h5 className="weather-title">DESCRIPTION</h5>
                        <p className="weather-info mt-2">{props.weatherTypeDescription}</p>
                    </div>
                </div>
                <Separator className="my-2" />
                <div className="row d-flex sunset-sunrise-location-row my-3">
                    <div className="col-3 sunset">
                        <h5 className="weather-title">SUNSET</h5>
                        <p className="weather-info mt-2">{milisecondsToTime(props.weatherSunset)}</p>
                    </div>
                    <div className="col-3 sunrise">
                        <h5 className="weather-title">SUNRISE</h5>
                        <p className="weather-info mt-2">{milisecondsToTime(props.weatherSunrise)}</p>
                    </div>
                    <div className="col-6 location">
                        <h5 className="weather-title">LOCATION</h5>
                        <div className="d-flex mt-2">
                        <img className="wather-marker-icon " src={icon} alt="" /> 
                        <p className="weather-info mx-1">{props.weatherName}</p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex temperature-feels-like-row my-3">
                    <div className="col-5">
                        <h5 className="weather-title">TEMPERATURE</h5>
                        <p className="weather-info mt-2">{props.weatherTemperature} ºC</p>
                    </div>
                    <div className="col-5">
                        <h5 className="weather-title">FEELS LIKE</h5>
                        <p className="weather-info mt-2">{props.weatherFeelsLike} ºC</p>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-12 text-end text-placeholder">
                        <p>{`${props.weatherHumidity}% humidity`}</p>
                    </div>
                    
                </div>
                <div className="row progress-row mt-2">
                    <div className="col-12">
                        <Progress className="my-2" value={props.weatherHumidity} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather;