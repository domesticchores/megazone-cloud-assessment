import Blur from "./Blur";

function Humidity(data: {percentage: number}) {
    if (!data.percentage && data.percentage != 0) return <div id="humidity" className="m-auto text-center relative z-10 animate-pulse">
        <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto text-zinc-500">water_voc</span>
        <div className="w-full h-[1em] rounding bg-zinc-500"></div>
    </div>
    return <>
        {data.percentage > 30 && <Blur x={"right"} y={"top"} size={"sm"} color={"blue"}/>}
        {data.percentage > 60 && <Blur x={"left"} y={"bottom"} size={"sm"} color={"blue"}/>}

        <div id="humidity" className="m-auto text-center relative z-10">
            <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto">water_voc</span>
            <h2 className="text-xl font-bold">{data.percentage}% Humidity</h2>
        </div>
    </>
}

export default Humidity;