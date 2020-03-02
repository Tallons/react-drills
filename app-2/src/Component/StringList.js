import React from "react"

class StringList extends React.Component{
  constructor(){
    super()
    this.state = {
      list: [ "Manzana", "Banana", "Naranja", "Pina"]
    }
  }

  // displayList = () => {
    
  // }

  render(){
    return(
      <div>
        <p>{this.state.list.map(function(element,index) {return <h2 key={index}>{element}</h2>;
        })}
        </p>
      </div>
    )
  }
}
export default StringList