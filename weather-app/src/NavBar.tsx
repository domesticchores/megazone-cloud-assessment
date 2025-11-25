import './App.css'

function NavBar() {
  return (
    <>
      <nav className='fixed flex h-16 bg-header z-10 w-screen items-center px-8'>
        <div className='h-fit flex gap-x-2'>
            <span className="material-symbols-rounded lg:text-[2em]! m-auto">nest_farsight_weather</span>
            <h1 className='text-3xl font-bold'>Duumori</h1>
        </div>
      </nav>
    </>
  )
}

export default NavBar
