import Blur from "./Blur";

function WindDirection({speed,direction}: {speed: number, direction: string}) {
    if ((!speed && speed!=0) || !direction) return <div id="wind_direction" className="m-auto text-center relative z-10 animate-pulse">
        <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto text-zinc-500">air</span>
        <div className="w-full h-[1em] rounding bg-zinc-500"></div>
    </div>
    
    return <>
        {speed > 3 && <Blur x={"right"} y={"top"} size={"sm"} color={"blue"}/>}
        {speed > 8 && <Blur x={"left"} y={"bottom"} size={"sm"} color={"blue"}/>}

        <div id="wind_direction" className="m-auto text-center relative z-10">
            <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto">air</span>
            <h2 id="wd_text" className="text-xl font-bold">{speed} MPH {direction}</h2>
        </div>
    </>
}

export default WindDirection;