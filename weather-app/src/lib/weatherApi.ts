const headers = {
          'Content-Type': 'application/json',
          'key': import.meta.env.VITE_KEY,
}

export async function getCurrentData(city: string) {
    const date = new Date();
    const day = date.getDate()
    const month = date.getMonth()+1

    const dateString = date.getFullYear()+"-"+(month < 10 ? '0' + month : month)+"-"+(day < 10 ? '0' + day : day)
    console.log(dateString)


    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?q=${city}&days=1&dt=${dateString}`,{
        method: 'GET',
        headers: headers
    })

    return res.json()
}