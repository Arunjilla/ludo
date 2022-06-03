import React from 'react'
class Inceclass extends React.Component{
    constructor(props){
        super()
        this.state={
            a:10,

        }
    }
    handleupdate=()=>{
        const count=this.state.a
        this.setState({a:count+1})

    }
    render(){
        return(
            <>
            <h1>{this.state.a}</h1>
            <button onClick={this.handleupdate}>Incre</button>
      
            </>
        )
    }
}
export default Inceclass;