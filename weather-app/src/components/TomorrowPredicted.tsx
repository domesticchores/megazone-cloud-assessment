import { getWeatherData } from "../assets/Codes";
import WeatherBox from "./WeatherBox";

interface WeatherProps {
    className?: string,
    weatherData: any
}

function TomorrowPredicted({className, weatherData}: WeatherProps) {
    const codeData = getWeatherData(weatherData.code);
        return <>
        <div className={`w-1/2 text-center flex ${className || ''}`}>
            <div className="w-fit m-auto">
                <h2 className="text-2xl font-semibold">Tomorrow's Forecast</h2>
                <p className="my-auto text-xl text-center w-full">{codeData.status}</p>
            </div>
        </div>
        <WeatherBox weatherData={weatherData} symbol={weatherData.symbol}></WeatherBox>
    </>
}

export default TomorrowPredicted;