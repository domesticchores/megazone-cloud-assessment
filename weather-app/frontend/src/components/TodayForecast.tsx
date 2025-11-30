import Blur from "./Blur"
import WeatherBox from "./WeatherBox"

interface Forecast {
    weatherData: any,
    symbol: string
}

function TodayForecast({weatherData, symbol}: Forecast) {
    const hour = new Date().getHours()
    if (!weatherData) return <div id="today_forecast" className="h-full w-full flex flex-col justify-center animate-pulse">
        <h2 className="text-2xl font-semibold text-center mb-2 py-2"><span className="block w-full h-[1em] bg-zinc-500 rounding"></span></h2>
        <div className="flex">
            {[0,1,2,3,4].map((idx: number) => {
                return <WeatherBox symbol={symbol} key={idx} weatherData={null}></WeatherBox>
            })}
        </div>
    </div>
    return <>
        <Blur x={"right"} y={"top"} size={"lg"} color={weatherData.forecast[hour+5].feelslike_f < 69 ? "blue" : "orange"}/>

        <div id="today_forecast" className="h-full w-full flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-center mb-2">Today's Forecast</h2>
            <div className="flex">
                {[0,1,2,3,4].map(index => weatherData.forecast[hour+index]).map((hour: any) => {
                    return <WeatherBox symbol={symbol} key={hour.time} weatherData={{name: hour.time,...hour}}></WeatherBox>
                })}
            </div>
        </div>
    </>
}

export default TodayForecast;