import React from "react"
import "../styles/weatherStyles.css"
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
                <div className="row d-flex">
                    <div className="col-2 weather-icon">
                        <img src={`https://openweathermap.org/img/wn/${props.weatherIcon}.png`} alt="weather icon" />
                    </div>
                    <div className="col-3 weather-type">
                        <h5 className="weather-title">WEATHER</h5>
                        <p className="weather-info">{props.weatherType}</p>
                    </div>
                    <div className="col-6 weather-description">
                        <h5 className="weather-title">DESCRIPTION</h5>
                        <p className="weather-info">{props.weatherTypeDescription}</p>
                    </div>
                </div>
                <Separator />
                <div className="row d-flex">
                    <div className="col-3 sunset">
                        <h5 className="weather-title">SUNSET</h5>
                        <p className="weather-info">{milisecondsToTime(props.weatherSunset)}</p>
                    </div>
                    <div className="col-3 sunrise">
                        <h5 className="weather-title">SUNRISE</h5>
                        <p className="weather-info">{milisecondsToTime(props.weatherSunrise)}</p>
                    </div>
                    <div className="col-6 location">
                        <h5 className="weather-title">LOCATION</h5>
                        <p className="weather-info">{props.weatherName}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <h5 className="weather-title">TEMPERATURE</h5>
                        <p className="weather-info">{props.weatherTemperature}</p>
                    </div>
                    <div className="col-5">
                        <h5 className="weather-title">FEELS LIKE</h5>
                        <p className="weather-info">{props.weatherFeelsLike}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Progress value={props.weatherHumidity} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather;