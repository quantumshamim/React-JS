import React, { useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case "Increment" :
            return {count: state.count + 1}

        case "Decrement" :
            return {count: state.count - 1}

        default :
            throw new Error("Unknown action typed")
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, {count : 0})

    const Increment = () => {
        dispatch({type: "Increment"})
    }

    const Decrement = () => {
        dispatch({type: "Decrement"})
    }


  return (
    <>
        <p>Count: {state.count}</p>

        <button className='btn bg-indigo-400 p-2 m-2 rounded-md' onClick={Increment}>Increement</button>
        <button className='btn bg-orange-400 p-2 m-2 rounded-md' onClick={Decrement}>Decreement</button>
    </>
  )
}

export default Counter