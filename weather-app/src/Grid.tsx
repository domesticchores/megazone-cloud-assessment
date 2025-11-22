
function Grid() {
  return (
    <div className="grid w-screen h-screen md:grid-cols-3 sm:grid-cols-1 pt-12">
        <div className="bg-yellow-100">Left</div>
        <div className="bg-yellow-100 md:col-span-2">Right</div>
    </div>
  )
}

export default Grid
