import React from 'react'

class Image extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <img src={this.props.url} />
        <div> Experiment 626 </div>
      </div>
    )
  }
}

export default Image