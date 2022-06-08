import React from 'react'
class Inceclass extends React.Component{
    constructor(){
        super()
        this.state={
            a:1,

        }
    }
    update=()=>{
        const count=this.state.a
        this.setState({a:count+1})

    }
    render(){
        return(
            <>
            <h1>{this.state.a}</h1>
            <button onClick={this.update}>Click</button>

            </>
        )
    }
}
export default Inceclass;