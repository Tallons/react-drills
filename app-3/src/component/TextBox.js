import React from "react";


function TextBox (props) {

  return(
    <div>
      <input onChange={(event)=> props.input(event.target.value)}/>
    </div>
  )
}


export default TextBox

