import { useState } from "react";

function OnChange(){
    const [val, setVal] = useState("please write something");

    const handleChange = (e)=> {
        setVal(e.target.value)
    }
    return(
        <>
            <h3>{val}</h3>
            <input type="text" onChange={handleChange} />
        </>
    )
}
export default OnChange