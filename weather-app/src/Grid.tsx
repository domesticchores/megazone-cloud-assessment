import CurrentWeather from "./components/CurrentWeather"
import Humidity from "./components/Humidity"
import UVIndex from "./components/UVIndex"
import WeatherBox from "./components/WeatherBox"
import WindDirection from "./components/WindDirection"

function Grid() {

  const mockWeatherBoxData = {name:"Paris",code:'1003','high':'43','low':'29'};
  const mockCurrentWeatherData = {name:"Rochester",code:'1003','temp':'40','feelslike':'35'};

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
                <CurrentWeather weatherData={mockCurrentWeatherData}></CurrentWeather>
            </div>

            <WindDirection/>
            <Humidity/>
            <UVIndex/>
            
            <div className="bg-widget h-full rounded-4xl p-2 col-span-3 flex">
                <WeatherBox weatherData={mockWeatherBoxData}/>
            </div>
            <div className="bg-widget h-full rounded-4xl py-4 px-12 col-span-3 flex">
                <div className="w-1/2 text-center flex">
                    <div className="w-fit m-auto">
                        <h2 className="text-2xl font-semibold">Tomorrow's Forecast</h2>
                        <p className="my-auto text-xl text-center w-full">Patchy rain nearby.</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="w-fit m-auto">
                        <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[7em]! flex m-auto">rainy</span>
                    </div>
                    <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                        <h2 className="">43°</h2>
                        <h2 className="text-3xl">/</h2>
                        <h2 className="">29°</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grid
