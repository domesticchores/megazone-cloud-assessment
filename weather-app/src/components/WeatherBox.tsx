import { getWeatherIcon } from "../assets/Codes";

interface WeatherProps {
    className?: string,
    weatherData: any,
    symbol: string
}

function WeatherBox({className, weatherData, symbol}: WeatherProps) {
    const formattedWeatherData = {
            name: weatherData.name,
            code: weatherData.code || weatherData.condition.code,
            temp: Math.round(weatherData["temp_"+symbol]),
            feelslike: Math.round(weatherData["feelslike_"+symbol]),
            high: weatherData.high,
            low: weatherData.low
    }

    let name = weatherData.name;
    if (weatherData.name.length == 16) {
        const cropped: number =  parseInt(weatherData.name.substring(11,13));
        name = cropped <  12 ? cropped + "am" : (cropped % 12) + "pm"
    }
    return <>
        <div className={`m-auto text-center ${className || ''}`}>
            <h2 className="text-md md:text-lg lg:text-xl font-bold mb-1">{name}</h2>
            <span className="material-symbols-rounded text-[1em]! md:text-[2em]! lg:text-[4em]! m-auto">{getWeatherIcon(formattedWeatherData.code)}</span>
            <div className="flex w-fit text-md md:text-lg lg:text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                {formattedWeatherData.feelslike != undefined && <>
                    <h2 className="">{formattedWeatherData.feelslike}°</h2>
                </>}
                {formattedWeatherData.feelslike == undefined && <>
                    <h2 className="">{formattedWeatherData.high}°</h2>
                    <h2 className="">/</h2>
                    <h2 className="">{formattedWeatherData.low}°</h2>
                </>}
            </div>
        </div>
    </>
}

export default WeatherBox;