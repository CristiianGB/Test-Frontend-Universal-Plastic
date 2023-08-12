import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbarStyles.css"
import locationIcon from "../assets/locationIcon.svg"
import weatherIcon from "../assets/weatherIcon.svg"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row my-2" >
                    <div className="col-12 d-flex justify-content-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem className="mx-4">
                                    <Link to="/">
                                            <img src={locationIcon} alt="location icon" />
                                            <tool-tip role="tool-tip">Location</tool-tip>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem className="mx-4">
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