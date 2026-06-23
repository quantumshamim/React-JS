import React, { children, useState } from 'react'
import ThemeContext from './ContextAPI';

function ApiProvider({children}) {
    const [theme, setTheme] = useState("light");

    const ToggleTheme = ()=>{
        setTheme(
            (PrevTheme)=>(
                PrevTheme === "light" ? "dark" : "light"
            )
        )
    }

    return(
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ApiProvider
