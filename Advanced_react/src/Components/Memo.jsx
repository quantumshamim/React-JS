import React, {memo, useState} from "react";

const Child = memo(
    ({count})=>{
        console.log("child component is rendering");
        return(
            <>
                <p>Count: {count}</p>
    
            </>
        )
    }
        
)

const Parent = ()=> {
    const [count, setCount] = useState(0)

    const counter = ()=>{
        setCount(count+1)
    }
    return(
        <>
            <div>
                <Child count={count}/>
                <button className="btn bg-indigo-500 p-1 rounded " onClick={counter}>Increement</button>
            </div>
        </>
    )
}

export default Parent