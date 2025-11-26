import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

interface weatherVariables {
    city: string,
    favorites: string[],
    symbol: string,
    setCity: Function,
    setFavorites: Function,
    setSymbol: Function
}

function NavBar(data: weatherVariables) {
    const [isOpen, toggleModal] = useState<boolean>(false);
  return (
    <>
      <nav className='fixed flex h-16 bg-header z-30 w-screen items-center px-8'>
        <div className='h-fit flex gap-x-2'>
            <span className="material-symbols-rounded lg:text-[2em]! m-auto">nest_farsight_weather</span>
            <h1 className='text-3xl font-bold'>Duumori</h1>
        </div>
        <button onClick={()=>{toggleModal(true)}}>Toggle</button>
      </nav>
      <Modal toggle={toggleModal} isOpen={isOpen} data={data}></Modal>
    </>
  )
}

export default NavBar
