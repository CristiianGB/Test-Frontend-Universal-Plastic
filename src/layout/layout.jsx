import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// EN ESTE ARCHIVO PODEMOS PONER UN NAVBAR Y UN FOOTER. EL LAYOUT HACE REFERENCIA AL CUERPO DE LA PAGINA QUE SE SOLICITA MEDIANTE LA URL. (ES EL CHILDREN DE LA RUTA)

const Layout = () => {

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Navbar />
                </div>
            </div>
            <Outlet/>
        </div>
        
            
        </>
    )
}

export default Layout;