import { useState } from "react"

function StyleExample(){

const[isActive, setisActive] = useState(true)

const Activity = ()=> {
    setisActive(!isActive)
}
    return(
        <>
            <button onClick={Activity} className={isActive ? "Btn-Active" : "Btn-InActive"}>
                {isActive ? "Active Button" : "Deactive Button"}
            </button>
        </>
    )
}

export default StyleExample