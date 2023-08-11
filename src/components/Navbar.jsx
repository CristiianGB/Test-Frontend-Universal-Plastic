import React from "react";
import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
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
                            Location
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/weather-city">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Weather City
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