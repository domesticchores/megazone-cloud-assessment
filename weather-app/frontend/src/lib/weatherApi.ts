import mockForecast from "../assets/mockForecast.json"
import mockBulk from "../assets/mockBulk.json"

const headers = {
          'Content-Type': 'application/json'
}

export async function getCurrentData(city: string) {
    const res = await fetch(import.meta.env.VITE_API+"/main",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify({city:city})
    });
    if (!res.ok) {
        console.error("could not get data");
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

    const res = await fetch(import.meta.env.VITE_API+"/favorites",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formattedCities)
    });
    if (!res.ok) {
        console.error("could not get data");
        return mockBulk;
    }

    return res.json();
}