import React from 'react'

function BuggyComp() {
    //throw new Error("I crashed")

    return <h1>This won't render because of the error</h1>

}
export default BuggyComp