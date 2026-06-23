import React from "react";

class Example extends React.Component{
    constructor(props){
        super(props);
        this.state={
            favColor: "red"
        }
    }

    static getDerivedStateFromProps(props,state){
        return{
            favColor: props.color
        }
    }

    render(){
        return(
            <>
                <h1>this is my fav color {this.state.favColor}</h1>
            </>
        )
        
    }
}
export default Example