import { useState } from "react"

function MyState(){
    const [MyData, setDate] = useState(0);

    const DateChange = ()=>{
        setDate(MyData +1)
    }
    return(
        <>
            <p>{MyData}</p>
            <button onClick={DateChange}>Count</button>
        </>
    )
} 
export default MyState