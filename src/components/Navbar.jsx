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
        <div className="container-fluid">
            <div className="row my-2" >
                <div className="col-12 d-flex justify-content-center">
                    <NavigationMenu>
            <NavigationMenuList>
            <NavigationMenuItem>
                    <Link to="/">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <img src={locationIcon} alt="location icon" />
                            <tool-tip role="tool-tip">Location</tool-tip>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/weather-city">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <img src={weatherIcon} alt="weather icon" />
                            <tool-tip role="tool-tip">Weather</tool-tip>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;