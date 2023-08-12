import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbarStyles.css"
import locationIcon from "../assets/locationIcon.svg"
import weatherIcon from "../assets/weatherIcon.svg"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
    const [activeLocation, setActiveLocation] = useState(true)
    const [activeWeather, setActiveWeather] = useState(false)
    const unactive = "opacity-25"


    return (
        <>
            <div className="container-fluid">
                <div className="row mt-3" >
                    <div className="col-12 d-flex justify-content-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem 
                                onClick={()=>{
                                    setActiveLocation(true)
                                    setActiveWeather(false)
                                }} 
                                className={`mx-4 ${activeLocation && !activeWeather ? "" : unactive}`}
                                >
                                    <Link to="/">
                                            <img src={locationIcon} alt="location icon" />
                                            <tool-tip role="tool-tip">Location</tool-tip>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem 
                                onClick={()=>{
                                    setActiveLocation(false)
                                    setActiveWeather(true)
                                }} 
                                className={`mx-4 ${activeWeather && !activeLocation ? "" : unactive}`}
                                >
                                    <Link to="/weather-city">
                                            <img src={weatherIcon} alt="weather icon" />
                                            <tool-tip role="tool-tip">Weather</tool-tip>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;