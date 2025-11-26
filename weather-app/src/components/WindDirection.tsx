import Blur from "./Blur";

function WindDirection(data: {speed: number, direction: string}) {
    return <>
        <div className="bg-widget h-full rounding p-2 col-span-1 flex relative overflow-hidden">
            {data.speed > 3 && <Blur x={"right"} y={"top"} size={"sm"} color={"blue"}/>}
            {data.speed > 8 && <Blur x={"left"} y={"bottom"} size={"sm"} color={"blue"}/>}
            <div className="absolute inset-0 border-3 w-full h-full brightness-[300] rounding border-zinc-300/25"></div>

            <div className="m-auto text-center relative z-10">
                <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto">air</span>
                <h2 className="text-xl font-bold">{data.speed} MPH {data.direction}</h2>
            </div>
        </div>
    </>
}

export default WindDirection;