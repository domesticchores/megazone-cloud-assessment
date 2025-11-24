import { useState, useEffect } from "react"
import CurrentWeather from "./components/CurrentWeather"
import Humidity from "./components/Humidity"
import TomorrowPredicted from "./components/TomorrowPredicted"
import UVIndex from "./components/UVIndex"
import WeatherBox from "./components/WeatherBox"
import WindDirection from "./components/WindDirection"
import { getCurrentData } from "./lib/weatherApi"

function Grid() {

  const mockWeatherBoxData = {name:"Paris",code:'1003','high':43,'low':29,'symbol':'F'};
  const mockCurrentWeatherData = {name:"Rochester",code:'1003','temp':40,'feelslike':35,'symbol':'F'};
  const mockUV = {uv: 0}
  const mockHumidity = {percentage: 57}
  const mockWindDirection = {speed: 7.6, direction: "NW"}

  const [data, setData] = useState<any>(null);

  const city = "Rochester, New York";
  const symbol = 'f';

  useEffect(() => {
    getCurrentData(city).then((res) => {
        setData(res)
    });
  }, []);

  console.log(data)

  let formattedCurrentData = {
    ...mockCurrentWeatherData,
    ...mockHumidity,
    ...mockUV,
    ...mockWindDirection
  }

   if (data != null) {
        formattedCurrentData = {
            name: data.location.name,
            code: data.current.condition.code,
            temp: Math.round(data.current["temp_"+symbol]),
            feelslike: Math.round(data.current["feelslike_"+symbol]),
            uv: data.current.uv,
            speed: Math.round(data.current.wind_mph),
            direction: data.current.wind_dir,
            percentage: data.current.humidity,
            symbol: symbol.toUpperCase()
        }
   }
  
  console.log(formattedCurrentData)

  return (
    // main container
    <div className="bg-primary w-screen h-screen pt-12">
        {/* grid container, with horizontal padding */}
        <div className="grid w-screen h-full grid-rows-3 md:grid-cols-6 sm:grid-cols-1 gap-4 max-w-7xl mx-auto py-8 px-4">
            <div className="bg-widget h-full rounded-4xl col-span-1 row-span-2 md:row-span-3 overflow-hidden">
                <div className="w-full h-full p-8 overflow-y-scroll custom-scroll">
                    <h1 className="text-3xl font-semibold justify-start text-center mb-4">Favorites</h1>
                    
                    <WeatherBox className="mb-8" weatherData={mockWeatherBoxData}></WeatherBox>
                    <WeatherBox className="mb-8" weatherData={mockWeatherBoxData}></WeatherBox>
                    <WeatherBox className="mb-8" weatherData={mockWeatherBoxData}></WeatherBox>
                    <WeatherBox className="mb-8" weatherData={mockWeatherBoxData}></WeatherBox>
                </div>
            </div>

            <div className="bg-widget h-full rounded-4xl p-8 col-span-2 row-span-2 md:row-span-3">
                <CurrentWeather weatherData={formattedCurrentData}></CurrentWeather>
            </div>

            <WindDirection direction={formattedCurrentData.direction} speed={formattedCurrentData.speed}/>
            <Humidity percentage={formattedCurrentData.percentage}/>
            <UVIndex index={formattedCurrentData.uv}/>
            
            <div className="bg-widget h-full rounded-4xl p-2 col-span-3">
                <h2 className="text-2xl font-semibold text-center mb-2">Today's Forecast</h2>
                <div className="flex">
                    <WeatherBox weatherData={mockWeatherBoxData}/>
                    <WeatherBox weatherData={mockWeatherBoxData}/>
                    <WeatherBox weatherData={mockWeatherBoxData}/>
                    <WeatherBox weatherData={mockWeatherBoxData}/>
                    <WeatherBox weatherData={mockWeatherBoxData}/>
                </div>
            </div>

            <div className="bg-widget h-full rounded-4xl py-4 px-12 col-span-3 flex">
                <TomorrowPredicted weatherData={mockWeatherBoxData}></TomorrowPredicted>
            </div>
        </div>
    </div>
  )
}

export default Grid;
