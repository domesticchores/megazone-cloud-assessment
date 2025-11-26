import Blur from "./Blur";

function WindDirection({speed,direction}: {speed: number, direction: string}) {
    if (!speed || !direction) return <div></div>
    return <>
        {speed > 3 && <Blur x={"right"} y={"top"} size={"sm"} color={"blue"}/>}
        {speed > 8 && <Blur x={"left"} y={"bottom"} size={"sm"} color={"blue"}/>}

        <div className="m-auto text-center relative z-10">
            <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto">air</span>
            <h2 className="text-xl font-bold">{speed} MPH {direction}</h2>
        </div>
    </>
}

export default WindDirection;