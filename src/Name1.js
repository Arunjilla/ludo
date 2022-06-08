import React from 'react'
class Name1 extends React.Component{
    constructor(){
        super()
        this.state={
            name:"Arun",
        }
    }
    
    // update=()=>{
    //     this.setState({name:"Jilla"})
    // }
    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <button onClick={()=>this.setState({name:"Jilla"})}>Click Change Name</button>

            </>
        )
    }
}
export default Name1;