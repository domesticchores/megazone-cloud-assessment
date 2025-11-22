import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './NavBar.tsx'
import Grid from './Grid.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar/>
    <Grid/>
  </StrictMode>,
)
