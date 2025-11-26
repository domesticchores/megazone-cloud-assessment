import { useState, useEffect } from "react"
import CurrentWeather from "./components/CurrentWeather"
import Humidity from "./components/Humidity"
import TomorrowPredicted from "./components/TomorrowPredicted"
import UVIndex from "./components/UVIndex"
import WeatherBox from "./components/WeatherBox"
import WindDirection from "./components/WindDirection"
import { getBulkData, getCurrentData } from "./lib/weatherApi"

import mockData from "./assets/mockForecast.json"
import FavoriteBar from "./components/FavoriteBar"
import Blur from "./components/Blur"
import TodayForecast from "./components/TodayForecast"

interface weatherVariables {
    city: string,
    favorites: string[],
    symbol: string,
    setCity: Function,
    setFavorites: Function,
    setSymbol: Function
}

interface formattedData {
    name: any,
    code: any,
    is_day: any,
    temp_c: number,
    temp_f: number,
    feelslike_c: number,
    feelslike_f: number,
    uv: any,
    speed: number,
    direction: any,
    percentage: any,
    symbol: string,
    forecast: any[],
    tomorrow: {
        code: any,
        maxtemp_c: any,
        maxtemp_f: any,
        mintemp_c: any,
        mintemp_f: any,
    }
}

function Grid(varData: weatherVariables) {

  const mockWeatherBoxData = {name:"Paris",code:'1003','high':43,'low':29,'symbol':'F'};
  const mockCurrentWeatherData = {name:"Rochester",code:'1003','temp':40,'feelslike':35,'symbol':'F'};
  const mockUV = {uv: 0}
  const mockHumidity = {percentage: 57}
  const mockWindDirection = {speed: 7.6, direction: "NW"}

  const city = varData.city;
  const favorites = varData.favorites;
  const symbol = varData.symbol

  const [data, setData] = useState<any>(null);
  const [favData, setFavData] = useState<any>(null);

  useEffect(() => {
    getCurrentData(city).then((res) => {
        console.log(res);
        setData(res);
    });
  }, [city]);

  useEffect(() => {
    getBulkData(favorites).then((res) => {
        console.log(res.bulk);
        setFavData(res.bulk);
    });
  }, [favorites]);

//   if (!data || !favData) return <div className="bg-primary w-screen h-screen pt-12">Error loading data.</div>

    let formattedCurrentData = null;
    try {
        formattedCurrentData = {
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
            forecast: [
                ...data.forecast.forecastday[0].hour,
                ...data.forecast.forecastday[1].hour
            ],
            tomorrow: {
                code: data.forecast.forecastday[1].day.condition.code,
                maxtemp_c: data.forecast.forecastday[1].day.maxtemp_c,
                maxtemp_f: data.forecast.forecastday[1].day.maxtemp_f,
                mintemp_c: data.forecast.forecastday[1].day.mintemp_c,
                mintemp_f: data.forecast.forecastday[1].day.mintemp_f,
            }
        }
    } catch {
        formattedCurrentData = null;
    }

  return (
    // main container
    <div className="bg-primary w-screen h-screen pt-12">
        {/* grid container, with horizontal padding */}
        <FavoriteBar dataArr={favData} symbol={symbol}></FavoriteBar>
        <div className="grid w-screen h-full grid-rows-3 md:grid-cols-5 sm:grid-cols-1 gap-4 max-w-6xl mx-auto py-8 px-4 z-10">

            <div className="bg-widget h-full rounding p-4 md:p-8 col-span-3 md:col-span-2 row-span-3 relative overflow-hidden">
                <CurrentWeather weatherData={formattedCurrentData}></CurrentWeather>
            </div>

            <div className="bg-widget h-full rounding p-2 col-span-1 flex relative overflow-hidden">
                <WindDirection direction={formattedCurrentData?.direction} speed={formattedCurrentData?.speed || 0}/>
            </div>
            <div className="bg-widget h-full rounding p-2 col-span-1 flex relative overflow-hidden">
                <Humidity percentage={formattedCurrentData?.percentage}/>
            </div>
            <div className="bg-widget h-full rounding p-2 col-span-1 flex relative overflow-hidden">
                <UVIndex index={formattedCurrentData?.uv}/>
            </div>
            
            <div className="bg-widget h-full rounding p-2 col-span-3 relative overflow-hidden">
                <TodayForecast weatherData={formattedCurrentData} symbol={symbol}></TodayForecast>
            </div>

            <div className="bg-widget h-full rounding py-4 px-12 col-span-3 flex relative overflow-hidden">
                <TomorrowPredicted weatherData={{name: formattedCurrentData?.name,symbol:formattedCurrentData?.symbol,...formattedCurrentData?.tomorrow}}></TomorrowPredicted>
            </div>
        </div>
    </div>
  )
}

export default Grid;
