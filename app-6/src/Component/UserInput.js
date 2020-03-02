import React from 'react'

function UserInput (props){

    return(
      <div>
        <input onChange={(event) => props.input(event.target.value)}/> 
        <button onClick={(event)=> props.click(event.target.value)}>ADD</button> 
        <div>
          {props.view.map((element, index) => {
            return <div key={index}> {element} </div>;})}
        </div> 
      </div>
    )
}

export default UserInput