import React, {useRef} from "react";

const MyRef = ()=>{
    const InputRef = useRef(null);
    const ShowValue = ()=>{
        alert(InputRef.current.value)
    }

    return(
        <>
            <input type="text" ref={InputRef} placeholder="enter somethimg..." className="border border-indigo-400" />
            <button className="btn bg-amber-400 rounded" onClick={ShowValue}>Show me</button>
        </>
    )
}

export default MyRef