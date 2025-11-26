import { useState } from "react";
import WeatherBox from "./WeatherBox";

interface FavoriteProps {
    dataArr: any[],
    symbol: string
}

function FavoriteBar({dataArr, symbol}: FavoriteProps) {
    if (!dataArr) return <div></div>
    const [isOpen, setOpen] = useState<boolean>(true)

    return <div className="absolute h-screen w-fit inset-0 flex z-20">
    <div className={`bg-favorites h-full left-0 top-0 z-30 pt-12 transition-all ${isOpen ? "ml-0" : "-ml-38 lg:-ml-47"}`}>
        <div className="w-full h-1/8 flex py-8 px-4 lg:px-8">
            <h1 className="text-3xl font-semibold text-center w-full">Favorites</h1>
        </div>
        <div className="w-full h-7/8 px-4 lg:px-8 py-2 overflow-y-scroll custom-scroll">
            {dataArr.map((data: any) => {
                return <WeatherBox symbol={symbol} key={data.query.location.name} className="mb-8" weatherData={{name:data.query.location.name,...data.query.current}}></WeatherBox>
                })}
        </div>
    </div>
    <button className="w-12 h-20 border-2 border-zinc-600 bg-stone-800 -ml-1.5 rounded-r-2xl my-auto flex" onClick={()=>{setOpen(!isOpen)}}>
        <span className="material-symbols-rounded m-auto text-[2.5em]! text-yellow-500 p-0">{isOpen ? "close" : "bookmark_star"}</span>
    </button>
    </div>
}

export default FavoriteBar;