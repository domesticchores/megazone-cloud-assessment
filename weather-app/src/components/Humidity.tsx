import Blur from "./Blur";

function Humidity(data: {percentage: number}) {
    if (!data.percentage) return <div></div>
    return <>
        {data.percentage > 30 && <Blur x={"right"} y={"top"} size={"sm"} color={"blue"}/>}
        {data.percentage > 60 && <Blur x={"left"} y={"bottom"} size={"sm"} color={"blue"}/>}
        <div className="absolute inset-0 border-3 w-full h-full brightness-[300] rounding border-zinc-300/25 z-0"></div>

        <div className="m-auto text-center relative z-10">
            <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto">water_voc</span>
            <h2 className="text-xl font-bold">{data.percentage}% Humidity</h2>
        </div>
    </>
}

export default Humidity;