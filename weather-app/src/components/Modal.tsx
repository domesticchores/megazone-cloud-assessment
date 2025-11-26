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
        <div className="absolute w-screen h-screen inset-0 flex z-50">
            <div className="absolute w-screen h-screen inset-0 bg-black/50 z-10" onClick={()=>{toggle(false)}}></div>
            <div className="relative w-3/4 md:max-w-lg lg:max-w-xl h-1/2 bg-white rounded-sm m-auto z-20 p-4 text-black">
                <h1 className="text-xl font-semibold">Weather Configuration</h1>
                <hr/>
                <form action="submit" onSubmit={handleSubmit}>
                    <div className="w-full h-64 overflow-y-scroll scrollbar-thin p-4">
                                            <label htmlFor="city" className="mr-2">Current City:</label>
                    <input name="city" defaultValue={data.city || ''} className="border"></input>

                    <br className="m-5"></br>

                    <label htmlFor="favorites" className="mr-2">Favorites:</label>
                    <div className="mb-2">
                        {localFavorites.map((city: string, idx: number)=>{
                            return <div key={city+idx} className="flex">
                                <input name="favorites" key={"input"+city+idx} defaultValue={city} className="border mb-1 w-full" onChange={(e:any)=>{editCity(idx,e)}}></input>
                                <button key={"button-"+city+idx} className="h-6 aspect-square bg-red-500" type="button" onClick={()=>{removeCity(idx)}}>-</button>
                            </div>
                        })}
                        <button className="h-6 aspect-square bg-green-500" type="button" onClick={addCity}>+</button>
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

                    <button className="absolute bottom-3 right-4 bg-blue-400 hover:bg-blue-500 p-2 text-white rounded-sm" type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    </>
}

export default Modal;