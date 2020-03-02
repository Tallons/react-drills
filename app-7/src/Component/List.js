import React from 'react'

function List (props){
  return(
        <div>
          {props.view.map((element, index) => {
            return <div key={index}> {element} </div>;})}
        </div> 
  )
}
export default List