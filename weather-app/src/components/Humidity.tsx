function Humidity(data: {percentage: number}) {
    return <>
        <div className="bg-widget h-full rounded-4xl p-2 col-span-1 flex">
            <div className="m-auto text-center">
                <span className="material-symbols-rounded text-[2em]! md:text-[5em]! lg:text-[7em]! m-auto">water_voc</span>
                <h2 className="text-xl font-bold">{data.percentage}% Humidity</h2>
            </div>
        </div>
    </>
}

export default Humidity;