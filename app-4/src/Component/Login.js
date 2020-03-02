import React from 'react'

class Login extends React.Component{
  constructor(){
    super()
    this.state ={
      username: "",
      password: ""
    }
  }

    handleUsernameChange = (name) => {
      this.setState({username: name})
    }

    handlePasswordChange = (password) => {
      this.setState({password: password})
    }

    handleLogin = () => {
      alert("Username: " + this.state.username + " Password: " + this.state.password)
    }

  render(){
    return(
      <div>
        <input
          onChange={event => this.handleUsernameChange(event.target.value)}
        />
        <input
          onChange={event => this.handlePasswordChange(event.target.value)}
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }

}

export default Login