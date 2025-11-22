import './App.css'
import Logo from './assets/react.svg'

function NavBar() {
  return (
    <>
      <nav className='fixed flex h-12 bg-amber-300 z-10 w-screen items-center px-8'>
        <div className='h-fit flex gap-x-2'>
            <img src={Logo} alt="Logo" />
            <h1 className='text-3xl font-bold'>Duumori</h1>
        </div>
      </nav>
    </>
  )
}

export default NavBar
