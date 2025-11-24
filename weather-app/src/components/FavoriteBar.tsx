import WeatherBox from "./WeatherBox";

interface FavoriteProps {
    dataArr: any[],
    symbol: string
}

function FavoriteBar({dataArr, symbol}: FavoriteProps) {
    return <>
        <div className="w-full h-1/8 flex py-8 px-4 lg:px-8">
            <h1 className="text-3xl font-semibold text-center w-full">Favorites</h1>
        </div>
        <div className="w-full h-7/8 px-4 lg:px-8 py-2 overflow-y-scroll custom-scroll">
            {dataArr.map((data: any) => {
                return <WeatherBox symbol={symbol} key={data.query.location.name} className="mb-8" weatherData={{name:data.query.location.name,...data.query.current}}></WeatherBox>
                })}
        </div>
    </>
}

export default FavoriteBar;