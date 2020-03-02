import React from 'react'

class TextBox extends React.Component{
  constructor(){
  super()
  this.state = {
      userInput: ""
  }
  }

  handleChange = (event) => {
      this.setState({userInput: event.target.value})
  }

  render(){
    return(
      <div>
        <input 
        className="textBar"
        onChange={(event) => this.handleChange(event)}/>
        <p>{this.state.userInput}</p>

      </div>
    )
  }
}

export default TextBox;

