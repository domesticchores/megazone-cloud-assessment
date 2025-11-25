interface BlurProps {
    x: string,
    y: string,
    size: string,
    color: string
}

function Blur({x,y,size,color}: BlurProps) {

    return <>
            <div className={`absolute ${x}-0 ${y}-0 gradient-${size}-big bg-${color}-500 rounded-full`}></div>
            <div className={`absolute ${x}-0 ${y}-0 gradient-${size}-small bg-${color}-500 `}></div>
        </>
}

export default Blur;