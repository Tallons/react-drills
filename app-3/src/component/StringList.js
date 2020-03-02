import React, { Component } from "react"
import TextBox from "./TextBox"

class StringList extends Component{
constructor(){
  super()
  this.state ={
    list: ["Manzana", "Banana", "Naranja","Pina","Melon"],
    userInput: ""
  }
}


  changeHandler = (value) => {
      this.setState({
        userInput: value 
     })
  }
  



  render(){
    // const viewArray = this.state.list
    // .filter(function(element){return element.includes(this.state.userInput)})
    //   .map(function(element,index){return <h3 key={index}>{element}</h3>})
      
      const viewArray = this.state.list.filter(e => e.includes(this.state.userInput)).map((e, i) => <h3 key={i}>{e}</h3>)

  return(
    <div>
      <TextBox  input={this.changeHandler}/>
      <div>{viewArray}</div>
  
    </div>
  )
}
}
export default StringList