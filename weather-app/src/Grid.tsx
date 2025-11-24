import { useState, useEffect } from "react"
import CurrentWeather from "./components/CurrentWeather"
import Humidity from "./components/Humidity"
import TomorrowPredicted from "./components/TomorrowPredicted"
import UVIndex from "./components/UVIndex"
import WeatherBox from "./components/WeatherBox"
import WindDirection from "./components/WindDirection"
import { getBulkData, getCurrentData } from "./lib/weatherApi"

import mockData from "./assets/mockForecast.json"

function Grid() {

  const mockWeatherBoxData = {name:"Paris",code:'1003','high':43,'low':29,'symbol':'F'};
  const mockCurrentWeatherData = {name:"Rochester",code:'1003','temp':40,'feelslike':35,'symbol':'F'};
  const mockUV = {uv: 0}
  const mockHumidity = {percentage: 57}
  const mockWindDirection = {speed: 7.6, direction: "NW"}

  const [data, setData] = useState<any>(null);
  const [favData, setFavData] = useState<any>(null);

  const city = "Rochester, New York";
  const favorites = ["San Antonio, Texas","Avenel, New Jersey","Ann Arbor, Michigan"]
  const symbol = 'f';

  useEffect(() => {
    getCurrentData(city).then((res) => {
        console.log(res);
        setData(res);
    });
  }, [city]);

  useEffect(() => {
    getBulkData(favorites).then((res) => {
        console.log(res);
        setFavData(res);
    });
  }, [city]);

  if (!data) return <div className="bg-primary w-screen h-screen pt-12"></div>

    const formattedCurrentData = {
        name: data.location.name,
        code: data.current.condition.code,
        is_day: data.current.is_day,
        temp_c: Math.round(data.current.temp_c),
        temp_f: Math.round(data.current.temp_f),
        feelslike_c: Math.round(data.current.feelslike_c),
        feelslike_f: Math.round(data.current.feelslike_f),
        uv: data.current.uv,
        speed: Math.round(data.current.wind_mph),
        direction: data.current.wind_dir,
        percentage: data.current.humidity,
        symbol: symbol,
        forecast: data.forecast.forecastday[0].hour,
        tomorrow: {
            code: data.forecast.forecastday[1].day.condition.code,
            maxtemp_c: data.forecast.forecastday[1].day.maxtemp_c,
            maxtemp_f: data.forecast.forecastday[1].day.maxtemp_f,
            mintemp_c: data.forecast.forecastday[1].day.mintemp_c,
            mintemp_f: data.forecast.forecastday[1].day.mintemp_f,
        }
    }

  return (
    // main container
    <div className="bg-primary w-screen h-screen pt-12">
        {/* grid container, with horizontal padding */}
        <div className="grid w-screen h-full grid-rows-3 md:grid-cols-6 sm:grid-cols-1 gap-4 max-w-7xl mx-auto py-8 px-4">
            <div className="bg-widget h-full rounded-4xl col-span-1 row-span-2 md:row-span-3 overflow-hidden">
                <div className="w-full h-full p-8 overflow-y-scroll custom-scroll">
                    <h1 className="text-3xl font-semibold justify-start text-center mb-4">Favorites</h1>
                    
                    <WeatherBox symbol={symbol} className="mb-8" weatherData={mockWeatherBoxData}></WeatherBox>
                    <WeatherBox symbol={symbol} className="mb-8" weatherData={mockWeatherBoxData}></WeatherBox>
                    <WeatherBox symbol={symbol} className="mb-8" weatherData={mockWeatherBoxData}></WeatherBox>
                    <WeatherBox symbol={symbol} className="mb-8" weatherData={mockWeatherBoxData}></WeatherBox>
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
                    {[8,12,16,18,20].map(index => formattedCurrentData.forecast[index]).map((hour: any) => {
                        return <WeatherBox symbol={symbol} key={hour.time} weatherData={{name: hour.time,...hour}}></WeatherBox>
                    })}
                </div>
            </div>

            <div className="bg-widget h-full rounded-4xl py-4 px-12 col-span-3 flex">
                <TomorrowPredicted weatherData={{name: formattedCurrentData.name,symbol:formattedCurrentData.symbol,...formattedCurrentData.tomorrow}}></TomorrowPredicted>
            </div>
        </div>
    </div>
  )
}

export default Grid;
