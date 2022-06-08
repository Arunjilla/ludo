import React from 'react'
class Api extends React.Component {

  constructor() {
    super()
    this.state = {
      data: [],

    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json })
      })
  }
  render() {
    return (

      <>
      {this.state.data.map((user)=>{
        return(

          <>
          <h1>{user.login}</h1>
          </>
        )
      })}

      </>
    )
  }

}
export default Api;