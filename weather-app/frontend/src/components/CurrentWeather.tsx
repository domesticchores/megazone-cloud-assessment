import { getWeatherData } from "../assets/Codes";
import Blur from "./Blur";

interface WeatherProps {
    className?: string,
    weatherData: any
}

function CurrentWeather({className, weatherData}: WeatherProps) {
    if (!weatherData) return <div id="current_weather" className="relative z-10 h-full w-full animate-pulse">
            <div className="w-full h-1/12 text-center relative">
                <h1 className="text-2xl md:text-3xl"><span className="block w-full h-[1em] bg-zinc-500 rounding"></span></h1>
            </div>
            <div className={`w-full h-3/7 md:h-1/2 flex ${className || ''}`}>
                <span className="material-symbols-rounded text-[6em]! md:text-[12em]! lg:text-[15em]! m-auto text-zinc-500">sunny</span>
            </div>
            <div className="w-full h-1/12 text-center mb-4">
                <h1 className="text-xl md:text-3xl"><span className="block w-full h-[1em] bg-zinc-500 rounding"></span></h1>
            </div>
            <div className="w-full h-3/12 text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-3"><span className="block w-full h-[1em] bg-zinc-500 rounding"></span></h1>
                <h1 className="text-xl md:text-3xl"><span className="block w-full h-[1em] bg-zinc-500 rounding"></span></h1>
            </div>
        </div>
    const codeData = getWeatherData(weatherData.code);
    return <>
        <Blur x={"left"} y={"top"} size={"lg"} color={weatherData.feelslike_f < 65 ? "blue" : "orange"}/>
        <Blur x={"right"} y={"bottom"} size={"lg"} color={weatherData.feelslike_f < 75 ? "blue" : "orange"}/>
        
        <Blur x={"left"} y={"bottom"} size={"lg"} color={weatherData.feelslike_f < 95 ? "blue" : "orange"}/>

        <div id="current_weather" className="relative z-10 h-full w-full">
            <div className="w-full h-1/12 text-center relative">
                <h1 className="text-2xl md:text-3xl">{weatherData.name}</h1>
            </div>
            <div className={`w-full h-3/7 md:h-1/2 flex ${className || ''}`}>
                <span className="material-symbols-rounded text-[6em]! md:text-[12em]! lg:text-[15em]! m-auto">{codeData.icon}</span>
            </div>
            <div className="w-full h-1/12 text-center mb-4">
                <h1 className="text-xl md:text-3xl">{codeData.status}</h1>
            </div>
            <div className="w-full h-3/12 text-center">
                <h1 className="text-6xl md:text-8xl font-bold">{weatherData["feelslike_"+weatherData.symbol]}°{weatherData.symbol.toUpperCase()}</h1>
                <p className="text-lg md:text-2xl">Actual: {weatherData["temp_"+weatherData.symbol]}°{weatherData.symbol.toUpperCase()}</p>
            </div>
        </div>
    </>
}

export default CurrentWeather;