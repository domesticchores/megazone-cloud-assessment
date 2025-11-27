import Blur from "./Blur";

function UVIndex({uv}: {uv: number}) {
    if (!uv && uv!=0) return <div className="m-auto text-center relative z-10 animate-pulse">
        <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto text-zinc-500">sunny</span>
        <div className="w-full h-[1em] rounding bg-zinc-500"></div>
    </div>
    return <>
        {uv > 2 && <Blur x={"left"} y={"bottom"} size={"sm"} color={"orange"}/>}
        {uv > 5 && <Blur x={"right"} y={"top"} size={"sm"} color={"orange"}/>}

        <div className="m-auto text-center relative z-10">
            <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto">sunny</span>
            <h2 className="text-xl font-bold">UV Index {uv}</h2>
        </div>
    </>
}

export default UVIndex;