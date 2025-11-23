function Grid() {
  return (
    // main container
    <div className="bg-yellow-200 w-screen h-screen pt-12">
        {/* grid container, with horizontal padding */}
        <div className="grid w-screen h-full grid-rows-3 md:grid-cols-6 sm:grid-cols-1 gap-4 max-w-7xl mx-auto py-8">
            <div className="bg-yellow-500 h-full rounded-4xl p-8 col-span-1 row-span-3">Box1</div>
            <div className="bg-yellow-500 h-full rounded-4xl p-8 col-span-2 row-span-3">
                <div className="w-full h-1/2 bg-amber-600 flex">
                    <span className="material-symbols-rounded text-[10em]! md:text-[12em]! lg:text-[15em]! m-auto">moon_stars</span>
                </div>
                <div className="w-full h-1/5 bg-amber-700">
                    
                </div>
                <div className="w-full h-3/10 bg-amber-800">

                </div>
            </div>
            <div className="bg-yellow-500 h-full rounded-4xl p-8 col-span-1">Box1</div>
            <div className="bg-yellow-500 h-full rounded-4xl p-8 col-span-1">Box1</div>
            <div className="bg-yellow-500 h-full rounded-4xl p-8 col-span-1">Box1</div>
            <div className="bg-yellow-500 h-full rounded-4xl p-8 col-span-3">Box1</div>
            <div className="bg-yellow-500 h-full rounded-4xl p-8 col-span-3">Box1</div>
        </div>
    </div>
  )
}

export default Grid
