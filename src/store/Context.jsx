import React, {createContext, useContext, useState, useEffect } from 'react';




const Context = createContext();




export const ContextProvider = ({children}) => {


    //DATOS EJEMPLO DE COMO USAR EL CONTEXT DEL BOILERPLATE 
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [slider, setSlider] = useState(1)
    const [ city, setCity ] = useState()

    

    
    const store = { latitude, longitude, slider };
    
    
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
          return alert("Error obteniendo ubicación")
        }

        const requestOptions = {
          enableHighAccuracy: true, 
          maximumAge: 0, 
          timeout: 5000
        };
     
        navigator.geolocation.getCurrentPosition(onCoordinatesObtained, onUbicationError, requestOptions);
      
      },
      updateLatitude: (newLatitude) => {
        setLatitude(newLatitude)
        
      },
      updateLongitude: (newLongitude) => {
        setLongitude(newLongitude)
      },
      onSliderChange: (currentValue) => {
        setSlider(currentValue)
      },
      onCityChange: (currentCity) => {
        setCity(currentCity)
      }
      
     };

    return(
        <Context.Provider value={{ store, actions}}>
            {children}
        </Context.Provider>
    )
};

 
const useAppContext = () => useContext(Context);

export default useAppContext;