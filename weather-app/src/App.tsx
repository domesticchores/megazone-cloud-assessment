import { useState } from 'react'
import './index.css'
import NavBar from './NavBar.tsx'
import Grid from './Grid.tsx'

function App() {
  const [city, setCity] = useState<string>("Rochester, New York");
  const [favorites, setFavorites] = useState<string[]>(["San Antonio, Texas","Avenel, New Jersey","Ann Arbor, Michigan","Washington, District of Columbia, US"]);
  const [symbol, setSymbol] = useState<string>('f');

  return <>
    <NavBar city={city} favorites={favorites} symbol={symbol} setCity={setCity} setFavorites={setFavorites} setSymbol={setSymbol}/>
    <Grid city={city} favorites={favorites} symbol={symbol} setCity={setCity} setFavorites={setFavorites} setSymbol={setSymbol}/>
  </>
}

export default App
