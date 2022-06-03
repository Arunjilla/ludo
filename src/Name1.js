import React from "react";
class Name extends React.Component{
    constructor(){
        super()
        this.state={
            name: "Arun",

        }
    }
    update=()=>{
        this.setState({name:"Jilla"})
    }
    render(){
        return(

            <>
            <p>{this.state.name}</p>
            <button onClick={this.update}>Update Name</button>
            </>
        )
    }
}
export default Name;