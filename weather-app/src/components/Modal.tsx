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

    useEffect(()=>{
        toggle(isOpen)
    },[toggle])

    function handleSubmit(e: any): void {
        e.preventDefault();
        console.log(e.target.city.value, e.target.favorites.value, e.target.symbol.value);
        data.setCity(e.target.city.value);
        data.setSymbol(e.target.favorites.value);
        data.setSymbol(e.target.symbol.value)
        toggle(false);
    }

    if (!isOpen) return <></>
    return <>
        <div className="absolute w-screen h-screen inset-0 flex z-50">
            <div className="absolute w-screen h-screen inset-0 bg-black/50 z-10" onClick={()=>{toggle(false)}}></div>
            <div className="relative w-3/4 md:w-1/2 lg:w-1/3 h-1/2 bg-white rounded-sm m-auto z-20 p-4 text-black">
                <h1 className="text-xl font-semibold">Weather Configuration</h1>
                <hr/>
                <form action="submit" onSubmit={handleSubmit}>
                    <label htmlFor="city" className="mr-2">Current City:</label>
                    <input name="city" defaultValue={data.city || ''} className="border-2"></input>

                    <br className="m-5"></br>

                    <label htmlFor="favorites" className="mr-2">Favorites:</label>
                    <input name="favorites" defaultValue={data.favorites || ''} className="border-2"></input>

                    <br className="m-5"></br>

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

                    <button className="absolute bottom-4 right-4 bg-blue-400 hover:bg-blue-500 p-2 text-white rounded-sm" type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    </>
}

export default Modal;