import "./hero.css" //normal
import Styles from "./heroArea.module.css"

function Hero(){
    const MyStyle = {
        color: "yellow",
        backgroundColor: "black"
    }

    return(
        <>
            <h1 style = {{backgroundColor: "green"}}>This is hero Section</h1>

            <h2 id="excss">This section is for External Design</h2>

            <h3 style={MyStyle} >This block is from object for styling</h3>

            <div className={Styles.HeroArea}>
                <p>styling from module</p>
            </div>
        </>
    )
}

export default Hero;