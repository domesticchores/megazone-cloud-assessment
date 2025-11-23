import { getWeatherIcon } from "../assets/Codes";

interface WeatherProps {
    className?: string,
    weatherData: any
}

function WeatherBox({className, weatherData}: WeatherProps) {
    return <>
        <div className={`m-auto text-center ${className}`}>
            <h2 className="text-2xl font-bold">{weatherData.name}</h2>
            <span className="material-symbols-rounded text-[1em]! md:text-[2em]! lg:text-[4em]! m-auto">{getWeatherIcon(weatherData.code)}</span>
            <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                <h2 className="">{weatherData.high}°</h2>
                <h2 className="">/</h2>
                <h2 className="">{weatherData.low}°</h2>
            </div>
        </div>
    </>
}

export default WeatherBox;