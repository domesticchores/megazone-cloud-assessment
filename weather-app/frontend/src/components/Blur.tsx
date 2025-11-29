interface BlurProps {
    x: "left" | "right",
    y: "top" | "bottom",
    size: "sm" | "lg",
    color: "blue" | "orange"
}

function Blur({x,y,size,color}: BlurProps) {
    const varients = {
        blue: "bg-blue-500",
        orange: 'bg-orange-500',
        left: 'left-0',
        right: 'right-0',
        top: 'top-0',
        bottom: 'bottom-0'
    }
    
    return <>
            <div className={`absolute ${varients[x]} ${varients[y]} gradient-${size}-big ${varients[color]} rounded-full animate-custom transition-all z-0`}></div>
            <div className={`absolute ${varients[x]} ${varients[y]} gradient-${size}-small ${varients[color]} animate-custom transition-all z-0`}></div>
        </>
}

export default Blur;