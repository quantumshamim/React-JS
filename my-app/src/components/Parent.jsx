import Child from "./Child"

function Parents(){

    const MyParent = ()=>{
        alert("hey, you !")
    }
    return(
        <>
            <h3>Parent Components</h3>

            <Child MyFun = {MyParent}/>
        </>
    )
}
export default Parents