import React from 'react'
import UserInput from "./UserInput"

class Todo extends React.Component{
  constructor(){
    super()
    this.state = {
      userInput: "",
      todoList: [],
    }
  }

changeHandler = (value) => {
 this.setState({userInput: value})
 console.log(value)
}
clickHandler = () => {
  let value = this.state.todoList.slice()
  value.push(this.state.userInput)
    console.log(value)

    console.log(this.state.userInput)
  this.setState({todoList: value, 
    input: ""  })
}
  render(){

    return(
      <div>
        <UserInput input={this.changeHandler}
        click={this.clickHandler}
        view={this.state.todoList} />
      </div>
    )
  }
}

export default Todo