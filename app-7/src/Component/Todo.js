import React from 'react'
import NewTask from "./NewTask"
import List from "./List"

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
        <NewTask input={this.changeHandler}
        click={this.clickHandler}/>
        <List view={this.state.todoList} />
      </div>
    )
  }
}

export default Todo