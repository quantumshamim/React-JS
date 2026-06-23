import React from 'react'

function HigherOrderComponent() {

    const HigherComp = (NComp)=>{
        return(props)=>{
            return(
                <>
                    <NComp {...props}/>
                </>
            )
        }
    }

    const NormalComp= ()=>{
        return <h1>normal component</h1>
    }

    const Connectfunc = HigherComp(NormalComp)

    return (
        <div>
            <Connectfunc />
        </div>
    )
}

export default HigherOrderComponent
