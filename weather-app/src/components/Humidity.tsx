import Blur from "./Blur";

function Humidity(data: {percentage: number}) {
    return <>
        <div className="bg-widget h-full rounding p-2 col-span-1 flex relative overflow-hidden">
            {data.percentage > 30 && <Blur x={"right"} y={"top"} size={"sm"} color={"blue"}/>}
            {data.percentage > 60 && <Blur x={"left"} y={"bottom"} size={"sm"} color={"blue"}/>}
            <div className="absolute inset-0 border-3 w-full h-full brightness-[300] rounding border-zinc-300/25"></div>

            <div className="m-auto text-center">
                <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto">water_voc</span>
                <h2 className="text-xl font-bold">{data.percentage}% Humidity</h2>
            </div>
        </div>
    </>
}

export default Humidity;