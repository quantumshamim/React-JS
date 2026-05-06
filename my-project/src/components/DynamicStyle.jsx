import { useState } from "react"

function DynamicStyle(){
    const [isActive, setisActive] = useState(true);

    const Style = {
        backgroundColor : isActive ? "green" : "red",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer"

    }

    const Activity = ()=>(
        setisActive(!isActive)
    )
    return(
        <>
            <button style={Style} onClick={Activity}>
                {isActive ? "Active" : "Inactive"}
            </button>
        </>
    )
}

export default DynamicStyle