import { getWeatherData } from "../assets/Codes";
import Blur from "./Blur";
import WeatherBox from "./WeatherBox";

interface WeatherProps {
    className?: string,
    weatherData: any
}

function TomorrowPredicted({className, weatherData}: WeatherProps) {
    if (!weatherData.code) return <div></div>
    const codeData = getWeatherData(weatherData.code);
        return <>
        <Blur x={"right"} y={"bottom"} size={"lg"} color={weatherData.maxtemp_f < 69 ? "blue" : "orange"}/>
        
        <div className={`w-1/2 text-center flex z-10 ${className || ''}`}>
            <div className="w-fit m-auto">
                <h2 className="text-2xl font-semibold">Tomorrow's Forecast</h2>
                <p className="my-auto text-xl text-center w-full">{codeData.status}</p>
            </div>
        </div>
        <WeatherBox weatherData={weatherData} symbol={weatherData.symbol}></WeatherBox>
    </>
}

export default TomorrowPredicted;