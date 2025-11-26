import { useState } from "react";
import WeatherBox from "./WeatherBox";

interface FavoriteProps {
    dataArr: any[],
    symbol: string
}

function FavoriteBar({dataArr, symbol}: FavoriteProps) {
    const [isOpen, setOpen] = useState<boolean>(true)

    return <div className="absolute h-screen w-fit inset-0 flex z-50">
    <div className={`bg-zinc-900 h-full left-0 top-0 z-30 pt-12 transition-all ${isOpen ? "ml-0" : "-ml-38 lg:-ml-47"}`}>
        <div className="w-full h-1/8 flex py-8 px-4 lg:px-8">
            <h1 className="text-3xl font-semibold text-center w-full">Favorites</h1>
        </div>
        <div className="w-full h-7/8 px-4 lg:px-8 py-2 overflow-y-scroll custom-scroll">
            {dataArr.map((data: any) => {
                return <WeatherBox symbol={symbol} key={data.query.location.name} className="mb-8" weatherData={{name:data.query.location.name,...data.query.current}}></WeatherBox>
                })}
        </div>
    </div>
    <button className="w-12 h-12 my-auto bg-white" onClick={()=>{setOpen(!isOpen)}}>
        <span className="material-symbols-rounded text-[3em]! text-black">{isOpen ? "arrow_left" : "arrow_right"}</span>
    </button>
    </div>
}

export default FavoriteBar;