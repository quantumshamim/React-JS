import { useState } from "react"
import Greetings from "./Greeting"

function Login(){
    const[IsLoggedIn, SetLoggedIn] = useState(false)

    return(
        <>
            <button onClick={()=> SetLoggedIn(!IsLoggedIn)}>
                {IsLoggedIn ? "Log Out" : "Log In"}
            </button>

            <Greetings IsLogin = {IsLoggedIn} />
        </>
    )
}
export default Login