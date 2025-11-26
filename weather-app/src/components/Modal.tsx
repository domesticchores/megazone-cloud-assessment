import { useEffect, useState } from "react"

interface weatherVariables {
    city: string,
    favorites: string[],
    symbol: string,
    setCity: Function,
    setFavorites: Function,
    setSymbol: Function
}

function Modal({isOpen,toggle,data}: {isOpen: boolean, toggle: Function, data: weatherVariables}) {
    const [localFavorites, setLocalFavorites] = useState<string[]>(data.favorites)

    useEffect(()=>{
        toggle(isOpen)
    },[toggle])

    function handleSubmit(e: any): void {
        e.preventDefault();
        console.log(localFavorites.filter((item)=>item.trim().length > 0));
        data.setCity(e.target.city.value);
        data.setFavorites(localFavorites.filter((item)=>item.trim().length > 0));
        data.setSymbol(e.target.symbol.value)
        toggle(false);
    }

    function addCity(): void {
        setLocalFavorites([...localFavorites,""]);
    }

    function removeCity(idx:number): void {
        setLocalFavorites(localFavorites.filter((_, index) => index !== idx));
    }

    function editCity(idx:number, value: any): void {
        // purposefully don't set state, so that it doesn't update until very end
        localFavorites[idx] = value.target.value;
    }

    if (!isOpen) return <></>
    return <>
        <div className="absolute w-screen h-screen inset-0 flex z-50 leading-8">
            <div className="absolute w-screen h-screen inset-0 bg-black/50 z-10" onClick={()=>{toggle(false)}}></div>
            <div className="relative w-3/4 md:max-w-md lg:max-w-lg h-2/3 bg-modal rounding m-auto z-20 p-6 text-modal">
                <div className="h-fit">
                    <h1 className="text-xl font-semibold mb-2">Weather Configuration</h1>
                    <hr/>
                </div>
                <form action="submit" onSubmit={handleSubmit} className="flex flex-col h-11/12">
                    <div className="w-full overflow-y-scroll scrollbar-thin p-4 h-full">
                    <div className="w-full flex mb-5">
                        <label htmlFor="city" className="mr-2 w-1/3">Current City:</label>
                        <input name="city" defaultValue={data.city || ''} className="border-modal rounded-lg px-1 w-full"></input>
                    </div>

                    <label htmlFor="favorites" className="mr-2">Favorites:</label>
                    <div className="mb-5">
                        {localFavorites.map((city: string, idx: number)=>{
                            return <div key={city+idx} className="flex gap-x-1 my-1">
                                <input name="favorites" key={"input"+city+idx} defaultValue={city} className="border-modal rounded-lg px-1 mb-1 w-full" onChange={(e:any)=>{editCity(idx,e)}}></input>
                                <button key={"button-"+city+idx} className="aspect-square text-red-500 my-auto h-6 flex" type="button" onClick={()=>{removeCity(idx)}}>
                                    <span className="material-symbols-rounded text-[1.5em]! my-auto">close_small</span>
                                </button>
                            </div>
                        })}
                        <button className="h-6 aspect-square text-green-500" type="button" onClick={addCity}>
                            <span className="material-symbols-rounded text-[1.5em]!">add_circle</span>
                        </button>
                    </div>

                    <p>Symbol:</p>
                    <div className="flex gap-x-4">
                        <label htmlFor="symbol"> 
                        <input type="radio" name="symbol" value="f" defaultChecked={data.symbol === 'f'}></input>
                        Fahrenheit
                        </label>
                        <label htmlFor="symbol"> 
                        <input type="radio" name="symbol" value="c" defaultChecked={data.symbol === 'c'}></input>
                        Celcius
                        </label>
                    </div>
                    </div>

                    <button className="bg-blue-400 hover:bg-blue-500 p-1 mt-2 text-white rounded-lg" type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    </>
}

export default Modal;