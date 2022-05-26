import React from 'react'
class Api extends React.Component{
  constructor(){
    super()
    this.state={
      data:[],
    }
  }
  componentDidMount(){
    fetch('https://api.github.com/users')
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({data:json})
      console.log(json);
    })
  }
  render(){
    return(
      <>
      {this.state.data.map((users)=>{
        return(
          <>
          <h1>{users.login}</h1>
          <img src={users.avatar_url} width='200px'/>
          </>
        )
      })}
      
      </>
    )
  }
}
export default Api;