import { getWeatherIcon } from "../assets/Codes";

interface WeatherProps {
    className?: string,
    weatherData: any,
    symbol: string
}

function WeatherBox({className, weatherData, symbol}: WeatherProps) {
    if (!weatherData) return <div className={`m-auto text-center relative z-10 ${className || ''}`}>
            <h2 className="text-md md:text-md lg:text-xl font-bold mb-1"><span className="block w-full h-[1em] bg-zinc-500 rounding"></span></h2>
            <span className="material-symbols-rounded text-[1em]! md:text-[2em]! lg:text-[4em]! m-auto text-zinc-500">sunny</span>
            <span className="block w-full h-[1em] bg-zinc-500 rounding"></span>
        </div>
    const formattedWeatherData = {
            name: weatherData.name,
            code: weatherData.code || weatherData.condition.code,
            is_day: weatherData.is_day,
            temp: Math.round(weatherData["temp_"+symbol]),
            feelslike: Math.round(weatherData["feelslike_"+symbol]),
            high: Math.round(weatherData["maxtemp_"+symbol]),
            low: Math.round(weatherData["mintemp_"+symbol]),
    }

    let name = weatherData.name;
    if (weatherData.name.length == 16) {
        const cropped: number =  parseInt(weatherData.name.substring(11,13));
        name = cropped < 12 ? (cropped || 12) + "am" : (cropped % 12 || 12) + "pm"
    }
    return <>
        <div className={`m-auto text-center relative z-10 ${className || ''}`}>
            <h2 className="text-md md:text-md lg:text-xl font-bold mb-1">{name}</h2>
            <span className="material-symbols-rounded text-[1em]! md:text-[2em]! lg:text-[4em]! m-auto">{getWeatherIcon(formattedWeatherData.code, formattedWeatherData.is_day)}</span>
            <div className="flex w-fit text-md md:text-lg lg:text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                {!Number.isNaN(formattedWeatherData.feelslike) && <>
                    <h2 className="">{formattedWeatherData.feelslike}°</h2>
                </>}
                {Number.isNaN(formattedWeatherData.feelslike) && <>
                    <h2 className="">{formattedWeatherData.high}°</h2>
                    <h2 className=""></h2>
                    <h2 className="text-zinc-400">{formattedWeatherData.low}°</h2>
                </>}
            </div>
        </div>
    </>
}

export default WeatherBox;