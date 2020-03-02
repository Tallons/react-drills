import React from 'react'

function NewTask (props){

    return(
      <div>
        <input onChange={(event) => props.input(event.target.value)}/> 
        <button onClick={(event)=> props.click(event.target.value)}>ADD</button> 
      </div>
    )
}

export default NewTask