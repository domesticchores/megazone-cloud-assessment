const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

const headers = {
  'Content-Type': 'application/json',
  'key': process.env.WEATHER_API_KEY,
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use(cors({origin:"http://localhost:5173"}))

app.post('/main', async (req, res) => {
  try {
  const city = req.body.city;
  if (!city) {
    return res.status(400).json({message: "Bad City Request!"});
  }
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?q=${city}&days=2`,{
      method: 'GET',
      headers: headers
  });
  if (!response.ok) {
    const err = await response.json();
      console.error("could not get response: ", err);
      return res.status(400).json(err);
  }

  res.json(await response.json());
  } catch (err) {
    console.log("server error: ", err)
    return res.status(500).json({message: "Internal Server Error", error: err})
  }
})

app.post('/favorites', async (req, res) => {
  try {
    const favorites = req.body;
    if (!favorites) {
      return res.status(400).json({message: "Bad Request!"});
    }
    const response = await fetch("http://api.weatherapi.com/v1/current.json?q=bulk",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(favorites)
    });
    if (!response.ok) {
      const err = await response.json();
        console.error("could not get response: ", err);
        return res.status(400).json(err);
    }

    res.json(await response.json());
  } catch (err) {
    console.log("server error: ", err)
    return res.status(500).json({message: "Internal Server Error", error: err})
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
