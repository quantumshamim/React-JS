import { useState } from "react"

function MyEvent(){
    const [message, setMessage] = useState("Click the Button");

    const HandleClick = ()=>{
        setMessage("Button Was Clicked")
    }
    return(
        <>
            <h3>{message}</h3>
            <button onClick={HandleClick}>Click Me</button>
        </>
    )
}
export default MyEvent


