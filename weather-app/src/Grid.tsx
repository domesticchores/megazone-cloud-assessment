
function Grid() {
  return (
    <div className="bg-yellow-200 w-screen h-screen">
        <div className="grid w-screen h-screen md:grid-cols-5 sm:grid-cols-1 pt-12 max-w-6xl mx-auto">
            <div className="md:col-span-2 p-8">
                <div className="bg-yellow-500 h-full rounded-4xl p-8">Box1</div>
            </div>
            <div className="md:col-span-3 grid p-8 gap-x-8 gap-y-4">
                <div className="bg-yellow-500 h-full rounded-4xl p-8">Box1</div>

                <div className="grid grid-cols-3 gap-x-4 h-full">
                    <div className="bg-yellow-500 h-full rounded-4xl p-8">Box1</div>
                    <div className="bg-yellow-500 h-full rounded-4xl p-8">Box1</div>
                    <div className="bg-yellow-500 h-full rounded-4xl p-8">Box1</div>
                </div>

                <div className="bg-yellow-500 h-full rounded-4xl p-8">Box1</div>
            </div>
        </div>
    </div>
  )
}

export default Grid
