import Blur from "./Blur";

function UVIndex(data: any) {
    if (!data) return <div></div>
    return <>
        {data.index > 2 && <Blur x={"left"} y={"bottom"} size={"sm"} color={"orange"}/>}
        {data.index > 5 && <Blur x={"right"} y={"top"} size={"sm"} color={"orange"}/>}
        <div className="absolute inset-0 border-3 w-full h-full brightness-[300] rounding border-zinc-300/25"></div>

        <div className="m-auto text-center relative z-10">
            <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto">sunny</span>
            <h2 className="text-xl font-bold">UV Index {data.index}</h2>
        </div>
    </>
}

export default UVIndex;