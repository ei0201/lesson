import  React, {useEffect, useState} from 'react' 
import axios from 'axios'
import { loadBundle } from 'firebase/firestore'





const Lesson4 = () => {
   
    const [weatherData, setWeatherData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [limit, setLimit] = useState(5)

    const handleLinkCityWithButton = () => {
        if (limit === "a") {
          return "5";
        } else if (limit === "b") {
          return "10";
        } else if (limit === "c") {
          return "15";
        }
    }
    // const API_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ha%20noi?unitGroup=metric&key=484DCQEQR8WZWTPM9GJLH7BH6&contentType=json'
    const API_URL ='https://fakestoreapi.com/products?limit=${limit}'

    const fetchWeather = async () =>{
        setIsLoading(true)
        const res = await axios.get(API_URL)
        const data = res.data
        setWeatherData(data)
        setIsLoading(false)

    }

    useEffect(
        () => {
            fetchWeather()
        } , [limit]
    )

    if(isLoading)  return (
        <div >
            Loading
        </div>

    )
    return (
        <div>
            <div className="btn-group  lg:btn-group-horizontal flex justify-center items-center">
            <button 
           onClick={() => setLimit("a")}
           className={`btn ${limit === "a" ? "btn-active" : ""}  `}
            >
                5
            </button>
            <button 
            onClick={() => setLimit("b")}
            className={`btn ${limit === "b" ? "btn-active" : ""}  `}
            >
                10
            </button>
            <button 
            onClick={() => setLimit("c")}
            className={`btn ${limit === "c" ? "btn-active" : ""}  `}
            >
                15
            </button>
        </div>





      <div aria-label="card-overlay" className="relative w-[350px] h-[400px]">
        <img
          src="https://bit.ly/3zzCTUT"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
          <h3 className="text-base font-bold">{weatherData.address}</h3>
          <span className="text-sm text-gray-400">
            {weatherData.description}
          </span>
          <span className="text-sm text-gray-400">
            {weatherData.resolvedAddress}
          </span>
          
        </div>
      </div>
    </div>

    )
}


export default Lesson4







