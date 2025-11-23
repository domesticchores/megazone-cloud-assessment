function Grid() {
  return (
    // main container
    <div className="bg-yellow-200 w-screen h-screen pt-12">
        {/* grid container, with horizontal padding */}
        <div className="grid w-screen h-full grid-rows-3 md:grid-cols-6 sm:grid-cols-1 gap-4 max-w-7xl mx-auto py-8 px-4">
            <div className="bg-yellow-500 h-full rounded-4xl col-span-1 row-span-2 md:row-span-3 overflow-hidden">
                <div className="w-full h-full p-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-amber-800 scrollbar-track-amber-600">
                <h1 className="text-3xl font-semibold text-center mb-4">Favorites</h1>
                <div className="grid gap-8 h-full">
                    <div className="m-auto text-center">
                        <h2 className="text-2xl font-bold">London</h2>
                        <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[4em]! m-auto">air</span>
                        <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                            <h2 className="">43°</h2>
                            <h2 className="">/</h2>
                            <h2 className="">29°</h2>
                        </div>
                    </div>

                    <div className="m-auto text-center">
                        <h2 className="text-2xl font-bold">Paris</h2>
                        <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[4em]! m-auto">air</span>
                        <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                            <h2 className="">43°</h2>
                            <h2 className="">/</h2>
                            <h2 className="">29°</h2>
                        </div>
                    </div>

                    <div className="m-auto text-center">
                        <h2 className="text-2xl font-bold">Paris</h2>
                        <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[4em]! m-auto">air</span>
                        <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                            <h2 className="">43°</h2>
                            <h2 className="">/</h2>
                            <h2 className="">29°</h2>
                        </div>
                    </div>

                    <div className="m-auto text-center">
                        <h2 className="text-2xl font-bold">Paris</h2>
                        <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[4em]! m-auto">air</span>
                        <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                            <h2 className="">43°</h2>
                            <h2 className="">/</h2>
                            <h2 className="">29°</h2>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="bg-yellow-500 h-full rounded-4xl p-8 col-span-2 row-span-2 md:row-span-3">
                <div className="w-full h-1/2 flex">
                    <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[15em]! m-auto">moon_stars</span>
                </div>
                <div className="w-full h-2/12 text-center">
                    <h1 className="text-3xl">Partly Cloudy.</h1>
                </div>
                <div className="w-full h-4/12 text-center">
                    <h1 className="text-8xl font-bold">35°C</h1>
                    <p className="text-2xl">Actual: 40°</p>
                </div>
            </div>
            <div className="bg-yellow-500 h-full rounded-4xl p-2 col-span-1 flex">
                <div className="m-auto text-center">
                    <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[7em]! m-auto">air</span>
                    <h2 className="text-xl font-bold">7.6 MPH</h2>
                </div>
            </div>
            <div className="bg-yellow-500 h-full rounded-4xl p-2 col-span-1 flex">
                <div className="m-auto text-center">
                    <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[7em]! m-auto">water_voc</span>
                    <h2 className="text-xl font-bold">53% Humidity</h2>
                </div>
            </div>
            <div className="bg-yellow-500 h-full rounded-4xl p-2 col-span-1 flex">
                <div className="m-auto text-center">
                    <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[7em]! m-auto">sunny</span>
                    <h2 className="text-xl font-bold">UV Index 0</h2>
                </div>
            </div>
            <div className="bg-yellow-500 h-full rounded-4xl p-2 col-span-3 flex">
                <div className="m-auto text-center">
                    <h2 className="text-2xl font-bold">NOW</h2>
                    <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[4em]! m-auto">air</span>
                    <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                        <h2 className="">43°</h2>
                        <h2 className="">/</h2>
                        <h2 className="">29°</h2>
                    </div>
                </div>

                <div className="m-auto text-center">
                    <h2 className="text-2xl font-bold">11AM</h2>
                    <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[4em]! m-auto">air</span>
                    <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                        <h2 className="">43°</h2>
                        <h2 className="">/</h2>
                        <h2 className="">29°</h2>
                    </div>
                </div>

                <div className="m-auto text-center">
                    <h2 className="text-2xl font-bold">12PM</h2>
                    <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[4em]! m-auto">air</span>
                    <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                        <h2 className="">43°</h2>
                        <h2 className="">/</h2>
                        <h2 className="">29°</h2>
                    </div>
                </div>

                <div className="m-auto text-center">
                    <h2 className="text-2xl font-bold">1PM</h2>
                    <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[4em]! m-auto">air</span>
                    <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                        <h2 className="">43°</h2>
                        <h2 className="">/</h2>
                        <h2 className="">29°</h2>
                    </div>
                </div>

                <div className="m-auto text-center">
                    <h2 className="text-2xl font-bold">2PM</h2>
                    <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[4em]! m-auto">air</span>
                    <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                        <h2 className="">43°</h2>
                        <h2 className="">/</h2>
                        <h2 className="">29°</h2>
                    </div>
                </div>
            </div>
            <div className="bg-yellow-500 h-full rounded-4xl py-4 px-12 col-span-3 flex">
                <div className="w-1/2 text-center flex">
                    <div className="w-fit m-auto">
                        <h2 className="text-2xl font-semibold">Tomorrow's Forecast</h2>
                        <p className="my-auto text-xl text-center w-full">Patchy rain nearby.</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="w-fit m-auto">
                        <span className="material-symbols-rounded text-[6.5em]! md:text-[12em]! lg:text-[7em]! flex m-auto">rainy</span>
                    </div>
                    <div className="flex w-fit text-2xl font-bold gap-x-1 items-center m-auto -mt-2">
                        <h2 className="">43°</h2>
                        <h2 className="text-3xl">/</h2>
                        <h2 className="">29°</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grid
