import type { ReactNode } from "react";

interface WidgetProps {
    style: "sm" | "md-1" | "md-2" | "lg",
    children: ReactNode
}

function Widget({children, style}: WidgetProps) {
    let classStyle = "";
    if (style == "lg") {
        classStyle = "p-4 md:p-8 col-span-3 md:col-span-2 row-span-3 flex"
    } else if (style == "md-1") {
        classStyle = "py-4 px-12 col-span-3 flex"
    } else if (style == "md-2") {
        classStyle = "p-2 col-span-3"
    } else {
        classStyle = "p-2 col-span-1 flex"
    }
    return <div className={`widget bg-widget h-full rounding relative overflow-hidden ${classStyle}`}>
        <div className="absolute inset-0 border-3 w-full h-full brightness-[300] rounding border-zinc-300/25"></div>
        {children}
    </div>
    
}

export default Widget;