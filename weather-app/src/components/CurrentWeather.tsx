import { getWeatherData } from "../assets/Codes";

interface WeatherProps {
    className?: string,
    weatherData: any
}

function CurrentWeather({className, weatherData}: WeatherProps) {
    const codeData = getWeatherData(weatherData.code);
    return <>
        <div className="w-full h-1/12 text-center">
            <h1 className="text-3xl">{weatherData.name}</h1>
        </div>
        <div className={`w-full h-1/2 flex ${className || ''}`}>
            <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[15em]! m-auto">{codeData.icon}</span>
        </div>
        <div className="w-full h-1/12 text-center mb-4">
            <h1 className="text-3xl">{codeData.status}.</h1>
        </div>
        <div className="w-full h-3/12 text-center">
            <h1 className="text-8xl font-bold">{weatherData.feelslike}°</h1>
            <p className="text-2xl">Actual: {weatherData.temp}°</p>
        </div>
    </>
}

export default CurrentWeather;