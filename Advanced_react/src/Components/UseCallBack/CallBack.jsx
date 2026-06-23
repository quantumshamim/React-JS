import { useCallback, useState } from "react"

function MyCounter(){
    const [count, setCount] = useState(0);

    const Increment = useCallback(
        ()=>{
            setCount((preData) => preData + 1)
        }, []
    )

    const Decrement = useCallback(
        ()=>{
            setCount((preData) => preData - 1)
        }, []
    )

    return(
        <>
            <p>Count: {count} </p>

        <button className='btn bg-indigo-400 p-2 m-2 rounded-md' onClick={Increment}>Increement</button>
        <button className='btn bg-orange-400 p-2 m-2 rounded-md' onClick={Decrement}>Decreement</button>
        </>
    )
}
export default MyCounter