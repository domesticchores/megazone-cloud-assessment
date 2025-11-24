import WeatherBox from "./WeatherBox";

interface WeatherProps {
    className?: string,
    weatherData: any
}

function TomorrowPredicted({className, weatherData}: WeatherProps) {
        return <>
        <div className={`w-1/2 text-center flex ${className || ''}`}>
            <div className="w-fit m-auto">
                <h2 className="text-2xl font-semibold">Tomorrow's Forecast</h2>
                <p className="my-auto text-xl text-center w-full">Patchy rain nearby.</p>
            </div>
        </div>
        <WeatherBox weatherData={weatherData} symbol={weatherData.symbol}></WeatherBox>
    </>
}

export default TomorrowPredicted;