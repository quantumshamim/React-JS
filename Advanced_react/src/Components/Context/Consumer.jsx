import React, {useContext} from "react";
import ThemeContext from "./ContextAPI";

function ThemeToggler(){
    const {theme, ToggleTheme} = useContext(ThemeContext);

    return(
        <>
            <p>The current theme is {theme}</p>
            <button onClick={ToggleTheme}>
                {theme === "light" ? "dark" : "light"} 
                change
            </button>
        </>
    )
}
export default ThemeToggler