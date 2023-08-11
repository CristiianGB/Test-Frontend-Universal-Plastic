import React, {createContext, useContext, useState, useEffect } from 'react';




const Context = createContext();




export const ContextProvider = ({children}) => {


    //DATOS EJEMPLO DE COMO USAR EL CONTEXT DEL BOILERPLATE 
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    

    // EN STORE ALMACENAMOS LOS DATOS PARA PASAR A TODA LA APP
    const store = { latitude, longitude };
    
    // EN ACTIONS ALMACENAMOS TODAS LAS FUNCIONES QUE QUEREMOS PASAR AL RESTO DE LA FUNCION (EVITAR PONER setStates, usar handles intermedios)
    const actions = { 
        takeCoordinates: () => {
        if (!("geolocation" in navigator)) {
          return alert("Your navigator doesn't support the geolocation, try another one please!");
        }
      
        const onCoordinatesObtained = ubicacion => {
          setLatitude(ubicacion.coords.latitude)
          setLongitude(ubicacion.coords.longitude)
          
        }
        
        const onUbicationError = err => {
          console.log("Error obteniendo ubicación: ", err);
        }
      
        const requestOptions = {
          enableHighAccuracy: true, // Alta precisión
          maximumAge: 0, // No queremos caché
          timeout: 5000 // Esperar solo 5 segundos
        };
        // Solicitar
        navigator.geolocation.getCurrentPosition(onCoordinatesObtained, onUbicationError, requestOptions);
      
      },
      updateLatitude: (newLatitude) => {
        setLatitude(newLatitude)
        
      },
      updateLongitude: (newLongitude) => {
        setLongitude(newLongitude)
      },
     };

    return(
        <Context.Provider value={{ store, actions}}>
            {children}
        </Context.Provider>
    )
};

 // ESTE ES EL CUSTOM HOOK QUE DEBEMOS USAR PARA IMPORTAR DATOS DEL CONTEXTO
const useAppContext = () => useContext(Context);

export default useAppContext;