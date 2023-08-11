import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import Layout from "../layout/layout.jsx";

import AreaSelector from "../views/AreaSelector.jsx";
import WeatherCity from "../views/WeatherCity.jsx";

const innerRoutes = [
    {
        path:"*",
        element:<AreaSelector/>
    },
    {
        path:"/weather-city",
        element:<WeatherCity/>
    },
    {
        path:"/",
        element:<AreaSelector/>
    },
];

const fullRoutes = [{
    path:'/',
    element: <Layout/>,
    children: innerRoutes
}];


const router = createBrowserRouter(fullRoutes);

export default router;