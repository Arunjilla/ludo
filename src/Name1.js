import React from "react";
class Name extends React.Component{
    constructor(){
        super()
        this.state={
            name: "Arun",

        }
    }
    // update=()=>{
    //     this.setState({name:"Jilla"})
    // }
    render(){
        return(

            <>
            <p>{this.state.name}</p>
            <button onClick={()=>this.setState({name:"Jilla"})}>Update Name</button>
            </>
        )
    }
}
export default Name;