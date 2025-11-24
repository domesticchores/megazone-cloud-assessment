const headers = {
          'Content-Type': 'application/json',
          'key': import.meta.env.VITE_KEY,
}

export async function getCurrentData(city: string) {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?q=${city}&days=2`,{
        method: 'GET',
        headers: headers
    });
    if (!res.ok) {
        console.error("could not get data");
    }
    // console.log(res);

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
    
    const res = await fetch("http://api.weatherapi.com/v1/current.json?q=bulk",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formattedCities)
    });
    if (!res.ok) {
        console.error("could not get data");
    }
    console.log(res);

    return res.json();
}