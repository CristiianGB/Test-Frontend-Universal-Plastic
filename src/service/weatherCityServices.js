const API_KEY = "249efd60e5021ba25f979f2caac2b853";

export const getWeather = (latitude, longitude, setWeather) => {
    try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        .then((response)=>response.json())
        .then((data)=>{
            setWeather(data)
            console.log(data)
        })
    } catch (error) {
        console.log(error)
    }
}