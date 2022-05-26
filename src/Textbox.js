import React from "react";
class Textbox extends React.Component{
    constructor(){
        super()
        this.state={
            a:10,
        }
    }
    update=(e)=>{
        this.setState({a:e.target.value})

    }
    render(){
        return(
            <>
            <input type='text' value={this.state.a} onChange={this.update}/>
            <h2>My Name is :{this.state.a}</h2>
            </>
        )
    }
}
export default Textbox;