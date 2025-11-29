import mockForecast from "../assets/mockForecast.json"
import mockBulk from "../assets/mockBulk.json"

const API = import.meta.env.VITE_API || "http://localhost:3000"

const headers = {
          'Content-Type': 'application/json'
}

export async function getCurrentData(city: string) {
    const res = await fetch(API+"/main",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify({city:city})
    });
    if (!res.ok) {
        console.error("could not get data:", res.json());
        return mockForecast;
    }

    return res.json();
}

export async function getBulkData(cities: string[]) {

    const formattedCities = {
        "locations": [
            ...cities.map((name)=>{
                return {q: name}
            })
        ]
    }

    const res = await fetch(API+"/favorites",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formattedCities)
    });
    if (!res.ok) {
        console.error("could not get data: ", res.json());
        return mockBulk;
    }

    return res.json();
}